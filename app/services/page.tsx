"use client"

import PageLayout from "@/components/page-layout"
import ServicesSection from "@/components/services-section"

export default function ServicesPage() {
  return (
    <PageLayout
      title="Services"
      subtitle="Explore all the services we offer to our citizens"
      image="/banner_web-1536x288.jpg"
    >
      <ServicesSection />
    </PageLayout>
  )
}
