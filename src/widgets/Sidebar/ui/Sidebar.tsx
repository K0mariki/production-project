import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";

interface SidebarProps {
  className?: string;
}

export function Sidebar({className}: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
      <button onClick={() => setCollapsed((prev) => !prev)}>{collapsed ? ">" : "<"}</button>
    </aside>
  )
}