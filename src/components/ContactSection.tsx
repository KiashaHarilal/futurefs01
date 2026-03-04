import { motion } from "framer-motion";
import { ExternalLink, Award, Shield, Lock, Globe, Code, Cloud, Server } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const certificates = [
  {
    title: "Cybersecurity Fundamentals",
    issuer: "IBM",
    issued: "Feb 2026",
    credentialId: null,
    skills: ["Threat Analysis", "Threat Detection", "Information Security", "Cybersecurity", "Cryptography", "Cyber Risk Management", "Cyber Threat Intelligence", "Cyber Threat Analysis"],
    icon: Shield,
    color: "from-blue-600 to-cyan-600",
    link: "https://skills.yourlearning.ibm.com/certificate/share/1a206fbc66ewogICJvYmplY3RJZCIgOiAiUExBTi00RkI4NDAwRjA1RkMiLAogICJsZWFybmVyQ05VTSIgOiAiNjk4MjU1NlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIgp9f0ea5a6317-10", 
    description: "This credential earner demonstrates a foundational understanding of cybersecurity concepts, objectives, and best practices for protecting data and systems."
  },
  {
    title: "Cybersecurity: On the Defense",
    issuer: "IBM",
    issued: "Feb 2026",
    credentialId: "ALM-COURSE_4058980",
    skills: ["Defense Strategies", "Security Controls", "Incident Response", "Network Security"],
    icon: Lock,
    color: "from-purple-600 to-pink-600",
    link: "https://skills.yourlearning.ibm.com/certificate/share/8de92a1027ewogICJsZWFybmVyQ05VTSIgOiAiNjk4MjU1NlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODk4MCIKfQ4e579ed5e5-10", 
    description: "Focused on defensive cybersecurity strategies, including security controls, monitoring, and incident response methodologies."
  },
  {
    title: "Cybersecurity: On the Offense",
    issuer: "IBM",
    issued: "Feb 2025",
    credentialId: "ALM-COURSE_4058979",
    skills: ["Penetration Testing", "Vulnerability Assessment", "Ethical Hacking", "Red Teaming"],
    icon: Server,
    color: "from-red-600 to-orange-600",
    link: "https://skills.yourlearning.ibm.com/certificate/share/39495611deewogICJvYmplY3RJZCIgOiAiQUxNLUNPVVJTRV80MDU4OTc5IiwKICAib2JqZWN0VHlwZSIgOiAiQUNUSVZJVFkiLAogICJsZWFybmVyQ05VTSIgOiAiNjk4MjU1NlJFRyIKfQ2c6d5faea6-10", 
    description: "Comprehensive training on offensive security techniques, including penetration testing methodologies and vulnerability exploitation."
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "IBM",
    issued: "Feb 2026",
    credentialId: "ALM-COURSE_4058978",
    skills: ["Security Fundamentals", "Risk Management", "Compliance", "Security Architecture"],
    icon: Globe,
    color: "from-green-600 to-emerald-600",
    link: "https://skills.yourlearning.ibm.com/certificate/share/87d3302c3fewogICJsZWFybmVyQ05VTSIgOiAiNjk4MjU1NlJFRyIsCiAgIm9iamVjdFR5cGUiIDogIkFDVElWSVRZIiwKICAib2JqZWN0SWQiIDogIkFMTS1DT1VSU0VfNDA1ODk3OCIKfQb086015e0e-10", // Replace with your actual credential link
    description: "Foundation-level cybersecurity course covering core principles, threat landscapes, and security best practices."
  },
];

const CertificatesSection = () => {
  return (
    <section id="certificates" className="py-24 px-6 md:px-12 lg:px-24 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Certifications & <span className="text-primary text-glow">Credentials</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Industry-recognized certifications demonstrating expertise in cybersecurity
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {certificates.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-card border-border hover:border-primary/40 transition-all duration-300 hover:box-glow h-full">
                <CardHeader className="flex flex-row items-start gap-4">
                  <div className={`p-3 rounded bg-gradient-to-br ${cert.color} text-white shadow-lg`}>
                    <cert.icon size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <CardTitle className="text-lg text-foreground">{cert.title}</CardTitle>
                      <Badge variant="outline" className="font-mono text-[10px]">
                        {cert.issuer}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                      <span>Issued {cert.issued}</span>
                      {cert.credentialId && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
                          <span className="font-mono">ID: {cert.credentialId}</span>
                        </>
                      )}
                    </div>
                    {cert.description && (
                      <CardDescription className="mt-3 text-muted-foreground text-sm">
                        {cert.description}
                      </CardDescription>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="font-mono text-[10px] tracking-wider bg-primary/5 text-primary/90 border-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="pt-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group"
                      onClick={() => window.open(cert.link, "_blank")}
                    >
                      <Award className="w-4 h-4 mr-2 text-primary" />
                      Show Credential
                      <ExternalLink className="w-3 h-3 ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;