type CheckListProps = {
  items: string[];
};

export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 rounded-2xl border border-emerald-100 bg-white px-5 py-4 text-sm font-bold leading-7 text-zinc-800 shadow-[0_8px_24px_rgba(6,78,59,0.04)] sm:text-base">
          <span aria-hidden="true" className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-emerald-600 text-xs text-white">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
