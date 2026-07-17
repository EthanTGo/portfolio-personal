import { motion } from "motion/react";

const getAssetUrl = (path: string) => {
  const base = import.meta.env.BASE_URL || "/";
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${cleanPath}`;
};

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-32"
    >
      {/* Story & Portrait Block */}
      <section className="flex flex-col gap-12 items-center">
        {/* Landscape Portrait Frame above text */}
        <div className="relative w-full max-w-3xl flex justify-center">
          <div className="absolute -inset-4 bg-ghibli-pink/5 rounded-[3rem] rotate-1 -z-10" />
          <div className="absolute -inset-4 bg-ghibli-blue/5 rounded-[3rem] -rotate-1 -z-10" />
          <img 
            src={getAssetUrl("img2.JPG")} 
            alt="Ethan Go with his parents"
            className="w-full aspect-[4/3] md:aspect-[16/10] object-cover rounded-[2.5rem] border-[10px] border-white shadow-2xl shadow-ghibli-ink/10"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.includes("img2.JPG")) {
                img.src = getAssetUrl("img2.jpg");
              } else if (img.src.includes("img2.jpg")) {
                img.src = getAssetUrl("ethango.jpeg");
              }
            }}
          />
        </div>

        {/* Story Text */}
        <div className="w-full max-w-3xl space-y-8 text-ghibli-ink/80 font-light leading-relaxed">
          <h2 className="font-serif text-3xl font-bold text-ghibli-ink mb-4">My background</h2>
          
          <p>
            Hi, my name is Ethan Go, and I was born in Indonesia. Growing up, my family (Father, Mother and 2 younger brothers) moved around to different regions of Indonesia (Surabaya, Jakarta, and Sorong). I spent a good portion of my childhood on the island of Papua, where many of my father’s side of the family were born. Though I often longed to live in a metropolitan area, that experience shaped much of my worldview and appreciation for nature!
          </p>
          
          <p>
            Eventually, I got my wish and moved to Jakarta for middle and high school, where I had to adapt to a city lifestyle. It was challenging, and I struggled a lot! But these were the times in my life when I really had to open up my worldview and learn to appreciate other people.
          </p>

          <p>
            When I moved to college in the States, it was yet another period of adaptation, but it was a turning point in my life in terms of direction. Living in the States was difficult, and with the COVID-19 pandemic thwarting my plans in my senior years, it did not make things any easier. However, after my senior year at Boston University, I met a group of Christians, and through Bible studies I realized I had never had a personal relationship with Jesus Christ. It was through the grace of God that I could be saved and be here today! One of my favorite verses is <strong className="font-bold text-ghibli-ink">Psalm 73:26: “My flesh and my heart may fail, but God is the strength of my heart and my portion forever”, reminding me that in my failure, I should always turn back to my God who never fails.</strong>
          </p>
        </div>
      </section>

      {/* Personal Passions Section */}
      <section className="w-full max-w-3xl mx-auto space-y-8 text-ghibli-ink/80 font-light leading-relaxed pb-16">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="font-serif text-3xl font-bold text-ghibli-ink">Personal Passions</h2>
          <div className="h-px flex-1 bg-ghibli-ink/10" />
        </div>

        {/* Forest Running Photo */}
        <div className="relative w-full flex justify-center">
          <div className="absolute -inset-4 bg-ghibli-pink/5 rounded-[3rem] rotate-1 -z-10" />
          <div className="absolute -inset-4 bg-ghibli-blue/5 rounded-[3rem] -rotate-1 -z-10" />
          <img 
            src={getAssetUrl("img3.JPG")} 
            alt="Ethan Go running in the forest with a deer" 
            className="w-full aspect-[4/3] md:aspect-[16/10] object-cover rounded-[2.5rem] border-[10px] border-white shadow-2xl shadow-ghibli-ink/10"
            referrerPolicy="no-referrer"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.includes("img3.JPG")) {
                img.src = getAssetUrl("img3.jpg");
              } else if (img.src.includes("img3.jpg")) {
                img.src = getAssetUrl("ethan_go.jpg");
              }
            }}
          />
        </div>

        <p>
          You can find me at church on Sunday if I’m in Boston. Feel free to check our site (
          <a 
            href="https://www.antiochboston.org/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-ghibli-pink hover:underline font-medium inline-flex items-center gap-1"
          >
            https://www.antiochboston.org/
          </a>
          ) if you are interested in joining!
        </p>

        <p>
          In my free time, I enjoy a variety of activities. I enjoy watching sports; my favorite soccer team is Chelsea FC! I grew up watching Chelsea when I was a young boy, because I initially loved the color blue! But Chelsea was a dominant force under players such as John Terry, Lampard, Drogba, and Petr Cech!
        </p>

        <p>
          I also loved running and have run the Cambridge half-marathon twice! My goal in the near future is to run a full marathon! I like volleyball and have played different BSSC leagues around Boston. I mainly play outside hitter, but I want to learn to set better! I also enjoy reading the Bible, working out with friends, cooking, doing some acrylic painting, and listening to gospel music in my free time!
        </p>
      </section>
    </motion.div>
  );
}
