import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FeatureMap — Visual Feature Adoption Heatmaps",
  description: "See which features users actually use. Identify dead weight dragging down your UX."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="8a273479-3ed8-494f-9a42-5e4f3c48b9e1"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
