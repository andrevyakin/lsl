import products from '../constants/products.json';

const Products = () => {

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {products.map((product) => (
                        <div key={product.id} className="group">
                            <img
                                alt={product.name}
                                src={`products/${product.imageSrc[0]}.png`}
                                className="aspect-square w-full rounded-lg bg-gray-200 object-contain group-hover:opacity-75 xl:aspect-7/8"
                            />
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <p>{product.description}</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products
