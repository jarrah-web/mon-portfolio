"use client"

import * as React from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Menu, Moon, Sun, X } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="fixed w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl">
              Jarrah
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Accueil
              </Link>
              <Link href="/about" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                À Propos
              </Link>
              <Link href="/projects" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projets
              </Link>
              <Link href="/contact" className="hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-md hover:bg-accent transition-colors"
                aria-label="Toggle theme"
              >
                {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </button>
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-foreground hover:bg-accent focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-b">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              Accueil
            </Link>
            <Link 
              href="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              À Propos
            </Link>
            <Link 
              href="/projects" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              Projets
            </Link>
            <Link 
              href="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="px-3 py-2">
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="flex items-center space-x-2 w-full text-left"
              >
                {mounted && (theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
                <span>{theme === "dark" ? "Mode Clair" : "Mode Sombre"}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
