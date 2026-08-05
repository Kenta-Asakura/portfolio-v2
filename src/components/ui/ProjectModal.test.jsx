import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import ProjectModal from './ProjectModal';

const project = {
  id: 'test-project',
  title: 'Test Project',
  longDescription: 'A longer description of the test project.',
  images: { desktop: '/test-image.png', alt: 'Test project screenshot' },
  tags: ['React', 'Vitest'],
  features: ['Feature one', 'Feature two'],
  challenges: 'Some technical challenge.',
  links: {
    demo: 'https://example.com/demo',
    github: 'https://example.com/repo',
  },
};

describe('ProjectModal', () => {
  it('renders project details', () => {
    render(<ProjectModal project={project} onClose={vi.fn()} />);

    expect(screen.getByRole('heading', { name: 'Test Project' })).toBeInTheDocument();
    expect(screen.getByText('A longer description of the test project.')).toBeInTheDocument();
    expect(screen.getByText('Feature one')).toBeInTheDocument();
    expect(screen.getByText('Feature two')).toBeInTheDocument();
    expect(screen.getByText('Some technical challenge.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /view live demo/i })).toHaveAttribute(
      'href',
      project.links.demo,
    );
    expect(screen.getByRole('link', { name: /view source code/i })).toHaveAttribute(
      'href',
      project.links.github,
    );
  });

  it('falls back to a placeholder when no image is provided', () => {
    const projectWithoutImage = { ...project, images: { alt: 'No image' } };
    render(<ProjectModal project={projectWithoutImage} onClose={vi.fn()} />);

    expect(screen.getByText('Image Coming Soon')).toBeInTheDocument();
  });

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup();
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);

    await user.click(screen.getByRole('button', { name: /close modal/i }));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
