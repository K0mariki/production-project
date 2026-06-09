import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
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
      <div className={cls.sidebarInner}>
        <button
          type="button"
          onClick={toggleCollapse}
        >
          {collapsed ? '>' : '<'}
        </button>
        <div className={classNames(cls.switchers, { [cls.switchersColumn]: collapsed })}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  );
}
