"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./styles.css";

const navLinks = [
  { name: "Regsiter", href: "/register" },
  { name: "Login", href: "/login" },
  { name: "Forgot passowrd", href: "/forgot-password" },
];

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {navLinks?.map((item) => {
        const active = pathname?.startsWith(item?.href);
        return (
          <Link
            href={item?.href}
            key={item?.name}
            className={active ? "font-bold mr-4" : "text-red-500 mr-4 "}
          >
            {item?.name}
          </Link>
        );
      })}
    </div>
  );
}
