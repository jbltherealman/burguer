"use client"

import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Subtle glow pulsing behind the burger */}
      <motion.div
        animate={{ 
          opacity: [0.15, 0.4, 0.15],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute top-1/2 left-1/2 md:left-[70%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/40 rounded-full blur-[140px] pointer-events-none z-0"
      />

      {/* Floating Burger Image */}
      <motion.div
        animate={{
          y: [0, -25, 0],
          rotate: [0, 1.5, -1, 0],
          scale: [1.02, 1.05, 1.02],
          filter: [
            "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))",
            "drop-shadow(0px 35px 45px rgba(0,0,0,0.3))",
            "drop-shadow(0px 10px 20px rgba(0,0,0,0.5))"
          ]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute -inset-[5%] z-0 origin-center"
        style={{
          backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-27%20at%2017.24.40%20%281%29-h5Rl9X4lTNeYa1MmxYdq2jcxxZbWXg.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent z-10 pointer-events-none" />
      
      {/* Additional gradient from bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />

      {/* Decorative glow effects */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute top-20 left-10 w-96 h-96 bg-primary/30 rounded-full blur-[120px] z-10 pointer-events-none"
      />

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-24">
        <div className="max-w-2xl">
          {/* Small tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Escolha o Seu Favorito
          </motion.p>

          {/* Main Hero Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black leading-[0.85] tracking-tight"
          >
            <span className="text-foreground block">BLACK</span>
            <span className="gradient-text text-glow block">BURGER</span>
          </motion.h1>

          {/* Secondary title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary italic mt-8 mb-10"
          >
            Sabor Premium
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-muted-foreground text-base md:text-lg max-w-md mb-12 leading-relaxed"
          >
            Convidamos você ao lugar onde a felicidade nasce — nossa hamburgueria artesanal! 
            Criamos não apenas hambúrgueres, mas momentos reais de alegria que ficam com você 
            na forma das memórias mais saborosas.
          </motion.p>

          {/* CTA Button */}
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-primary text-primary-foreground font-bold text-base rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 uppercase tracking-wider"
          >
            Pedir Agora
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0], y: [0, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
