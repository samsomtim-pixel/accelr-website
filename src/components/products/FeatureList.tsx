interface FeatureListProps {
  title?: string
  features: string[]
}

export default function FeatureList({ title, features }: FeatureListProps) {
  return (
    <section className="px-6 py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {title}
          </h3>
        )}
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              <span style={{ color: 'var(--text-secondary)' }}>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}






