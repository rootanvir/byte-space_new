"use client";

import { AlignLeft, ChartNoAxesColumn, Funnel, Shapes } from "lucide-react";
import { Button1 } from "./Button1";

interface CourseToolbarProps {
  sortLabel: string;
  onFilter?: () => void;
  onLevel?: () => void;
  onCategory?: () => void;
  onSort?: () => void;
}

export function CourseToolBar({ sortLabel, onFilter, onLevel, onCategory, onSort }: CourseToolbarProps) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap gap-3">
        <Button1 icon={<Funnel size={20} />} onClick={onFilter}>Filter</Button1>
        <Button1 icon={<ChartNoAxesColumn size={20} />} onClick={onLevel}>Level</Button1>
        <Button1 icon={<Shapes size={20} />} onClick={onCategory}>Category</Button1>
      </div>

      <Button1 icon={<AlignLeft size={20} />} onClick={onSort}>{sortLabel}</Button1>
    </div>
  );
}