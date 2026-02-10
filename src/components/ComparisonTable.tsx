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
  )
}






