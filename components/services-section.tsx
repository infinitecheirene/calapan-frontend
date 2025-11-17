"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MonitorCheck, ArrowRight, Building2, FileText, Users, Heart, Zap, TrendingUp, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import Link from "next/link"

  const featuredServices = [
  { icon: "💼", name: "Business Permit", description: "Apply for business permits" },
  { icon: "🏗️", name: "Building Permit", description: "Construction permits" },
  { icon: "📄", name: "Cedula", description: "Community tax certificate" },
  { icon: "💍", name: "Marriage License", description: "Apply for marriage license" },
  { icon: "🏥", name: "Health Certificate", description: "Medical clearance" },
  { icon: "💉", name: "Vaccination Records", description: "View vaccination history" },
  { icon: "⚕️", name: "Medical Assistance", description: "Request medical aid" },
  { icon: "👮", name: "Police Clearance", description: "Request police clearance" },
  { icon: "🚒", name: "Fire Safety Inspection", description: "Schedule inspection" },
  { icon: "📝", name: "Barangay Clearance", description: "Get barangay clearance" },
]


  const stats = [
    { label: "Active Citizens", value: "200K+", icon: Users },
    { label: "Services", value: "50+", icon: Zap },
    { label: "Requests Processed", value: "12K+", icon: TrendingUp },
  ]


  
export default function ServicesSection() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)
    const [isMounted, setIsMounted] = useState(false)
  
    // Fix hydration: Only render random particles after mount
    useEffect(() => {
      setIsMounted(true)
    }, [])
  
    // Generate consistent particle positions (same on server and client)
    const particlePositions = Array.from({ length: 20 }, (_, i) => ({
      x: (i * 23) % 100, // Deterministic x position
      y: (i * 37) % 100, // Deterministic y position
      duration: 2 + (i % 3), // Deterministic duration
      delay: (i % 5) * 0.4, // Deterministic delay
    }))

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
        className="mb-16"
      >
        <div className="flex items-center gap-3 mb-6">
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}>
            <MonitorCheck className="w-8 h-8 text-orange-600" />
          </motion.div>
          <span className="text-2xl gradient-text">City Services</span>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">
          Access a comprehensive range of municipal services designed to make your city transactions easier and more convenient.
        </p>
      </motion.div>
      
      <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
            style={{ perspective: "1000px" }}
          >
            {featuredServices.map((service, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                initial="rest"
                whileHover="hover"
                animate="rest"
                onHoverStart={() => setHoveredService(i)}
                onHoverEnd={() => setHoveredService(null)}
                className="card-premium p-8 cursor-pointer relative overflow-visible"
                style={{
                  transformStyle: "preserve-3d",
                }}
              >
                {/* 3D Platform shadow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/5 to-gray-900/20 rounded-2xl"
                  variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1 }
                  }}
                />
                {/* Ripple effect on hover */}
                <AnimatePresence>
                  {hoveredService === i && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-emerald-100/50"
                      initial={{ scale: 0, opacity: 1 }}
                      animate={{ scale: 2, opacity: 0 }}
                      exit={{ scale: 2, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10">
                  {/* 3D Popping Icon */}
                  <motion.div 
                    className="text-6xl mb-4 flex justify-center items-center absolute left-1/2 top-4 -translate-x-1/2"
                    style={{
                      transformStyle: "preserve-3d",
                      zIndex: 50,
                    }}
                    variants={{
                      rest: { 
                        scale: 1, 
                        rotateY: 0,
                        rotateX: 0,
                        z: 0,
                        y: 0,
                        filter: "drop-shadow(0 4px 6px rgba(0,0,0,0.1))",
                        transition: {
                          type: "spring",
                          stiffness: 300,
                          damping: 20
                        }
                      },
                      hover: { 
                        scale: 2.5, 
                        rotateY: 25,
                        rotateX: -20,
                        z: 150,
                        y: -80,
                        filter: "drop-shadow(0 50px 80px rgba(0,0,0,0.5))",
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 15
                        }
                      }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  </div>
                  {/* Content pushed down to make space */}
                  <div className="mt-24">
                  {/* Content pushed down to make space */}
                  <div className="mt-20">
                    <motion.h3 
                      className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors"
                      variants={{
                        rest: { x: 0 },
                        hover: { x: 5 }
                      }}
                    >
                      {service.name}
                    </motion.h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                {/* Decorative corner animation */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/30 to-transparent rounded-bl-full"
                  variants={{
                    rest: { scale: 0, opacity: 0 },
                    hover: { scale: 1, opacity: 1 }
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link href="/services">
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold hover:shadow-xl transition-all inline-flex items-center gap-2">
                Explore All Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </motion.div>
    </section>
  )
}
