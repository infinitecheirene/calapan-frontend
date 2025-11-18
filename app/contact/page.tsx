"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import PageLayout from "@/components/page-layout"

function Map() {
  return (
    <div style={{ width: '100%', height: '400px' }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3881.535729495896!2d121.18033177572742!3d13.37911950581156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bce92544f3d819%3A0x29a37a79f34acaa2!2sCalapan%20City%20Hall!5e0!3m2!1sen!2sph!4v1763345133260!5m2!1sen!2sph"
        width="100%"
        height="450"
        style={{ border: 0 }}
        title="Calapan City Map"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}



export default function ContactPage() {
  return (
    <PageLayout
      title="Contact Us"
      subtitle="Get in touch with Calapan City Government"
      image="/contact-communication-office-building.jpg"
    >
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Contact Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="How can we help?"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:shadow-lg transition-all hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-6"
        >
          {[
            {
              icon: MapPin,
              title: "Office Location",
              details: "Calapan City Hall, Calapan, Oriental Mindoro, Philippines",
            },
            {
              icon: Phone,
              title: "Phone",
              details: "+63 (123) 456-7890",
            },
            {
              icon: Mail,
              title: "Email",
              details: "info@calapan.gov.ph",
            },
            {
              icon: Clock,
              title: "Office Hours",
              details: "Monday - Friday: 8:00 AM - 5:00 PM",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, x: 10 }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-orange-100 flex gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center flex-shrink-0">
                <item.icon className="text-white" size={24} />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.details}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Map Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-2xl overflow-hidden shadow-lg border border-orange-100"
      >
        <div className="w-full h-96 bg-gradient-to-br from-orange-200 via-emerald-100 to-orange-100 flex items-center justify-center">
          <Map/>
        </div>
      </motion.div>
    </section>
    </PageLayout>
  )
}
