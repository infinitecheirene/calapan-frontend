"use client"

import type React from "react"

import Header from "@/components/header"
import PageHeroBanner from "@/components/page-hero-banner"
import Footer from "@/components/footer"

interface PageLayoutProps {
  title: string
  subtitle?: string
  image: string
  children: React.ReactNode
}

export default function PageLayout({ title, subtitle, image, children }: PageLayoutProps) {
  return (
    <main className="min-h-screen">
      <Header />
      <PageHeroBanner title={title} subtitle={subtitle} image={image} />
      <div>{children}</div>
      <Footer />
    </main>
  )
}
