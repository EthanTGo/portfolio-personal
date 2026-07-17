import { PDFDocument, rgb, StandardFonts } from "pdf-lib";
import * as fs from "fs";
import * as path from "path";

async function generatePDF() {
  console.log("Generating exact high-fidelity resume.pdf...");

  const pdfDoc = await PDFDocument.create();

  // Set document metadata
  pdfDoc.setTitle("Ethan Go - Curriculum Vitae");
  pdfDoc.setAuthor("Ethan Go");
  pdfDoc.setSubject("Academic CV & Resume");

  // Embed Times Roman fonts to perfectly match the LaTeX template styling
  const fontRegular = await pdfDoc.embedFont(StandardFonts.TimesRoman);
  const fontBold = await pdfDoc.embedFont(StandardFonts.TimesRomanBold);
  const fontItalic = await pdfDoc.embedFont(StandardFonts.TimesRomanItalic);

  const width = 612; // US Letter width
  const height = 792; // US Letter height
  const marginX = 54; // 0.75 in margins

  // Helper function to wrap text within a maximum width
  function wrapText(text: string, maxWidth: number, font: any, size: number): string[] {
    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine = "";

    for (const word of words) {
      const testLine = currentLine ? currentLine + " " + word : word;
      const testWidth = font.widthOfTextAtSize(testLine, size);
      if (testWidth > maxWidth) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    }
    if (currentLine) {
      lines.push(currentLine);
    }
    return lines;
  }

  // Define active variables for layout
  let page = pdfDoc.addPage([width, height]);
  let currentY = height - 50;

  // Draw simple text helper
  function drawText(
    text: string,
    x: number,
    y: number,
    options: { font?: any; size?: number; color?: any } = {}
  ) {
    page.drawText(text, {
      x,
      y,
      font: options.font || fontRegular,
      size: options.size || 9.5,
      color: options.color || rgb(0.08, 0.08, 0.08),
    });
  }

  // Draw thin line separator
  function drawLine(y: number, thickness = 0.5) {
    page.drawLine({
      start: { x: marginX, y },
      end: { x: width - marginX, y },
      thickness,
      color: rgb(0.2, 0.2, 0.2),
    });
  }

  // Section Header Generator
  function drawSectionHeader(title: string) {
    currentY -= 6;
    drawText(title.toUpperCase(), marginX, currentY, { font: fontBold, size: 10, color: rgb(0.05, 0.05, 0.05) });
    currentY -= 4;
    drawLine(currentY, 0.5);
    currentY -= 12;
  }

  // Wrapped Bullet point drawer
  function drawBulletPoint(text: string, indent = 15) {
    const bulletX = marginX + indent - 10;
    const textX = marginX + indent;
    const maxTextWidth = width - marginX - textX;
    const lines = wrapText(text, maxTextWidth, fontRegular, 9);

    // Draw bullet symbol
    page.drawText("•", { x: bulletX, y: currentY, font: fontRegular, size: 9, color: rgb(0.08, 0.08, 0.08) });

    for (let i = 0; i < lines.length; i++) {
      page.drawText(lines[i], { x: textX, y: currentY, font: fontRegular, size: 9, color: rgb(0.08, 0.08, 0.08) });
      currentY -= 11.5; // line height
    }
    currentY -= 1.5; // gap between bullets
  }

  // --- PAGE 1: HEADER ---
  drawText("Ethan Go", marginX, currentY, { font: fontBold, size: 24 });
  
  // Right aligned contacts
  let rY = height - 50;
  const rX = width - marginX - 180;
  drawText("Email: ethango1997@gmail.com", rX, rY, { size: 8.5 });
  rY -= 11;
  drawText("Mobile: 929-309-6277", rX, rY, { size: 8.5 });
  rY -= 11;
  drawText("LinkedIn: linkedin.com/in/ethanthego/", rX, rY, { size: 8.5 });
  rY -= 11;
  drawText("GitHub: github.com/EthanTGo", rX, rY, { size: 8.5 });
  rY -= 11;
  drawText("Personal Website", rX, rY, { size: 8.5 });

  currentY -= 14;
  drawText("M.S Statistics (concentration in Biostatistics)", marginX, currentY, { font: fontRegular, size: 10 });
  currentY -= 13;
  drawText("Northeastern University", marginX, currentY, { font: fontRegular, size: 10 });

  currentY -= 15;
  drawLine(currentY, 0.75);
  currentY -= 10;

  // --- EDUCATION ---
  drawSectionHeader("Education");

  // Northeastern
  drawText("Northeastern University, Boston, MA | M.S. Statistics (Biostatistics)", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("May 2027 (Expected)", width - marginX - 100, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawBulletPoint("Cumulative GPA: 4.0 (Summer 2026)");
  drawBulletPoint("Relevant Coursework: Real Analysis 1†, Causal Inference 2†, Advanced Method in Biostatistics†, Causal Inference 1, Generalized Linear Model, Foundation of Statistics, Stochastic Process, Statistical Learning");

  currentY -= 4;
  // BU MS
  drawText("Boston University, Boston, MA | M.S. Applied Data Analytics", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("May 2022", width - marginX - 45, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawBulletPoint("Cumulative GPA: 3.79");
  drawBulletPoint("Relevant Coursework: Machine Learning, Deep Learning, Big Data Management");

  currentY -= 4;
  // BU BA
  drawText("Boston University, Boston, MA | B.A. Computer Science", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("May 2020", width - marginX - 45, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawBulletPoint("Computer Science Major and Economics Minors");
  drawBulletPoint("Relevant Coursework: Linear Algebra, Multi-variable Calculus, Statistics in Computer Science, Econometrics");

  currentY -= 2;
  drawText("[†] Fall 2026 Semester at Northeastern University", marginX, currentY, { font: fontItalic, size: 8 });
  currentY -= 12;

  // --- PUBLICATIONS ---
  drawSectionHeader("Publications");
  const pubText = "[1] Zhang Zongshun, Ethan Timoteo Go \"Grand Challenge: Anomaly Detection for NILM Task with Apache Flink\". ACM (2020).";
  const pubLines = wrapText(pubText, width - marginX * 2, fontRegular, 9);
  for (const line of pubLines) {
    drawText(line, marginX, currentY, { font: fontRegular, size: 9 });
    currentY -= 12;
  }
  currentY -= 2;

  // --- WORKING PAPERS ---
  drawSectionHeader("Working Papers");
  
  // Paper 1
  drawText("[1]", marginX, currentY, { font: fontBold, size: 9 });
  const wp1Title = "Ethan Timoteo Go “Synthesis on Synthetic Control in the Firearms Literature”. Current ongoing paper as a research assistant for Professor Matthew Miller (Northeastern University) working alongside Professor Louissa Smith (Northeastern University) and Dr. Deb Azrael (Harvard University) (2026).";
  const wp1Lines = wrapText(wp1Title, width - marginX * 2 - 15, fontRegular, 9);
  for (let i = 0; i < wp1Lines.length; i++) {
    drawText(wp1Lines[i], marginX + 15, currentY, { font: i === 0 ? fontBold : fontRegular, size: 9 });
    currentY -= 12;
  }
  currentY -= 4;

  // Paper 2
  drawText("[2]", marginX, currentY, { font: fontBold, size: 9 });
  const wp2Title = "Ethan Timoteo Go “Does the model matter? A sensitivity analysis of valuation uncertain in LVT simulation”. Working project with Professor Eric Gerber (Northeastern University) and Dr. James Walter Frederiksen (prev: Duke University) (2026).";
  const wp2Lines = wrapText(wp2Title, width - marginX * 2 - 15, fontRegular, 9);
  for (let i = 0; i < wp2Lines.length; i++) {
    drawText(wp2Lines[i], marginX + 15, currentY, { font: i === 0 ? fontBold : fontRegular, size: 9 });
    currentY -= 12;
  }
  currentY -= 4;

  // --- EXPERIENCE (PAGE 1) ---
  drawSectionHeader("Experience");

  // Northeastern University RA
  drawText("Northeastern University", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("Boston, MA", width - marginX - 55, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawText("Research Assistant", marginX, currentY, { font: fontItalic, size: 9 });
  drawText("Nov 2025 - Present", width - marginX - 95, currentY, { font: fontRegular, size: 9 });
  currentY -= 12;
  drawBulletPoint("Conducted independent research with Professor. Matthew Miller, Professor. Louisa Smith, and Dr. Deb Azrael, evaluating the application of the Synthetic Control Method (SCM) to firearm policy evaluation.");
  drawBulletPoint("Identified methodological limitations and untestable assumptions in SCM as applied to firearm policy setting, and developed evidence-based design guidance for epidemiological applications.");
  drawBulletPoint("Synthesizing frameworks from the SCM and difference-in-differences (DID) literatures to identify open methodological gaps and propose approaches for evaluating public health interventions.");

  currentY -= 4;
  // Biostatistics Research Center
  drawText("Biostatistics Research Center at Northeastern University", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("Boston, MA", width - marginX - 55, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawText("Biostatistician", marginX, currentY, { font: fontItalic, size: 9 });
  drawText("Oct 2025 - Present", width - marginX - 95, currentY, { font: fontRegular, size: 9 });
  currentY -= 12;
  drawBulletPoint("Defined key research questions and analyzed statistical findings for an academic publication, contributing across the research process from conceptualization to interpretation.");
  drawBulletPoint("Analyzed multi-wave longitudinal survey data from the NIA-funded Puerto Rican Elder: Health Conditions (PREHCO) aging cohort and authored a comprehensive data dictionary that documented variable definitions, coding schemes, and dataset structure to support reproducible health outcomes analysis.");


  // --- PAGE 2 ---
  page = pdfDoc.addPage([width, height]);
  currentY = height - 50;

  drawSectionHeader("Experience (Continued)");

  // Bloomreach
  drawText("Bloomreach", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("Mountain View, CA", width - marginX - 85, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawText("Software Englineer", marginX, currentY, { font: fontItalic, size: 9 });
  drawText("July 2022 - May 2025", width - marginX - 100, currentY, { font: fontRegular, size: 9 });
  currentY -= 12;
  drawBulletPoint("Researched and evaluated LLM architectures for semantic search, benchmarking retrieval approaches before integrating a model into Apache SOLR search algorithms — improving recall accuracy by 30% and boosting top-5 result relevance.");
  drawBulletPoint("Designed Bloomreach’s attribute extraction logic to enable multilingual catalog support, implementing backend and frontend functionality for French and German data integration.");
  drawBulletPoint("Refactored Spark and Kafka applications to process 2 million events per day from Cassandra, increasing pipeline throughput by 35%.");

  currentY -= 4;
  // Telenav 1
  drawText("Telenav", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("Santa Clara, CA", width - marginX - 80, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawText("Data Science Intern", marginX, currentY, { font: fontItalic, size: 9 });
  drawText("June 2021 - August 2021", width - marginX - 110, currentY, { font: fontRegular, size: 9 });
  currentY -= 12;
  drawBulletPoint("Modeled high-frequency accelerometer and gyroscope time series (triaxial, sub-second sampling) to classify distinct movement patterns, using Random Forest and logistic regression on raw and derived motion features.");
  drawBulletPoint("Developed a composite risk score from multi-modal sensor streams, correcting measurement error and signal noise across heterogeneous sensor sources.");
  drawBulletPoint("Built a Python/SQL ETL pipeline to ingest and clean raw telemetry from AWS S3, handling missing data and device-level variation prior to downstream modeling.");
  drawBulletPoint("Validated models via cross-validation and ROC analysis, emphasizing false-positive control for a deployment setting with asymmetric error costs.");

  currentY -= 4;
  // Telenav 2
  drawText("Telenav", marginX, currentY, { font: fontBold, size: 9.5 });
  drawText("Santa Clara, CA", width - marginX - 80, currentY, { font: fontBold, size: 9.5 });
  currentY -= 12;
  drawText("Data Science Intern", marginX, currentY, { font: fontItalic, size: 9 });
  drawText("June 2021 - August 2021", width - marginX - 110, currentY, { font: fontRegular, size: 9 });
  currentY -= 12;
  drawBulletPoint("Accountable for developing and growing the BUDS Labs Kaggle Data Analytics competition page by creating Kaggle Notebooks that provided user insights and increased engagement.");
  drawBulletPoint("Conducted research and analyzed different business problems related to energy and electricity consumption within an environmentally friendly building, identifying measurable patterns and trends.");
  drawBulletPoint("Utilized Python to clean, analyze, and model data to compare the advantages of different environmentally friendly architectures, producing measurable comparisons.");

  currentY -= 4;
  // --- CERTIFICATION & AWARDS ---
  drawSectionHeader("Certification & Awards");
  drawBulletPoint("HarvardX's Master in Data Science", 10);
  drawBulletPoint("GetSmarter's MIT Implementation of Machine Learning in Business", 10);
  drawBulletPoint("Udacity's Data Visualization Nanoprogram", 10);
  drawBulletPoint("MLH (Major League Hacking) Boston College's Hack The Heights 3 General Prize Winner", 10);

  currentY -= 4;
  // --- SKILLS & INTERESTS ---
  drawSectionHeader("Skills & Interests");
  drawBulletPoint("Programming: R, Python, SAS, Java, Stata, HTML, CSS, JavaScript", 10);
  drawBulletPoint("Languages: Indonesian, English, Japanese and Chinese", 10);
  drawBulletPoint("Big Data and Processing: Apache Kafka, Apache Solr, Apache Airflow, Apache Flink, Apache Spark", 10);
  drawBulletPoint("Database Management: Postgres, SQL, Cassandra", 10);
  drawBulletPoint("Cloud and Infrastructure: AWS, Docker, Kubernetes, Nginx", 10);
  drawBulletPoint("Soft Skills: Teamwork, Presentation, Communication Skills", 10);
  drawBulletPoint("Interest: Running, Gym, Volleyball, Reading", 10);

  // Compile and save PDF bytes to /public/resume.pdf
  const pdfBytes = await pdfDoc.save();
  const publicDir = path.join(process.cwd(), "public");
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const destPath = path.join(publicDir, "resume.pdf");
  fs.writeFileSync(destPath, pdfBytes);
  console.log(`Success! PDF compiled to ${destPath}`);
}

generatePDF().catch(err => {
  console.error("Failed to generate PDF:", err);
  process.exit(1);
});
