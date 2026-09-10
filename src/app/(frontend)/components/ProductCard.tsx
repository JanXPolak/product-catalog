import type { Product } from '@/payload-types'
import Link from 'next/link'

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  const cover = product.images?.[0]
  const coverUrl =
  cover && typeof cover === 'object'
    ? cover.url
    : `https://picsum.photos/seed/${product.slug}/600`
  return (
    <Link href={`/products/${product.slug}`}>
      {coverUrl ? (
        <img
          src={coverUrl}
          alt={typeof cover === 'object' ? cover.alt : product.name}
          className="aspect-square object-cover w-full rounded"
        />
      ) : (
        <div className="aspect-square w-full rounded bg-gray-200" />
      )}
      <h2>{product.name}</h2>
      <p>${product.price.toFixed(2)}</p>
    </Link>
  )
}

export default ProductCard
