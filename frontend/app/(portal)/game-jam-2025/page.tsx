import FAQ from '@/app/ui/portal/game-jam-2025/FAQ'
import Hero from '@/app/ui/portal/game-jam-2025/Hero'
import Judges from '@/app/ui/portal/game-jam-2025/Judges'
import React from 'react'

export default function page() {
  return (
   <main>
    <Hero />
    <Judges />
    <FAQ />
   </main>
  )
}
