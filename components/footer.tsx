"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react"

const footerLinks = {
  menu: [
    { label: "Home", href: "#home" },
    { label: "Cardápio", href: "#menu" },
    { label: "Burgers", href: "#burgers" },
    { label: "Delivery", href: "#delivery" },
  ],
  contact: [
    { icon: MapPin, label: "Rua Gastronômica, 123 - São Paulo" },
    { icon: Phone, label: "(11) 99999-9999" },
    { icon: Mail, label: "contato@blackburger.com.br" },
  ],
  social: [
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ],
}

export function Footer() {
  return (
    <footer id="contact" className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#080808]" />
      
      {/* Top border glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="md:col-span-1"
          >
            <a href="#home" className="text-2xl font-bold inline-block mb-4">
              <span className="text-foreground">Black</span>
              <span className="gradient-text"> Burger</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Hambúrgueres artesanais premium com ingredientes selecionados e sabor incomparável.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map((item) => (
                <li key={item.label} className="flex items-center gap-3 text-muted-foreground text-sm">
                  <item.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{item.label}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-foreground font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              {footerLinks.social.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-muted-foreground text-sm">
            © 2026 Black Burger. Todos os direitos reservados.
          </p>
          <p className="text-muted-foreground text-sm">
            Feito com <span className="text-primary">♥</span> para amantes de burger
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
