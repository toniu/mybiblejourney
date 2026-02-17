import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer with correct year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    const copyrightText = screen.getByText(new RegExp(`${currentYear}`));
    expect(copyrightText).toBeInTheDocument();
  });

  test('renders social media links', () => {
    render(<Footer />);
    const instagramLink = screen.getByLabelText(/instagram/i);
    const threadsLink = screen.getByLabelText(/threads/i);
    const tiktokLink = screen.getByLabelText(/tiktok/i);
    
    expect(instagramLink).toBeInTheDocument();
    expect(threadsLink).toBeInTheDocument();
    expect(tiktokLink).toBeInTheDocument();
  });

  test('social media links have correct attributes', () => {
    render(<Footer />);
    const instagramLink = screen.getByLabelText(/instagram/i);
    
    expect(instagramLink).toHaveAttribute('target', '_blank');
    expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('has proper semantic HTML and ARIA labels', () => {
    render(<Footer />);
    const footer = screen.getByRole('contentinfo');
    const nav = screen.getByRole('navigation', { name: /social media/i });
    
    expect(footer).toBeInTheDocument();
    expect(nav).toBeInTheDocument();
  });
});
