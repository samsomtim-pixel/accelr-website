interface PricingTableProps {
  title?: string
  columns: string[]
  rows: Array<{
    label: string
    values: string[]
  }>
}

export default function PricingTable({ title, columns, rows }: PricingTableProps) {
  return (
    <section className="px-6 py-12" style={{ backgroundColor: 'var(--bg-primary)' }}>
      <div className="max-w-6xl mx-auto">
        {title && (
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
            {title}
          </h3>
        )}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                {columns.map((col, i) => (
                  <th key={i} className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                  <td className="py-4 px-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                    {row.label}
                  </td>
                  {row.values.map((value, j) => (
                    <td key={j} className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}





