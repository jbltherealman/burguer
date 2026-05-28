"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Leaf, Truck, ChefHat, Award } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "Ingredientes Frescos",
    description: "Selecionamos apenas os melhores ingredientes locais e orgânicos para nossos burgers.",
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Seu burger chega quentinho em até 30 minutos na sua porta.",
  },
  {
    icon: ChefHat,
    title: "Feito à Mão",
    description: "Cada burger é preparado artesanalmente por nossos chefs especializados.",
  },
  {
    icon: Award,
    title: "Qualidade Premium",
    description: "Carnes selecionadas e blend exclusivo que derrete na boca.",
  },
]

export function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="menu" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101010] to-[#0B0B0B]" />
      
      {/* Decorative blur */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.15 : 0 }}
        transition={{ duration: 1 }}
        className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[150px]"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ delay: 0.2 }}
            className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-4"
          >
            Por Que Nos Escolher
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            A <span className="gradient-text">Diferença</span> Black Burger
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="text-center group"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500"
              >
                <feature.icon className="w-10 h-10 text-primary" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
