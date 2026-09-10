import { getPayload } from 'payload'
import config from '@/payload.config'
import ProductCard from './components/ProductCard'

export default async function HomePage() {
  const payload = await getPayload({ config })

  const { docs: products } = await payload.find({
    collection: 'products',
    depth: 1,
    limit: 100,
  })

  if (products.length === 0) {
    return <p>No products yet.</p>
  }
  return (
    <main className="max-w-6xl mx-auto p-8">
      <h1>Products</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}
