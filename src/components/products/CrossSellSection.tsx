import Link from 'next/link'

interface CrossSellProduct {
  name: string
  description: string
  link: string
}

interface CrossSellSectionProps {
  title: string
  products: CrossSellProduct[]
}

export default function CrossSellSection({ title, products }: CrossSellSectionProps) {
  return (
    <section className="px-6 py-12" style={{ backgroundColor: 'var(--bg-card)' }}>
      <div className="max-w-6xl mx-auto">
        <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: "'Space Grotesk', sans-serif", color: 'var(--text-primary)' }}>
          {title}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Product
                </th>
                <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Wat het toevoegt
                </th>
                <th className="text-left py-4 px-4 font-semibold" style={{ color: 'var(--text-primary)' }}>
                  Link
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i} style={{ borderBottomColor: 'var(--border-color)', borderBottomWidth: '1px' }}>
                  <td className="py-4 px-4 font-medium" style={{ color: 'var(--text-primary)' }}>
                    {product.name}
                  </td>
                  <td className="py-4 px-4" style={{ color: 'var(--text-secondary)' }}>
                    {product.description}
                  </td>
                  <td className="py-4 px-4">
                    <Link href={product.link} className="text-green-500 hover:text-green-400 transition-colors">
                      → Bekijk
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}






