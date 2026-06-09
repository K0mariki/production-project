import { render, screen } from '@testing-library/react';
import { Button, ButtonTheme } from "shared/ui/Button/Button";

describe('Button', () => {
  test('должен вернуть экземпляр кнопки', () => {
    render(<Button>Button</Button>);
    expect(screen.getByText('Button')).toBeInTheDocument();
  });

  test('должен вернуть кнопку с классом clear, если задана тема ButtonTheme.CLEAR', () => {
    render(<Button theme={ButtonTheme.CLEAR}>Button</Button>);
    expect(screen.getByText('Button')).toHaveClass('clear');
    screen.debug();
  });
});
