"use client"

import { motion } from "framer-motion"
import { Target, Lightbulb, Users } from "lucide-react"
import CTASection from "@/components/cta-section"

export default function AboutSection() {
  const values = [
    {
      icon: Target,
      title: "Our Mission",
      description: "Deliver efficient and transparent government services to every citizen of Calapan City.",
    },
    {
      icon: Lightbulb,
      title: "Our Vision",
      description: "A smart city where technology and community values work together for progress.",
    },
    {
      icon: Users,
      title: "Our Values",
      description: "Integrity, transparency, and citizen-centric service delivery in everything we do.",
    },
  ]

  return (
    <main>
      <div className="bg-gradient-to-br from-slate-50 via-orange-50 to-emerald-50">
        <section className="grid md:grid-cols-3 gap-8 py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
            {values.map((value, i) => {
                  const Icon = value.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ scale: 1.05 }}
                      className="p-8 rounded-2xl bg-white border border-gray-100 text-center hover:border-emerald-200 transition-all shadow-sm"
                    >
                      <motion.div
                        className="inline-flex p-4 rounded-full bg-gradient-to-br from-emerald-100 to-orange-100 mb-6"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </motion.div>
                      <h3 className="text-2xl font-bold gradient-text mb-3">{value.title}</h3>
                      <p className="text-gray-600">{value.description}</p>
                    </motion.div>
                  )
                })}
          </section>

        <section className="py-5 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, margin: "-100px" }}
                className="mb-8 text-center"
              >
                <p className="text-gray-600 text-lg text-justify mx-auto border-b pb-5">
                  The <b>Calapan City Government</b> is dedicated to delivering world-class services with the highest standards of integrity and transparency. 
                  We strive to foster sustainable community development by embracing innovation, leveraging modern technology, and actively engaging our citizens in decision-making processes. 
                  Through collaborative initiatives and responsive governance, we aim to create a safe, inclusive, and thriving city where every resident has the opportunity to contribute 
                  to and benefit from the growth and progress of Calapan.
                </p>
              </motion.div>
          </div>
        </section>

        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h1 className="uppercase text-4xl font-semibold text-center mb-6">
              Calapan City Map
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Google Map */}
              <div className="w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d87838.11255507327!2d121.18381580809984!3d13.354453691561028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce8d27f6f844d%3A0xf7cc1b1c943ab71b!2sCalapan%20City%2C%20Oriental%20Mindoro!5e0!3m2!1sen!2sph!4v1763351634627!5m2!1sen!2sph"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  title="Calapan City Map"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="border rounded-xl"
                />
              </div>

              {/* Base Map Image */}
              <div className="w-full flex items-center">
                <img
                  src="/BASE-MAP.png"
                  alt="Calapan City Base Map"
                  className="w-full h-[450px] object-contain border rounded-xl bg-white"
                />
              </div>
            </div>
          </div>
        </section>

        <CTASection />
      </div>
    </main>
  )
}
