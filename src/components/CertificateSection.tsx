import { motion } from "framer-motion";
import { Mail, Linkedin, Github } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-xl"
        >
          <p className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-2">Contact</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-muted-foreground leading-relaxed mb-10">
            I'm currently looking for opportunities in software testing and QA. 
            Whether you have a question or just want to connect, feel free to reach out!
          </p>

          <div className="space-y-4">
            <a
              href="mailto:kiasha.harilal@gmail.com"
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 hover:box-glow transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-primary" />
              <div>
                <p className="text-foreground text-sm font-semibold">Email</p>
                <p className="text-muted-foreground text-xs font-mono">kiasha.harilal@gmail.com</p>
              </div>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 hover:box-glow transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-primary" />
              <div>
                <p className="text-foreground text-sm font-semibold">LinkedIn</p>
                <p className="text-muted-foreground text-xs font-mono">www.linkedin.com/in/kiasha-harilal-45a5362b1</p>
              </div>
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 border border-border rounded-lg hover:border-primary/50 hover:box-glow transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-primary" />
              <div>
                <p className="text-foreground text-sm font-semibold">GitHub</p>
                <p className="text-muted-foreground text-xs font-mono">github.com/kiasha-harilal</p>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;