import BankCard from "@/components/BankCard";
import HeaderBox from "@/components/HeaderBox";
import { getAccounts } from "@/lib/actions/bank.actions";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const MyBanks = async () => {
  const { firstName, lastName, $id } = await getLoggedInUser();
  const accounts = await getAccounts({ userId: $id! });

  if (!accounts) return;
  return (
    <section className="flex">
      <div className="my-banks">
        <HeaderBox title="My Bank Accouns" subtext="Manage your banking activities." />

        <div className="space-y-4">
          <h2 className="header-2">Your Cards</h2>

          <div className="flex flex-wrap gap-6">
            {accounts.data.map((account: Account) => (
              <BankCard key={account.id} account={account} userName={`${firstName} ${lastName}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBanks;
