interface ProblemSectionProps {
  title: string
  subtitle?: string
  problems: string[]
  highlight?: string
}

export default function ProblemSection({
  title,
  subtitle,
  problems,
  highlight,
}: ProblemSectionProps) {
  return (
    <section className="px-6 py-20" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          {title}
        </h2>
        {subtitle && (
          <p className="text-2xl text-green-400 font-semibold mb-8" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {subtitle}
          </p>
        )}
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="rounded-xl p-6 relative transition-all duration-200 hover:scale-[1.02] hover:border-[#10b981] group"
              style={{ backgroundColor: 'var(--bg-secondary)', borderColor: 'var(--border-color)', borderWidth: '1px', borderStyle: 'solid' }}
            >
              <div className="flex items-start gap-4">
                <span className="text-green-500 text-xl flex-shrink-0">•</span>
                <p className="pt-1" style={{ color: 'var(--text-secondary)' }}>{problem}</p>
              </div>
            </div>
          ))}
        </div>
        
        {highlight && (
          <div className="bg-gradient-to-r from-green-500/10 to-green-400/5 border border-green-500/20 rounded-xl p-8">
            <p className="text-xl" style={{ color: 'var(--text-primary)' }}>
              <span className="text-green-400 font-semibold">Het echte probleem:</span> {highlight}
            </p>
          </div>
        )}
      </div>
    </section>
  )
}





