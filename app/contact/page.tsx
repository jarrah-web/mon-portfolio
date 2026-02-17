import ContactForm from "@/components/ContactForm";
import { Mail, Github, Linkedin, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Vous avez un projet en tête ou vous souhaitez simplement discuter ? N&apos;hésitez pas à me contacter !
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="bg-card border rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Mes Coordonnées</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                    contact@example.com
                  </a>
                </div>
              </div>
              
               <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Localisation</div>
                  <div className="text-muted-foreground">
                    Dakar, Sénégal
                  </div>
                </div>
              </div>

               <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">GitHub</div>
                  <a href="https://github.com/jarrah-web" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    github.com/jarrah-web
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-medium">LinkedIn</div>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    linkedin.com/in/jarrah
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-card border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-6">Envoyez-moi un message</h2>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
