import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ProjectCard from './ProjectCard';

const project = {
  id: 'test-project',
  title: 'Test Project',
  description: 'A project used for testing.',
  images: { desktop: '/test-image.png' },
  tags: ['React', 'Vitest'],
};

describe('ProjectCard', () => {
  it('renders the project title, description, and tags', () => {
    render(<ProjectCard project={project} onSelect={vi.fn()} />);

    expect(screen.getByRole('heading', { name: 'Test Project' })).toBeInTheDocument();
    expect(screen.getByText('A project used for testing.')).toBeInTheDocument();
    expect(screen.getByText('React • Vitest')).toBeInTheDocument();
  });

  it('calls onSelect with the project when clicked', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<ProjectCard project={project} onSelect={onSelect} />);

    await user.click(screen.getByRole('button', { name: /view details for test project/i }));

    expect(onSelect).toHaveBeenCalledWith(project);
  });

  it('calls onSelect when Enter is pressed on the focused card', async () => {
    const user = userEvent.setup();
    const onSelect = vi.fn();
    render(<ProjectCard project={project} onSelect={onSelect} />);

    const card = screen.getByRole('button', { name: /view details for test project/i });
    card.focus();
    await user.keyboard('{Enter}');

    expect(onSelect).toHaveBeenCalledWith(project);
  });
});
