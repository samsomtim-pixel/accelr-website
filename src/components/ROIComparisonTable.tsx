interface ROIComparisonTableProps {
  title: string
  columns: string[]
  rows: Array<{
    scenario: string
    inhouse: string
    accelr: string
    savings: string
  }>
  footnote: string
}

export default function ROIComparisonTable({ title, columns, rows, footnote }: ROIComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-bold mb-6 text-center" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
        {title}
      </h3>
      <div className="max-w-[900px] mx-auto">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
        <thead>
          <tr style={{ backgroundColor: 'var(--bg-card)' }}>
            <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
              {columns[0]}
            </th>
            <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
              {columns[1]}
            </th>
            <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
              {columns[2]}
            </th>
            <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
              {columns[3]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr
              key={i}
              className="border-b hover:opacity-80 transition-opacity"
              style={{ borderColor: 'var(--border-color)' }}
            >
              <td className="py-4 px-4 font-medium whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                {row.scenario}
              </td>
              <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>
                <span style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>{row.inhouse}</span>
              </td>
              <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>
                {row.accelr}
              </td>
              <td className="py-4 px-4 font-semibold" style={{ color: '#10b981' }}>
                {row.savings}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <p className="text-sm mt-4 italic text-center" style={{ color: 'var(--text-muted)' }}>
        {footnote}
      </p>
    </div>
  );
}
