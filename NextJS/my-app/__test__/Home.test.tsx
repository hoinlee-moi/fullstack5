import Home from '@/app/page';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

describe('Home', () => {
  beforeEach(() => {
    render(<Home />);
  });
  it('renders a heading ', () => {
    // const eleTitle = screen.getByText('This is Home');
    const eleTitle = screen.getByText(/Home$/);
    expect(eleTitle).toBeInTheDocument();

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).toBeInTheDocument();

    const heading2 = screen.getByRole('heading', { name: 'This is Home' });
    expect(heading2).toBeInTheDocument();
  });
  it('renders a button', () => {
    const btn = screen.getByRole('button', { name: 'BTN' });
    expect(btn).toBeInTheDocument();
  });

  //   it('xxx', async () => {
  //     render(<About />);
  //     const btn = screen.getByRole('button', { name: 'AniBtn1' });
  //     fireEvent.click(btn);
  //     const span = screen.getByText(/^Name/);
  //     // const span = screen.getByRole('span', { name: 'Name: !!!' });
  //     expect(span).toHaveTextContent('Name: !!!');

  //     // expect(screen.getByRole('button', { name: 'BTTN' })).not.toBeDisabled();
  //     expect(screen.getByRole('button', { name: 'BTTN' })).toBeDisabled();
  //   });
});
