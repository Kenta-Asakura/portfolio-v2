import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import NavLinks from './NavLinks';
import { NAV_LINKS } from '../../data/navigation';

describe('NavLinks', () => {
  it('renders a link for every entry in NAV_LINKS with the correct href', () => {
    render(<NavLinks handleNavClick={vi.fn()} />);

    NAV_LINKS.forEach((link) => {
      expect(screen.getByRole('link', { name: link.name })).toHaveAttribute('href', link.href);
    });
  });

  it('calls handleNavClick when a link is clicked', async () => {
    const handleNavClick = vi.fn();
    render(<NavLinks handleNavClick={handleNavClick} />);

    screen.getByRole('link', { name: NAV_LINKS[0].name }).click();

    expect(handleNavClick).toHaveBeenCalledTimes(1);
  });
});
