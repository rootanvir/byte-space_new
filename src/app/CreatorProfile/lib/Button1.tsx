import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  children: ReactNode;
}

export function Button1({ icon, children, className = "", type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={`inline-flex h-[42px] items-center gap-2 rounded-full border border-neutral-300 bg-white px-5 text-[15px] text-neutral-900 transition hover:bg-neutral-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 ${className}`}
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}