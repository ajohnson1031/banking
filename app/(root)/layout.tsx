import Img from "@/components/Img";
import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/Sidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn = await getLoggedInUser();

  if (!loggedIn) redirect("/sign-in");

  return (
    <main className="flex h-screen w-full">
      {loggedIn && <Sidebar user={loggedIn} />}
      <div className="flex size-full flex-col">
        <div className="root-layout">
          <Img src={"/icons/logo.svg"} width={30} height={30} alt="logo" />
          <div>{loggedIn && <MobileNav user={loggedIn} />}</div>
        </div>
        {children}
      </div>
    </main>
  );
}
