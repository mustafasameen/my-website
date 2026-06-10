type PageHeaderProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <header className="mb-10">
      <p className="text-xs uppercase tracking-[0.2em] text-emerald-700/80 dark:text-emerald-400/80">
        {eyebrow}
      </p>
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
          {subtitle}
        </p>
      )}
      <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 via-neutral-200 to-transparent dark:from-neutral-700 dark:via-neutral-800" />
    </header>
  );
}
