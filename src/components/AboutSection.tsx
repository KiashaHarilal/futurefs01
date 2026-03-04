import { motion } from "framer-motion";
import { Bug, SearchCheck, Code, Laptop } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">About</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-12">Who Am i?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 text-muted-foreground leading-relaxed"
          >
            <p>
              Hi, I'm <span className="text-primary font-semibold">Kiasha Harilal</span>    a final-year Bachelors of science in Information Technology (Software Engineering ) student at Eduvos, I have
              built a strong foundation in Python programming, network security principles, and cloud platform
              technologies. My passion for software quality and user experience drives me to pursue a career in software testing. I'm
              an aspiring software tester with a keen eye for detail and a passion for delivering 
              flawless user experiences.
            </p>
            <p>
              I believe that quality assurance is the backbone of great software. 
              My goal is to bridge the gap between development and user satisfaction 
              by identifying issues before they reach end users.
            </p>
            <p>
              I'm continuously learning about manual testing, automated testing frameworks, 
              and modern QA methodologies to build a strong foundation in software quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Bug, title: "Bug Hunting", desc: "Finding defects before users do" },
              { icon: SearchCheck, title: "Test Planning", desc: "Creating comprehensive test strategies" },
              { icon: Code, title: "Automation", desc: "Learning Selenium & testing frameworks" },
              { icon: Laptop, title: "Manual Testing", desc: "Thorough exploratory & regression testing" },
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 bg-card border border-border rounded-lg hover:border-primary/50 hover:box-glow transition-all duration-300 group"
              >
                <item.icon className="w-6 h-6 text-primary mb-3 group-hover:text-glow-strong" />
                <h3 className="text-foreground font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
