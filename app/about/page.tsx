import { personalData } from "@/data/personal";
import { BadgeCheck, Briefcase, GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Bio Section */}
      <section className="mb-12 sm:mb-16 lg:mb-20">
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
        <span className="gradient-text">{personalData.about.title}</span>
      </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start">
           {/* Placeholder for profile image if available, else simple block */}
          <div className="w-full md:w-1/3 aspect-square bg-muted rounded-2xl flex items-center justify-center overflow-hidden relative">
             <div className="text-6xl">👩‍💻</div>
             {/* If user uploads an image, they can replace this div with:
             <Image src="/images/profile.jpg" alt={personalData.about.name} fill className="object-cover" /> 
             */}
          </div>
          
          <div className="flex-1 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold">{personalData.about.name}</h2>
            <h3 className="text-lg sm:text-xl text-secondary font-semibold">{personalData.about.role}</h3>
            <p className="text-base sm:text-lg leading-relaxed text-muted-foreground">{personalData.about.description}</p>
            <p className="font-semibold text-primary">{personalData.about.subtext}</p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-effect p-4 sm:p-6 rounded-2xl transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{personalData.experiences.length}+</div>
                <div className="text-sm text-muted-foreground">Projets significatifs</div>
              </div>
               <div className="glass-effect p-4 sm:p-6 rounded-2xl transition-all hover:scale-105">
                <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">{personalData.education.length}</div>
                <div className="text-sm text-muted-foreground">Diplômes & Certifs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="mb-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 flex items-center gap-2">
          <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <span className="gradient-text">Compétences Techniques</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Frontend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Frontend</h3>
            <div className="space-y-3">
              {personalData.skills.frontend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium flex items-center gap-2">
                       <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Backend</h3>
            <div className="space-y-3">
              {personalData.skills.backend.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium flex items-center gap-2">
                       <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

           {/* Database */}
           <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Base de données</h3>
            <div className="space-y-3">
              {personalData.skills.database.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium flex items-center gap-2">
                       <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
           {/* Tools */}
           <div className="space-y-4">
            <h3 className="text-xl font-semibold border-b pb-2">Outils</h3>
            <div className="space-y-3">
              {personalData.skills.tools.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium flex items-center gap-2">
                       <span>{skill.icon}</span> {skill.name}
                    </span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full bg-primary" style={{ width: `${skill.level}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <Briefcase className="h-8 w-8 text-primary" />
          Expérience
        </h2>
        <div className="space-y-8">
          {personalData.experiences.map((exp) => (
            <div key={exp.id} className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <div className="text-lg text-primary">{exp.company}</div>
                </div>
                <div className="text-muted-foreground mt-2 md:mt-0 flex flex-col md:items-end">
                   <span>{exp.period}</span>
                   <span className="text-sm">{exp.location}</span>
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-1 mb-4">
                {exp.achievements.map((achievement, i) => (
                  <li key={i}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="bg-secondary text-secondary-foreground px-2 py-1 rounded text-xs font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education Section */}
      <section>
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <GraduationCap className="h-8 w-8 text-primary" />
          Formation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personalData.education.map((edu) => (
            <div key={edu.id} className="bg-card border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                   <h3 className="text-xl font-bold">{edu.degree}</h3>
                   <div className="text-primary font-medium">{edu.school}</div>
                </div>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                  {edu.status}
                </div>
              </div>
              
              <div className="flex justify-between text-sm text-muted-foreground mb-4">
                <span>{edu.period}</span>
                <span>{edu.location}</span>
              </div>
              
              <p className="mb-4 text-sm">{edu.description}</p>
              
              <div className="space-y-2">
                {edu.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                    <BadgeCheck className="h-4 w-4 text-green-500 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
