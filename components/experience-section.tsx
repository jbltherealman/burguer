"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <section id="delivery" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]" />
      
      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image with parallax */}
          <motion.div
            style={{ y }}
            className="relative order-2 lg:order-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0.8 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full scale-75" />
              
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-05-27%20at%2017.24.40%20%281%29-h5Rl9X4lTNeYa1MmxYdq2jcxxZbWXg.jpeg"
                alt="Experiência Black Burger"
                width={500}
                height={500}
                className="relative z-10 drop-shadow-[0_25px_50px_rgba(0,0,0,0.5)] rounded-2xl"
              />
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.4 }}
              className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
            >
              Uma Experiência Única
            </motion.p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
              Mais Que Um{" "}
              <span className="gradient-text">Burger</span>,
              <br />
              Uma Obra de Arte
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Cada mordida é uma explosão de sabores cuidadosamente elaborados. 
              Nossa paixão pela perfeição se reflete em cada detalhe, desde a seleção 
              dos ingredientes até a apresentação final do seu burger.
            </p>

            <div className="grid grid-cols-3 gap-6 mb-10">
              {[
                { number: "10K+", label: "Clientes Felizes" },
                { number: "50+", label: "Sabores Únicos" },
                { number: "5★", label: "Avaliação Média" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold gradient-text">{stat.number}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0 }}
              transition={{ delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-primary text-primary-foreground font-bold rounded-full glow-gold hover:glow-gold-strong transition-all duration-300"
            >
              Fazer Pedido
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
