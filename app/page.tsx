'use client'

import {
  BookOpen,
  FileText,
  GraduationCap,
  Loader2,
  Sparkles,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import Navbar from '../components/Navbar'

export default function Home() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const handleJoinWaitlist = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data?.error ?? 'Failed to join waitlist')
      }
      toast.success('Successfully joined the waitlist!')
      setEmail('')
    } catch (err) {
      toast.error(
        err?.response?.data?.message ??
          err?.message ??
          'Failed to join waitlist. Please try again.',
      )
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-[#0A0A0B] dark:to-[#1a1a1d]">
      <Navbar />

      <main className="container max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Craft Your Path to
            </span>
            <br />
            <span className="text-purple-600 dark:text-purple-500">
              Graduate Success
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl sm:max-w-2xl mx-auto leading-relaxed">
            Your AI-powered companion for crafting compelling graduate school
            applications. From resumes to research proposals, we help you stand
            out from the crowd.
          </p>

          <form
            onSubmit={handleJoinWaitlist}
            className="max-w-md mx-auto flex gap-2"
          >
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/40 dark:bg-black/40"
              required
              pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              title="Please enter a valid email address"
            />
            <Button
              type="submit"
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-700 text-white"
            >
              Get Early Access{' '}
              {loading && <Loader2 className="w-4 h-4 ml-2 animate-spin" />}
            </Button>
          </form>
        </div>

        {/* Feature Section */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Perfect Your Documents
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Craft compelling resumes, statements of purpose, and research
              proposals with AI-powered writing assistance and expert templates.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Research Proposals
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Transform your research ideas into well-structured proposals that
              highlight your potential contributions to the field.
            </p>
          </div>

          <div className="space-y-4">
            <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Stand Out
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Get personalized suggestions to make your application unique and
              memorable while maintaining academic professionalism.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 lg:mt-14 text-center bg-purple-50 dark:bg-purple-900/10 rounded-2xl p-8">
          <GraduationCap className="w-12 h-12 text-purple-600 dark:text-purple-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            Join the waitlist today and be among the first to access our
            AI-powered tools for crafting your perfect graduate school
            application.
          </p>
          <Button
            onClick={() => document.querySelector('input')?.focus()}
            className="bg-purple-600 hover:bg-purple-700 text-white"
          >
            Get Started
          </Button>
        </div>
      </main>
    </div>
  )
}
