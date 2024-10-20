import parseTransactionTime from "@/app/helpers/parseTransactionTime"
import { TransactionData } from "@/pages/api/transaction"
import './TransactionsTable.scss';

interface Props {
  transactions: TransactionData[],
}

export default function TransactionsTable({transactions}: Props) {
  const headers = ['Amount in EUR', 'Amount in PLN', 'Exchange rate EUR/PLN', 'Time of transaction (d/m/y)'];

  return (
    <table className="transactions-table">
      <thead>
        <tr className="transactions-table__row">
          {headers.map((header: string) => (
            <th className="transactions-table__header" key={header}>
              {header}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {!!transactions.length &&
          transactions.map((transaction: TransactionData) => (
            <tr className="transactions-table__row" key={transaction.id}>
              <td className="transactions-table__data">{transaction.transaction_eur_amount}</td>
              <td className="transactions-table__data">{transaction.transaction_pln_amount}</td>
              <td className="transactions-table__data">{transaction.currenty_exchange_rate}</td>
              <td className="transactions-table__data">{parseTransactionTime(transaction.createdAt)}</td>
            </tr>
          ))}
      </tbody>
    </table>
  )
};

