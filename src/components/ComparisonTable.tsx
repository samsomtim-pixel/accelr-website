interface ComparisonTableProps {
  columns: string[]
  rows: Array<{
    label: string
    values: string[]
  }>
}

export default function ComparisonTable({ columns, rows }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto">
      {/* Desktop Table */}
      <div className="hidden md:block">
        <table className="w-full border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="border-b" style={{ borderColor: 'var(--border-color)' }}>
              <th className="text-left py-4 px-4 font-semibold whitespace-nowrap" style={{ color: 'var(--text-primary)' }}>
                {columns[0]}
              </th>
              {columns.slice(1).map((col, i) => (
                <th
                  key={i}
                  className="text-left py-4 px-4 font-semibold"
                  style={{ 
                    color: i === 0 ? 'white' : 'var(--text-primary)',
                    backgroundColor: i === 0 ? '#10b981' : 'transparent'
                  }}
                >
                  {col}
                </th>
              ))}
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
                  {row.label}
                </td>
                {row.values.map((value, j) => (
                  <td 
                    key={j} 
                    className="py-4 px-4" 
                    style={{ 
                      color: j === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: j === 0 ? 'rgba(16, 185, 129, 0.1)' : 'transparent',
                      fontWeight: j === 0 ? 500 : 'normal'
                    }}
                  >
                    {value}
                  </td>
                ))}
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
            <p className="text-lg font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              {row.label}
            </p>
            <div className="space-y-4">
              {/* Accelr */}
              <div className="rounded-lg p-4" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
                <p className="text-xs font-medium mb-2" style={{ color: '#10b981' }}>{columns[1]}</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>
                  {row.values[0]}
                </p>
              </div>
              {/* Typical Agency */}
              <div>
                <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>{columns[2]}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {row.values[1]}
                </p>
              </div>
              {/* DIY */}
              <div>
                <p className="text-xs font-medium mb-2" style={{ color: 'var(--text-muted)' }}>{columns[3]}</p>
                <p className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                  {row.values[2]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}






