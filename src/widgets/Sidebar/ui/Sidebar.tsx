import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <aside
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <button
        type="button"
        onClick={toggleCollapse}
      >
        {collapsed ? '>' : '<'}
      </button>
    </aside>
  );
}
