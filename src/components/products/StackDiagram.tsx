interface StackDiagramProps {
  activePhase?: 'TARGET' | 'ENGAGE' | 'CONVERT' | 'SCALE'
}

export default function StackDiagram({ activePhase }: StackDiagramProps) {
  const phases = [
    { name: 'TARGET', products: ['ICP Analyse', 'Lead Intel', ''] },
    { name: 'ENGAGE', products: ['Trigger', 'Scanner', ''] },
    { name: 'CONVERT', products: ['Outbound', 'Email', 'LinkedIn'] },
    { name: 'SCALE', products: ['CRM', 'Dashboard', 'Playbook'] },
  ]

  return (
    <section className="px-6 py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm text-emerald-400 overflow-x-auto border border-gray-800">
          <pre className="whitespace-pre">{`┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   TARGET    │ →  │   ENGAGE    │ →  │   CONVERT   │ →  │    SCALE    │
├─────────────┤    ├─────────────┤    ├─────────────┤    ├─────────────┤
│ ICP Analyse │    │ Trigger     │    │ Outbound    │    │ CRM         │
│ Lead Intel  │    │ Scanner     │    │ Email       │    │ Dashboard   │
│             │    │             │    │ LinkedIn    │    │ Playbook    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘`}</pre>
        </div>
        {activePhase && (
          <p className="text-sm mt-4 text-center" style={{ color: 'var(--text-secondary)' }}>
            Dit product zit in de <span className="text-green-400 font-semibold">"{activePhase}"</span> fase
          </p>
        )}
      </div>
    </section>
  )
}
