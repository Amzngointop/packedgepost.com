import { Product } from '@/data/products'

interface ComparisonTableProps {
  products: Product[]
}

export function ComparisonTable({ products }: ComparisonTableProps) {
  return (
    <div className="overflow-x-auto my-8">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr className="bg-[#0B1929] text-white">
            <th className="font-heading text-[11px] uppercase tracking-wider text-left px-4 py-3">Product</th>
            <th className="font-heading text-[11px] uppercase tracking-wider text-left px-4 py-3">Best For</th>
            <th className="font-heading text-[11px] uppercase tracking-wider text-left px-4 py-3">Key Feature</th>
            <th className="font-heading text-[11px] uppercase tracking-wider text-left px-4 py-3">Top Con</th>
            <th className="font-heading text-[11px] uppercase tracking-wider text-left px-4 py-3">Link</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, i) => (
            <tr
              key={product.id}
              className={`border-b border-[#e5e5e5] dark:border-gray-800 ${i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}`}
            >
              <td className="px-4 py-3">
                <span className="font-heading text-[11px] font-bold text-[#E8380D] mr-2">#{product.rank}</span>
                <span className="font-body text-gray-900 dark:text-gray-100">{product.name}</span>
              </td>
              <td className="px-4 py-3 font-body text-gray-600 dark:text-gray-400">{product.bestFor.split('.')[0]}</td>
              <td className="px-4 py-3 font-body text-gray-600 dark:text-gray-400">{product.pros[0]}</td>
              <td className="px-4 py-3 font-body text-gray-600 dark:text-gray-400">{product.cons[0]}</td>
              <td className="px-4 py-3">
                <a
                  href={product.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="font-heading text-[11px] font-bold uppercase tracking-wider text-[#E8380D] hover:underline"
                >
                  Amazon →
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
