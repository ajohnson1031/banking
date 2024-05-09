"use client";

import Footer from "@/components/Footer";
import Img from "@/components/Img";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ user }: SidebarProps) => {
  const pathname = usePathname();
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="flex mb-12 cursor-pointer items-center gap-2 font-inter">
          <Img src={"/icons/logo.svg"} width={34} height={34} alt="Horizon Logo" className="size-[24px] max-xl:size-14 flex justify-center" />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link key={item.label} href={item.route} className={cn("sidebar-link", { "bg-bank-gradient ": isActive })}>
              <div className="relative size-6 flex justify-center items-center">
                <Img src={item.imgURL} alt={item.label} fill className={cn({ "brightness-[3] invert-0": isActive })} />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>{item.label}</p>
            </Link>
          );
        })}
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Sidebar;
