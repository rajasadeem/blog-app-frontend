"use client";
import Link from "next/link";
import Logo from "@/assets/svgs/logo";
import Menu from "@/assets/svgs/menu";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Blog", path: "/blog" },
  { title: "About", path: "/about" },
  { title: "Contact", path: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex justify-center">
      <div className={`w-5/6 h-[80px] flex justify-between items-center`}>
        <Link href={"/"}>
          <Logo />
        </Link>
        <div className="hidden lg:flex gap-16 items-center ">
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={index + 1}
                href={item.path}
                className={
                  isActive ? "text-[#7C4EE4]" : "text-black hover:text-black/70"
                }
              >
                {item.title}
              </Link>
            );
          })}
          <Button>Get Started</Button>
        </div>

        {/* Menu for medium or small screens  */}
        <Sheet>
          <SheetTrigger className="block lg:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent className="flex flex-col gap-5">
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <SheetTitle key={index + 1}>
                  <Link
                    key={index + 1}
                    href={item.path}
                    className={
                      isActive
                        ? "text-[#7C4EE4]"
                        : "text-black hover:text-black/70"
                    }
                  >
                    {item.title}
                  </Link>
                </SheetTitle>
              );
            })}
            <SheetTitle>
              <Button>Get Started</Button>
            </SheetTitle>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
