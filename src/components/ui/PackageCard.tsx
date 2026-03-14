import Link from "next/link";

type Props = {
  id?: string;
  title: string;
  subtitle: string;
  copy: string;
  meta: string;
};

export default function PackageCard({ id, title, subtitle, copy, meta }: Props) {
  const CardContent = (
    <article className="group flex flex-col justify-between rounded-3xl bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform hover:-translate-y-1 h-full cursor-pointer">
      <div className="space-y-3 p-6 md:p-8">
        <p className="text-[0.65rem] uppercase tracking-[0.3em] text-accent">
          {meta}
        </p>
        <h3 className="font-serif text-xl uppercase tracking-[0.18em] md:text-2xl">
          {title}
        </h3>
        <p className="text-xs uppercase tracking-[0.26em] text-neutral-500">
          {subtitle}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-700">{copy}</p>
      </div>
      <div className="flex items-center justify-between border-t px-6 py-4 text-[0.65rem] uppercase tracking-[0.26em] text-neutral-500 md:px-8 mt-auto">
        <span>Learn more</span>
        <span className="text-accent group-hover:translate-x-1 group-hover:text-accent/80 transition-transform">
          →
        </span>
      </div>
    </article>
  );

  return id ? (
    <Link href={`/travel/${id}`} className="block h-full">
      {CardContent}
    </Link>
  ) : (
    CardContent
  );
}

