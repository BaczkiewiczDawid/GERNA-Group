import Link from 'next/link';
import { useFetch } from '../hooks/useFetch';

interface Transactions {
  date: string,
  products: [],
  total_price: number,
  transaction_name: string
}

export default async function Home() {
  const data = await useFetch({ url: 'https://bi-test-d871c-default-rtdb.europe-west1.firebasedatabase.app/.json', revalidate: 0});
  const transactionsList = data.transactions;

  return (
    <div className="w-1/6 rounded-md bg-slate-200 mt-4 ml-4 hover:bg-slate-300">
      <ul>
        {transactionsList.map((transaction: Transactions) => {return (
          <li className="text-black p-2 cursor-pointer bg-slate-200 hover:bg-slate-300" key={transaction.transaction_name}>
            <Link href={`/transaction/${transaction.transaction_name}`}>{transaction.transaction_name}</Link>
          </li>
        )})}
      </ul>
    </div>
  )
}
