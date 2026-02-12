"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Container from "./shared/container";
import { ModeToggle } from "./ui/theme-toggle";

const NAV_ITEMS = {
  about: "/",
  news: "/news",
  publications: "/publications",
  experience: "/experience",
};

export const Header = () => {
  const pathname = usePathname();

  return (
    <header>
      <Container size="large">
        <nav
          className="flex flex-col fade items-center md:items-start justify-start py-8 tracking-tight w-full sm:pr-0 md:pr-6 lg:pr-0"
          aria-label="Main navigation"
        >
          <div className="flex flex-row items-center">
            <Link href="/">
              <Image
                src="/profile.JPG"
                alt="Profile photo"
                width={120}
                height={120}
                priority={true}
                className="object-cover border-neutral-200 dark:border-neutral-700 shadow-sm rounded-full"
              />
              <span className="sr-only">Mustafa Sameen</span>
            </Link>

            <div className="flex flex-col ml-4">
              <span className="text-medium inline-block font-medium">
                Mustafa Sameen
              </span>
              <span className="opacity-60">PhD student, Civil & Coastal Engineering</span>
              <span className="opacity-60">University of Florida</span>
            </div>
          </div>

          <div className="flex flex-row items-center justify-between sm:justify-end w-full mt-8 sm:mt-4 mb-0 sm:mb-4 tracking-tight">
            <div className="inline-flex items-center">
              {Object.entries(NAV_ITEMS).map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className={cn(
                    pathname === href ? "font-semibold" : "font-normal",
                    "transition-all hover:text-emerald-900 dark:hover:text-emerald-100 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 rounded-md flex align-middle relative py-1 px-2"
                  )}
                >
                  {name}
                </Link>
              ))}
              <a
                href="/CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "font-normal transition-all hover:text-emerald-900 dark:hover:text-emerald-100 hover:bg-emerald-50/60 dark:hover:bg-emerald-950/30 rounded-md flex align-middle relative py-1 px-2"
                )}
              >
                cv
              </a>
            </div>
            <ModeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
};
