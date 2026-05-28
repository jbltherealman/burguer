"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#111111] to-[#0F0F0F]" />
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.3 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.2 : 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.3 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
          >
            Não Perca Tempo
          </motion.p>
          
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Pronto Para Provar o{" "}
            <span className="gradient-text text-glow">Melhor Burger</span>{" "}
            da Cidade?
          </h2>
          
          <p className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Faça seu pedido agora e descubra por que somos a hamburgueria mais premiada da região. 
            Entrega rápida e sabor incomparável.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-primary text-primary-foreground font-bold text-lg rounded-full glow-gold hover:glow-gold-strong transition-all duration-300 uppercase tracking-wider"
            >
              Pedir Agora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 border-2 border-primary/50 text-primary font-bold text-lg rounded-full hover:bg-primary/10 transition-all duration-300 uppercase tracking-wider"
            >
              Ver Cardápio
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
