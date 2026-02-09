import type { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Expertise | Accelr',
  description: 'Expertise gebieden: Target, Outreach, Convert, Scale.',
}

export default function ExpertisePage() {
  redirect('/expertise/target')
}
