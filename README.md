# 🌸 Ethan Go | Personal Portfolio & Research

A personal portfolio website with a nostalgic, editorial aesthetic inspired by **The Tokyoiter** magazine and **Studio Ghibli**. 

This site showcases my work at the intersection of **Machine Learning Systems** and **Causal Inference**, solving complex challenges in economics and population health.

---

## 🎨 Aesthetic & Design

The design philosophy of this portfolio is rooted in the "Tokyoiter" style—a tribute to the iconic *New Yorker* covers, but focused on the vibrant yet peaceful essence of Tokyo.

- **Theme:** Ghibli-inspired cream, cherry blossom pink, and sky blue.
- **Typography:** Elegant serif headings (Cormorant Garamond) paired with clean, modern sans-serif body text (Inter).
- **Layout:** Magazine-style editorial grid with layered, organic shapes and subtle animations.

---

## 🛠️ Tech Stack

- **Frontend:** [React 19](https://react.dev/)
- **Build Tool:** [Vite 6](https://vitejs.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations:** [Motion](https://motion.dev/) (Framer Motion)
- **Icons:** [Lucide React](https://lucide.dev/)

---

## 📁 Key Sections

### 🔬 Research
Showcasing publications and academic work, including my solution for the **DEBS Grand Challenge** on anomaly detection using Apache Flink and DBSCAN.

### 💻 Projects
Interactive tools and software engineering projects like **Collab^2**, a collaborative coding space for instructors and students.

### 🗺️ Journey
A timeline of my academic and professional background:
- **M.S. in Statistics (Biostatistics)** @ Northeastern University
- **Software Engineering** @ Bloomreach (Search Quality Team)
- **B.A. in Computer Science** @ Boston University

---

## 🚀 Deployment to GitHub Pages

To deploy this portfolio to your own GitHub Pages:

1. **Configure Vite Base Path:**
   Open `vite.config.ts` and set the `base` property to match your repository name:
   ```ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   })
   ```

2. **Build and Deploy:**
   Install the deployment package:
   ```bash
   npm install gh-pages --save-dev
   ```
   Add the following scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
   Run the deployment command:
   ```bash
   npm run deploy
   ```

3. **Enable in GitHub Settings:**
   Go to your repo **Settings > Pages** and select the `gh-pages` branch as the source.

---

## 📫 Contact

- **LinkedIn:** [linkedin.com/in/ethanthego](https://www.linkedin.com/in/ethanthego/)
- **GitHub:** [github.com/EthanTGo](https://github.com/EthanTGo)
- **Email:** ethango1997@gmail.com

---

*Made with 🌸 and care.*
