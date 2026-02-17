"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Arrière-plan avec dégradés animés */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-secondary/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-5xl mx-auto z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio 2026</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight px-4">
            <span className="block mb-2">Développeuse</span>
            <span className="block gradient-text">Full Stack</span>
            <span className="block mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">Passionnée & Créative</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Je conçois des <span className="text-primary font-semibold">expériences web modernes</span>, 
            performantes et accessibles.
            <br className="hidden sm:block" />
            Spécialisée en <span className="text-secondary font-semibold">React</span>, <span className="text-accent font-semibold">Next.js</span> et <span className="text-primary font-semibold">Node.js</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="mt-8 sm:mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <Link
            href="/projects"
            className="group relative inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-primary to-secondary hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 w-full sm:w-auto overflow-hidden"
          >
            <span className="relative z-10 flex items-center">
              Voir mes projets
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-4 text-base sm:text-lg font-medium rounded-xl border-2 border-primary/30 bg-card/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact
            </Link>

            <a
              href="/cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-4 text-base sm:text-lg font-medium rounded-xl border-2 border-accent/30 bg-card/50 backdrop-blur-sm hover:bg-accent/10 hover:border-accent transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger CV
            </a>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto px-4"
        >
          <div className="glass-effect p-4 sm:p-6 rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">2+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Projets</div>
          </div>
          <div className="glass-effect p-4 sm:p-6 rounded-2xl text-center hover:scale-105 transition-transform">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">10+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="glass-effect p-4 sm:p-6 rounded-2xl text-center hover:scale-105 transition-transform col-span-2 sm:col-span-1">
            <div className="text-3xl sm:text-4xl md:text-5xl font-bold gradient-text mb-2">100%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Passion</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
