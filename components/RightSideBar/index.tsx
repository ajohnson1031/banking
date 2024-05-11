import BankCard from "@/components/BankCard";
import Category from "@/components/Category";
import Img from "@/components/Img";
import { countTransactionCategories } from "@/lib/utils";
import Link from "next/link";

const RightSideBar = ({ user, transactions, banks }: RightSidebarProps) => {
  const { firstName, lastName, email } = user;
  const categories: CategoryCount[] = countTransactionCategories(transactions);

  return (
    <aside className="right-sidebar">
      <section className="flex flex-col pb-8">
        <div className="profile-banner"></div>
        <div className="profile">
          <div className="profile-img">
            <span className="text-5xl font-bold text-blue-500">{firstName[0]}</span>
          </div>

          <div className="profile-details">
            <h1 className="profile-name">
              {firstName} {lastName}
            </h1>
            <p className="profile-email">{email}</p>
          </div>
        </div>
      </section>

      <section className="banks">
        <div className="flex w-full justify-between">
          <h2 className="header-2">My Banks</h2>
          <Link href="/" className="flex gap-2">
            <Img src="/icons/plus.svg" alt="plus" />
            <h2 className="text-14 font-semibold text-gray-600">Add Bank</h2>
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col justify-center gap-5">
            <div className="relative z-10">
              <BankCard key={banks[0].$id} account={banks[0]} userName={`${firstName} ${lastName}`} showBalance={false} />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-8 z-0 w-[90%]">
                <BankCard key={banks[1].$id} account={banks[1]} userName={`${firstName} ${lastName}`} showBalance={false} />
              </div>
            )}

            <div className="mt-10 flex flex-1 flex-col gap-6">
              <h2 className="header-2">Top Categories</h2>

              <div className="space-y-3">
                {categories.map((category, i) => (
                  <Category key={category.name} category={category} />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>
    </aside>
  );
};

export default RightSideBar;
