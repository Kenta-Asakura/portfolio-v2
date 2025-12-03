// Import project images
import photosnapDesktop from '../assets/images/projects/photosnap.png';
// ! import photosnapMobile from '../assets/images/projects/photosnap-mobile.png';

import weatherDesktop from '../assets/images/projects/weather-vibez.png';
// ! import weatherMobile from '../assets/images/projects/weather-vibez-mobile.png';

// * Import Images for Name Base project
// - Desktop
// - Mobile

export const projectsData = [
  {
    id: 'photosnap',
    title: 'Photosnap Website',
    description:
      'A React-based multi-page marketing website for a fictional photo-sharing app. Building this project enhanced my understanding of React props for dynamic rendering and improved my skills in managing reusable and scalable component structures.',
    longDescription:
      'Built a full-featured React-based multi-page marketing website for a fictional photo-sharing app. This project enhanced my understanding of React props for dynamic rendering and improved my skills in managing reusable and scalable component structures. The website features multiple pages with consistent navigation and responsive design.',
    images: {
      desktop: photosnapDesktop,
    //   mobile: photosnapMobile,
      alt: 'Photosnap marketing website showcasing photo-sharing app features',
    },
    tags: ['React', 'Sass', 'Figma'],
    features: [
      'Multi-page React architecture with routing',
      'Reusable component library',
      'Dynamic content rendering with props',
      'Fully responsive design from mobile to desktop',
      'Pixel-perfect implementation from Figma designs',
    ],
    challenges:
      'Managing reusable component structures and implementing dynamic rendering with React props while maintaining scalability and clean code organization.',
    links: {
      github: 'https://github.com/Kenta-Asakura/photosnap-react-website',
      demo: 'https://photosnap-react-website.netlify.app/',
    },
  },

  // {
  //   id: 'name-base',
  //   title: 'Name Base',
  //   description: 'Collaborative task management with real-time updates',
  //   longDescription:
  //     'Developed a collaborative task management application that enables teams to work together in real-time. Features include drag-and-drop task organization, team member assignments, and instant synchronization across all connected clients.',
  //   images: {
  //     desktop: null, // * Placeholder until the image is added
  //   //  ! mobile: null, // * -
  //     alt: 'Name Base task management dashboard interface',
  //   },
  //   tags: ['React', 'DaisyUI', 'Hono', 'Docker'],
  //   features: [
  //     'Team member assignments',
  //     'Project boards and lists',
  //     'Activity tracking and notifications',
  //   ],
  //   challenges:
  //     'Ensuring data consistency across multiple users while maintaining real-time updates required implementing optimistic UI updates and conflict resolution strategies.',
  //   links: {
  //     github: 'https://github.com/yourusername/project2',
  //     demo: 'https://test.com',
  //   },
  // },

  {
    id: 'weather-vibez',
    title: 'WeatherVibez',
    description:
      'A scalable and modular application featuring clean, maintainable code and real-time weather data integration through an external API for a seamless user experience.',
    longDescription:
      'Developed a scalable and modular weather application featuring clean, maintainable code architecture. The application integrates real-time weather data through an external API to provide users with accurate and up-to-date weather information. Built with TypeScript for type safety and better developer experience.',
    images: {
      desktop: weatherDesktop,
    //  ! mobile: weatherMobile,
      alt: 'WeatherVibez application displaying current weather conditions and forecast',
    },
    tags: ['TypeScript', 'Sass', 'Webpack'],
    features: [
      'Real-time weather data from external API',
      'TypeScript for type safety and better DX',
      'Modular architecture with Webpack',
      'Clean and maintainable codebase',
      'Responsive UI with custom Sass styling',
    ],
    challenges:
      'Implementing clean architecture with TypeScript while managing external API integration and ensuring real-time data synchronization for a seamless user experience.',
    links: {
      github: 'https://github.com/Kenta-Asakura/weather-dashboard',
      demo: 'https://weather-vibez.netlify.app/',
    },
  },
];