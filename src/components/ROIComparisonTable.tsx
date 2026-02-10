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
      
      {/* Desktop Table */}
      <div className="hidden md:block max-w-[900px] mx-auto">
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

      {/* Mobile Cards */}
      <div className="md:hidden flex flex-col gap-4">
        {rows.map((row, i) => (
          <div
            key={i}
            className="rounded-xl p-6"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              borderWidth: '1px',
              borderStyle: 'solid',
            }}
          >
            <h4 className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {row.scenario}
            </h4>
            <div className="space-y-3">
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{columns[1]}</p>
                <p className="text-sm" style={{ textDecoration: 'line-through', color: 'var(--text-muted)' }}>
                  {row.inhouse}
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{columns[2]}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {row.accelr}
                </p>
              </div>
              <div>
                <p className="text-xs mb-1" style={{ color: 'var(--text-muted)' }}>{columns[3]}</p>
                <p className="text-2xl font-semibold" style={{ color: '#10b981' }}>
                  {row.savings}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <p className="text-sm mt-4 italic text-center" style={{ color: 'var(--text-muted)' }}>
        {footnote}
      </p>
    </div>
  );
}
