import AboutPage from '@/app/about/page';
import { fireEvent, render, screen } from '@testing-library/react';

describe('About', () => {
  beforeEach(() => render(<AboutPage />));

  it('render a text', () => {
    const txt = screen.getByText(/AboutPage$/);
    expect(txt).toBeInTheDocument();
  });
  it('render a button', () => {
    const button1 = screen.getByRole('button', { name: 'BTN1' });
    const button2 = screen.getByRole('button', { name: 'BTN2' });
    expect(button1).toBeInTheDocument();
    expect(button2).toBeInTheDocument();
  });
  it('render a heading2', () => {
    const beforeHead2 = screen.getByRole('heading', { name: /^Name/ });
    expect(beforeHead2).toHaveTextContent('Name :');
  });
  it('fire event button', () => {
    const button1 = screen.getByRole('button', { name: 'BTN1' });
    fireEvent.click(button1);
    const beforeBtn2 = screen.getByRole('button', { name: 'BTN2' });
    expect(beforeBtn2).toBeEnabled();

    const afterHead2 = screen.getByRole('heading', { name: /^Name/ });
    expect(afterHead2).toHaveTextContent('Name : !!!');

    const afterBtn2 = screen.getByRole('button', { name: 'BTN2' });
    expect(afterBtn2).toBeDisabled();
  });
});
