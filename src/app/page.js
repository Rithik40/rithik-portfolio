"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#020617] via-[#020024] to-black text-cyan-100 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.15),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(168,85,247,0.12),transparent_60%)] pointer-events-none" />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-cyan-500/20 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="font-bold tracking-widest text-cyan-300">
            RITHIK.B
          </h1>

          <div className="space-x-6 text-sm hidden md:block">
            {["home", "academics", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="uppercase tracking-wider hover:text-fuchsia-400 transition"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="pt-32 max-w-6xl mx-auto px-6 relative">

        {/* HERO */}
        <section id="home" className="text-center space-y-6">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold 
              bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 
              text-transparent bg-clip-text drop-shadow-[0_0_25px_rgba(56,189,248,0.6)]"
          >
            Rithik Balasubramanian
          </motion.h1>

          <p className="text-cyan-300 tracking-wide">
            Integrated MSc Data Science • Amrita Vishwa Vidyapeetham
          </p>

          {/* HERO TAGLINE */}
          <p className="max-w-3xl mx-auto text-cyan-100/80 leading-relaxed">
            Building intelligent systems and machine learning solutions through data-driven innovation.  
            Focused on autonomous technologies, predictive analytics, and real-world problem solving.
          </p>
        </section>

        {/* ACADEMIC PROFILE */}
        <motion.section
          id="academics"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center tracking-widest text-fuchsia-400">
            ACADEMIC PROFILE
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            {[
              {
                title: "Integrated MSc Data Science",
                line1: "Amrita Vishwa Vidyapeetham",
                line2: "2022 – 2027",
                line3: "Currently in 4th Year",
              },
              {
                title: "Higher Secondary Education",
                line1: "Srinivasa Vidhyalaya",
                line2: "Completed in 2022",
                line3: "Mathematics & CS Foundation",
              },
              {
                title: "Certification",
                line1: "Data Analytics with Excel",
                line2: "Year: 2024",
                line3: "Issued by Amrita Vishwa Vidyapeetham",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.06 }}
                className="relative rounded-2xl p-[2px] 
                bg-gradient-to-r from-cyan-400 to-fuchsia-500"
              >
                <div className="rounded-2xl bg-black/70 backdrop-blur-xl p-6 text-center shadow-[0_0_25px_rgba(56,189,248,0.25)]">
                  <h3 className="font-semibold text-lg text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-cyan-200 text-sm">{item.line1}</p>
                  <p className="text-cyan-300/70 text-sm">{item.line2}</p>
                  <p className="text-cyan-100 text-sm mt-3">{item.line3}</p>
                </div>
              </motion.div>
            ))}

          </div>
        </motion.section>

        {/* SKILLS */}
        <motion.section
          id="skills"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center tracking-widest text-cyan-400">
            SKILLS 
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              { title: "🧠 Data Science", skills: "Pandas, NumPy, SQL, Machine Learning, Statistics" },
              { title: "📊 Visualization", skills: "Matplotlib, Seaborn" },
              { title: "💻 Programming", skills: "Python, Java" },
              { title: "🌐 Web", skills: "HTML, CSS" },
              { title: "🗄 Databases", skills: "MySQL, PostgreSQL" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl bg-black/60 backdrop-blur-xl border border-cyan-400/20 
                p-5 shadow-[0_0_15px_rgba(56,189,248,0.2)]"
              >
                <h3 className="font-semibold mb-2 text-cyan-300">
                  {item.title}
                </h3>
                <p className="text-cyan-100/80 text-sm">
                  {item.skills}
                </p>
              </motion.div>
            ))}

          </div>
        </motion.section>

        {/* PROJECTS */}
        <motion.section
          id="projects"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32"
        >
          <h2 className="text-3xl font-bold mb-12 text-center tracking-widest text-purple-400">
            PROJECTS
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[
              {
                title: "Fitness Tracker & Calorie Predictor",
                desc: "Web-based fitness platform that predicts calorie consumption using a trained ML model based on user workout and diet inputs.",
                tools: ["HTML", "CSS", "Machine Learning"],
              },
              {
                title: "Online Chat Application",
                desc: "Desktop chat system enabling user messaging, online status tracking, and message management using server-side technologies.",
                tools: ["JSP", "Servlets", "PostgreSQL"],
              },
              {
                title: "Autonomous Attacking Drone",
                desc: "Reinforcement learning based drone simulation that autonomously navigates toward targets and learns optimal strategies.",
                tools: ["Reinforcement Learning", "Webots"],
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="rounded-xl bg-black/60 backdrop-blur-xl border border-purple-400/30 
                p-5 shadow-[0_0_18px_rgba(168,85,247,0.25)]"
              >
                <h3 className="font-semibold mb-2 text-purple-300">
                  {project.title}
                </h3>

                <p className="text-cyan-100/80 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* TOOL BADGES */}
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full 
                      border border-cyan-400/40 
                      text-cyan-200 
                      bg-cyan-400/10
                      shadow-[0_0_10px_rgba(56,189,248,0.35)]
                      hover:bg-cyan-400/20 transition"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

              </motion.div>
            ))}

          </div>
        </motion.section>

        {/* CONTACT */}
        <motion.section
          id="contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-40 pb-28 text-center space-y-8"
        >
          <h2 className="text-3xl font-bold tracking-widest text-fuchsia-400">
            CONNECT
          </h2>

          <div className="flex justify-center gap-14">

            <a href="mailto:rithikrithik222@gmail.com" className="hover:text-cyan-400">
              <Mail size={36} />
            </a>

            <a href="https://github.com/Rithik40" target="_blank" className="hover:text-purple-400">
              <Github size={36} />
            </a>

            <a href="https://www.linkedin.com/in/rithik-balasubramanian-921a7426b/" target="_blank" className="hover:text-fuchsia-400">
              <Linkedin size={36} />
            </a>

          </div>
        </motion.section>

      </div>
    </main>
  );
}
