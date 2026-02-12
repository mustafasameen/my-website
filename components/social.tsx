import { SocialButtonProps } from "@/types";
import IconArrowRightUp from "./shared/icons/arrow-right-up";
import IconGithub from "./shared/icons/github";
import IconLinkedin from "./shared/icons/linkedin";
import IconMail from "./shared/icons/mail";

import Link from "next/link";

function SocialButton({ href, children }: SocialButtonProps) {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      passHref
      className="group flex w-full items-center justify-between rounded-xl border border-neutral-200 bg-white/70 p-4 no-underline text-neutral-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50/60 hover:shadow-md dark:border-neutral-800 dark:bg-neutral-900/60 dark:text-neutral-200 dark:hover:border-emerald-700/60 dark:hover:bg-emerald-950/30"
    >
      {children}
      <span className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-emerald-700 dark:text-emerald-400">
        <IconArrowRightUp />
      </span>
    </Link>
  );
}

export default function Social() {
  return (
    <div className="flex flex-col gap-2 md:flex-row md:gap-2">
      <SocialButton href="https://github.com/mustafasameen">
        <div className="flex flex-row items-center">
          <IconGithub />
          <span className="ml-3">Github</span>
        </div>
      </SocialButton>
      <SocialButton href="https://www.linkedin.com/in/mustafasameen/">
        <div className="flex flex-row items-center">
          <IconLinkedin />
          <span className="ml-3">LinkedIn</span>
        </div>
      </SocialButton>
      <SocialButton href="mailto:mustafasameen@ufl.edu">
        <div className="flex flex-row items-center">
          <IconMail />
          <span className="ml-3">Email</span>
        </div>
      </SocialButton>
    </div>
  );
}
