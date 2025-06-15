import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Douglas Coronado - Ingeniero Full Stack",
  description:
    "Portafolio profesional de Douglas Matias Coronado Ortiz - Ingeniero de Software Full Stack especializado en Frontend con aspiraciones en IA",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}


import './globals.css'