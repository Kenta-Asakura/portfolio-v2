import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Projects from './Projects';
import { projectsData } from '../../data/projects';

describe('Projects section', () => {
  it('renders a card for every project', () => {
    render(<Projects />);

    projectsData.forEach((project) => {
      expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
    });
  });

  it('opens the modal for the selected project and closes it again', async () => {
    const user = userEvent.setup();
    const [firstProject] = projectsData;
    render(<Projects />);

    await user.click(
      screen.getByRole('button', { name: new RegExp(`view details for ${firstProject.title}`, 'i') }),
    );

    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: firstProject.title }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /close modal/i }));

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
