import './globals.css'

import type { Metadata, Viewport } from 'next'
import { Source_Sans_3 } from 'next/font/google'
import { Toaster } from 'sonner'

import ThemeProvider from '@/components/theme-provider'

const sourceSans3 = Source_Sans_3({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'GradCraft - AI-Powered Graduate Application Assistant',
  description:
    'Craft compelling graduate school applications with AI assistance. From research proposals to personal statements, GradCraft helps you stand out among other applicants.',
  keywords:
    'graduate school applications, research proposals, statement of purpose, personal statement, AI writing assistant, academic applications, PhD applications, Masters applications, graduate admissions',
  authors: [{ name: 'Wakeel Kehinde', url: '' }],
  creator: 'Wakeel Kehinde',
  publisher: 'Wakeel Kehinde',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gradCraft.vercel.app',
    title: 'GradCraft - AI-Powered Graduate Application Assistant',
    description:
      'Transform your graduate school applications with AI-powered writing assistance and expert guidance.',
    siteName: 'GradCraft',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'GradCraft - Graduate Application Assistant',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GradCraft - AI-Powered Graduate Application Assistant',
    description:
      'Transform your graduate school applications with AI-powered writing assistance and expert guidance.',
    creator: '@tijjken',
    images: ['/og-image.png'],
  },
  metadataBase: new URL('https://gradCraft.vercel.app'),
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#0A0A0B',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020817" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body className={`${sourceSans3.className} antialiased`}>
        <ThemeProvider>
          <Toaster
            position="top-right"
            richColors
            toastOptions={{
              classNames: {
                toast:
                  'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
                description: 'group-[.toast]:text-muted-foreground',
                actionButton:
                  'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
                cancelButton:
                  'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
              },
            }}
          />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
