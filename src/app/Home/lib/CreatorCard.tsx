const cardBase = "rounded-xl bg-[#0b3cf5] p-4 text-white shadow-lg";

export type RevenueCardProps = {
  label?: string;
  period: string; // "July 1-28"
  amount: string; // "$120.29"
  percent: number; // 0 - 100 (bar fill)
  className?: string;
};

export function RevenueCard({
  label = "Total Revenue",
  period,
  amount,
  percent,
  className = "",
}: RevenueCardProps) {
  const value = Math.min(100, Math.max(0, percent));
  return (
    <div className={`${cardBase} w-52 ${className}`}>
      <p className="text-xs font-medium">{label}</p>
      <p className="text-[9px] text-white/70">{period}</p>
      <p className="mt-2 text-xl font-bold">{amount}</p>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-white/25">
        <div className="h-full rounded-full bg-[#d7f73b]" style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}

export type YearCardProps = {
  label?: string;
  year: string;      
  amount: string;    
  badge?: string;    
  className?: string;
};

export function YearCard({
  label = "Year to Date",
  year,
  amount,
  badge,
  className = "",
}: YearCardProps) {
  return (
    <div className={`${cardBase} w-36 ${className}`}>
      <p className="text-xs font-medium">{label}</p>
      <p className="text-[9px] text-white/70">{year}</p>
      <p className="mt-2 text-xl font-bold">{amount}</p>
      {badge && (
        <span className="mt-2 inline-block rounded-full bg-[#d7f73b] px-2 py-0.5 text-[9px] font-semibold text-neutral-950">
          {badge}
        </span>
      )}
    </div>
  );
}