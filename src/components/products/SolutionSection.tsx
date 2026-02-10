interface SolutionSectionProps {
  title: string
  description?: string
  solutions: Array<{
    title: string
    description: string
  }>
}

export default function SolutionSection({
  title,
  description,
  solutions,
}: SolutionSectionProps) {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          {title}
        </h2>
        {description && (
          <p className="text-lg mb-12 leading-relaxed max-w-3xl" style={{ color: 'var(--text-secondary)' }}>
            {description}
          </p>
        )}
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <div
              key={i}
              className="rounded-xl p-6 transition-all duration-200 hover:border-[#10b981]"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
            >
              <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
                {solution.title}
              </h3>
              <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}






