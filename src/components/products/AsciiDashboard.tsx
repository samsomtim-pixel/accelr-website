interface AsciiDashboardProps {
  content: string
  note?: string
}

export default function AsciiDashboard({ content, note }: AsciiDashboardProps) {
  return (
    <section className="px-6 py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        <div className="bg-gray-900 rounded-xl p-6 font-mono text-sm text-emerald-400 overflow-x-auto border border-gray-800">
          <pre className="whitespace-pre">{content}</pre>
        </div>
        {note && (
          <p className="text-sm mt-4 italic text-center" style={{ color: 'var(--text-muted)' }}>
            {note}
          </p>
        )}
      </div>
    </section>
  )
}






