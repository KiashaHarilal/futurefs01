import { motion } from "framer-motion";

const skills = [
  { name: "Python Programming Language", level: 85 },
  { name: "Object-Oriented Programming(OOP)", level: 75 },
  { name: "Data Structures & Algorithms", level: 80 },
  { name: "Web Technologies", level: 90 },
  { name: "HTML5", level: 80 },
  { name: "Cascading Style Sheets (CSS)", level: 85 },
  { name: "JavaScript", level: 70 },
  { name: "Web Server Management", level: 65 },
  { name: "Software Development Life Cycle (SDLC)", level: 80 },
  { name: "System Design", level: 50 },
  { name: "Mobile Application Development: Android Studio", level: 80 },
  { name: "Database Management Systems", level: 75 },
  { name: "SQL / Databases", level: 60 },
  { name: "Database Design", level: 85 },
  { name: "Agile Methodologies", level: 70 },
  { name: "Waterfall", level: 80 },
  { name: "MySQL", level: 65 },
  { name: "Network Security", level: 80 },
  { name: "Threat Analysis", level: 75 },
  { name: "TCP/IP", level: 75 },
  { name: "LAN/WANwan", level: 70 },
  { name: "Cloud Computing", level: 60 },
  { name: "Linux Administration", level: 80 },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">Skills</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">What I Know</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-mono text-sm text-foreground">{skill.name}</span>
                <span className="font-mono text-xs text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                  className="h-full bg-primary rounded-full"
                  style={{ boxShadow: "var(--glow-primary)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
