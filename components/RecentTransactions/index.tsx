import BankInfo from "@/components/BankInfo";
import BankTabItem from "@/components/BankTabItem";
import TransactionsTable from "@/components/TransactionsTable";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ROWS_PER_PAGE } from "@/constants";
import Link from "next/link";
import Pagination from "../Pagination";

const RecentTransactions = ({ accounts, transactions = [], appwriteItemId, page = 1 }: RecentTransactionsProps) => {
  const totalPages = Math.ceil(transactions.length / ROWS_PER_PAGE);
  const indexOfLastTransaction = page * ROWS_PER_PAGE;
  const indexOfFirstTransaction = indexOfLastTransaction - ROWS_PER_PAGE;
  const currentTransactions = transactions.slice(indexOfFirstTransaction, indexOfLastTransaction);

  return (
    <section className="recent-transactions">
      <header className="flex items-center justify-between">
        <h2 className="recent-transactions-label">Recent Transactions</h2>
        <Link href={`/transaction-history/?id=${appwriteItemId}`} className="view-all-btn">
          View All
        </Link>
      </header>

      <Tabs defaultValue={appwriteItemId} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account: Account) => (
            <TabsTrigger key={account.id} value={account.appwriteItemId}>
              <BankTabItem key={account.id} account={account} appwriteItemId={account.appwriteItemId} />
            </TabsTrigger>
          ))}
        </TabsList>

        {accounts.map((account: Account) => (
          <TabsContent key={account.id} value={account.appwriteItemId} className="space-y-4">
            <BankInfo account={account} appwriteItemId={appwriteItemId} type="full" />
            <TransactionsTable transactions={currentTransactions} />

            {totalPages > 1 && (
              <div className="my-4 w-full">
                <Pagination page={page} totalPages={totalPages} />
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
};

export default RecentTransactions;
