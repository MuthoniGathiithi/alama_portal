'use client'

import ElevatedCard from "@/components/ElevatedCard"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  const handleLogin = () => {
    // Simulate login and redirect to dashboard
    router.push('/dashboard')
  }

  return (
    <main className="h-screen overflow-hidden">
      <ElevatedCard onLogin={handleLogin} />
    </main>
  )
}
