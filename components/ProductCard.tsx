import { Check, X } from 'lucide-react'
import { Product } from '@/data/products'
import { CTAButton } from './CTAButton'

interface ProductCardProps {
  product: Product
  showFull?: boolean
}

export function ProductCard({ product, showFull = false }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 border border-[#e5e5e5] dark:border-gray-800 rounded-sm overflow-hidden">
      <div className="bg-gray-50 dark:bg-gray-800 flex items-center justify-center p-6 h-52 relative">
        <img
          src={product.imageUrl}
          alt={product.name}
          style={{ objectFit: 'contain', maxHeight: '180px', maxWidth: '100%' }}
        />
        <span className="absolute top-3 left-3 bg-[#E8380D] text-white font-heading text-[11px] font-bold uppercase tracking-wider px-2 py-1">
          {product.badge}
        </span>
      </div>

      <div className="p-5">
        <h3 className="font-heading text-base font-bold uppercase text-gray-900 dark:text-gray-100 leading-tight mb-2">
          {product.name}
        </h3>
        <p className="font-body text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
          {product.summary}
        </p>

        {showFull && (
          <>
            <div className="mb-3">
              <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Pros</p>
              <ul className="space-y-1">
                {product.pros.map((pro, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700 dark:text-gray-300">
                    <Check size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mb-4">
              <p className="font-heading text-[11px] uppercase tracking-wider text-gray-500 dark:text-gray-500 mb-2">Cons</p>
              <ul className="space-y-1">
                {product.cons.map((con, i) => (
                  <li key={i} className="flex items-start gap-2 font-body text-sm text-gray-700 dark:text-gray-300">
                    <X size={14} className="text-red-500 flex-shrink-0 mt-0.5" />
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <CTAButton href={product.affiliateUrl} external className="w-full text-center">
          View on Amazon →
        </CTAButton>
      </div>
    </div>
  )
}
