"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const burgers = [
  {
    name: "Classic Black",
    description: "Blend de carnes nobres, queijo cheddar maturado, bacon artesanal",
    price: "R$ 42,90",
    image: "🍔",
  },
  {
    name: "Smoked BBQ",
    description: "Costela defumada 12h, molho barbecue especial, onion rings",
    price: "R$ 48,90",
    image: "🥓",
  },
  {
    name: "Truffle Deluxe",
    description: "Carne wagyu, cogumelos trufados, maionese de trufa negra",
    price: "R$ 65,90",
    image: "🍄",
  },
  {
    name: "Spicy Inferno",
    description: "Pimenta ghost pepper, jalapeños, queijo pepper jack",
    price: "R$ 45,90",
    image: "🌶️",
  },
]

export function FeaturedBurgers() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="burgers" className="py-32 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B] to-[#101010]" />
      
      {/* Decorative elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 0.2 : 0 }}
        transition={{ duration: 1 }}
        className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]"
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
            Nosso Menu
          </motion.p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Burgers em <span className="gradient-text">Destaque</span>
          </h2>
        </motion.div>

        {/* Burgers Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {burgers.map((burger, index) => (
            <motion.div
              key={burger.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10, rotateY: 5 }}
              className="group relative"
            >
              <div className="glass rounded-2xl p-6 h-full transition-all duration-500 group-hover:border-primary/30">
                {/* Emoji placeholder for burger */}
                <div className="text-6xl mb-4 text-center group-hover:scale-110 transition-transform duration-500">
                  {burger.image}
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {burger.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {burger.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-primary font-bold text-lg">{burger.price}</span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    +
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          >
            Ver Menu Completo
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
