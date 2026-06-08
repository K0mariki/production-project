import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
  className?: string;
}

export function PageError({ className }: PageErrorProps) {
  const { t } = useTranslation();

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={classNames(cls.pageError, {}, [className])}>
      <h1>{t('pageError')}</h1>
      <Button onClick={reloadPage}>
        {t('refreshPage')}
      </Button>
    </div>
  );
}
