import { useFetch } from '../../../hooks/useFetch';

interface Transactions {
    date: string,
    products: [],
    total_price: number,
    transaction_name: string
  }
  
interface Product {
    name: string,
    price: number,
    quantity: number
}

export default async function TransactionDetails({ params }: { params: { slug: string } }) {
    const data = await useFetch({ url: 'https://bi-test-d871c-default-rtdb.europe-west1.firebasedatabase.app/.json', revalidate: 60 })
    const filteredData = data.transactions.filter((transaction: Transactions) => transaction.transaction_name === params.slug)
    console.log(filteredData)

    if (filteredData.length < 1) {
        return <p className="font-bold text-center align-middle">There&apos;s no transaction with that ID</p>
    }

    return (
        <div>
        <p>Transaction name: {filteredData[0].transaction_name}</p>
            <div>
                <p>Products: </p>{filteredData[0].products.map((product: Product)  => {
                  return (
                    <div key={product.name}>
                        <p>Name: {product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                    )
                })}
            </div>
        </div>
    )
  }

