"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Silva",
    role: "Food Blogger",
    content: "O melhor burger artesanal que já experimentei! A carne simplesmente derrete na boca. Voltarei com certeza!",
    rating: 5,
    avatar: "CS",
  },
  {
    name: "Ana Rodrigues",
    role: "Cliente Fiel",
    content: "Black Burger é meu lugar favorito. O blend de carnes é incomparável e o atendimento é excepcional.",
    rating: 5,
    avatar: "AR",
  },
  {
    name: "Pedro Mendes",
    role: "Chef Amador",
    content: "Como cozinheiro, reconheço qualidade quando vejo. Os ingredientes são premium e a execução é perfeita.",
    rating: 5,
    avatar: "PM",
  },
]

export function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] to-[#0F0F0F]" />
      
      {/* Decorative blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.15 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Depoimentos
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            O Que Dizem <span className="gradient-text">Nossos Clientes</span>
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl p-8 relative group"
            >
              {/* Quote decoration */}
              <div className="absolute top-4 right-4 text-6xl text-primary/10 font-serif">&quot;</div>
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: isInView ? 1 : 0, scale: isInView ? 1 : 0 }}
                    transition={{ delay: 0.8 + index * 0.2 + i * 0.1 }}
                  >
                    <Star className="w-5 h-5 fill-primary text-primary" />
                  </motion.div>
                ))}
              </div>

              {/* Content */}
              <p className="text-muted-foreground leading-relaxed mb-6">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
