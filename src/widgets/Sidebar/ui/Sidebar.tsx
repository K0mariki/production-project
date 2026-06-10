import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher';
import { Button } from 'shared/ui/Button/Button';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => setCollapsed((prev) => !prev);

  return (
    <aside
      data-testid="sidebar"
      className={classNames(
        cls.sidebar,
        { [cls.collapsed]: collapsed },
        [className],
      )}
    >
      <div className={cls.sidebarInner}>
        <Button
          data-testid="sidebar-toggle"
          onClick={toggleCollapse}
        >
          {collapsed ? '>' : '<'}
        </Button>
        <div className={classNames(cls.switchers, { [cls.switchersColumn]: collapsed })}>
          <ThemeSwitcher />
          <LanguageSwitcher />
        </div>
      </div>
    </aside>
  );
}
