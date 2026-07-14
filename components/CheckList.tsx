type CheckListProps = {
  items: string[];
};

export default function CheckList({ items }: CheckListProps) {
  return (
    <ul className="divide-y divide-black/10 border-y border-black/10">
      {items.map((item) => (
        <li key={item} className="flex gap-4 py-4 text-[15px] font-bold leading-7 text-[#35332F] sm:text-base">
          <span aria-hidden="true" className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-[#6547E8] text-xs font-black text-white">✓</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
