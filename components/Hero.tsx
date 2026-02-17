"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Download, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      <div className="max-w-4xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-sm md:text-base font-semibold text-primary mb-4 block uppercase tracking-wider">
            Portfolio
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Développeuse <span className="text-primary">Full Stack</span>
            <br />
            Passionnée & Créative
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Je conçois des expériences web modernes, performantes et accessibles. 
            Spécialisée en React, Next.js et Node.js.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/projects"
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg text-primary-foreground bg-primary hover:bg-primary/90 transition-colors w-full sm:w-auto"
          >
            Voir mes projets
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
          <div className="flex gap-4 w-full sm:w-auto">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto"
            >
              <Mail className="mr-2 h-4 w-4" />
              Contact
            </Link>
            <a
              href="/cv.pdf" // Ensure this file exists in public/ or update path
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-lg border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto"
            >
              <Download className="mr-2 h-4 w-4" />
              CV
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative background elements - simple circles/blobs without gradients if requested, but subtle opacity blend is okay for depth without being "gradient-heavy" */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
    </section>
  )
}
