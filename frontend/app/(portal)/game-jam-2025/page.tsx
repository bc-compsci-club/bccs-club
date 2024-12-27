import Contact from '@/app/ui/portal/game-jam-2025/Contact'
import FAQ from '@/app/ui/portal/game-jam-2025/FAQ'
import Hero from '@/app/ui/portal/game-jam-2025/Hero'
import Judges from '@/app/ui/portal/game-jam-2025/Judges'
import Schedule from '@/app/ui/portal/game-jam-2025/Schedule'
import React from 'react'

export default function page() {
  return (
   <main>
    <Hero />
    <Schedule />
    <Judges />
    <FAQ />
    <Contact />
   </main>
  )
}
