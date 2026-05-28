"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Burgers", href: "#burgers" },
  { label: "Delivery", href: "#delivery" },
  { label: "Contato", href: "#contact" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const updateScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", updateScroll)
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#home"
          className="text-2xl font-bold tracking-tight"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-foreground">Black</span>
          <span className="gradient-text"> Burger</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-full glow-gold hover:glow-gold-strong transition-all duration-300"
        >
          Pedir Agora
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground p-2"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isMobileMenuOpen ? "auto" : 0,
          opacity: isMobileMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass"
      >
        <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
          {navItems.map((item, index) => (
            <motion.a
              key={item.label}
              href={item.href}
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: isMobileMenuOpen ? 0 : -20, opacity: isMobileMenuOpen ? 1 : 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </motion.a>
          ))}
          <motion.button
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: isMobileMenuOpen ? 1 : 0.8, opacity: isMobileMenuOpen ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full glow-gold"
          >
            Pedir Agora
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  )
}
