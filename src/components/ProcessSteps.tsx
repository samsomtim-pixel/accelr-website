interface ProcessStep {
  number: string
  title: string
  description: string
}

interface ProcessStepsProps {
  steps: ProcessStep[]
}

export default function ProcessSteps({ steps }: ProcessStepsProps) {
  return (
    <div className="relative">
      <div className="grid md:grid-cols-4 gap-6">
        {steps.map((step, i) => (
          <div key={i} className="relative text-center">
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-8 left-full w-full h-0.5" style={{ backgroundColor: 'var(--border-color)' }}>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-green-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
            )}
            <div className="text-4xl font-bold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              {step.number}
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

