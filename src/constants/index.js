import {
  linkedin,
  instagram,
  github,
  linkedin1,
  instagram1,
  github1,
  img1,
  carousel1,
  carousel2,
  carousel3,
  responsive,
  LookingGif,
  react,
  // fullstack,
} from '../assets';

const social = [
  {
    id: 1,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/tewaryantara/',
    icon: linkedin,
    icon1: linkedin1,
  },
  {
    id: 2,
    name: 'Instagram',
    url: 'https://www.instagram.com/crankycatlady21/',
    icon: instagram,
    icon1: instagram1,
  },
  {
    id: 3,
    name: 'Github',
    url: 'https://github.com/StringAna',
    icon: github,
    icon1: github1,
  },
];

const technologies = [
  {
    stack: ['languages', 'all'],
    name: 'HTML 5',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'CSS 3',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'React JS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Redux Toolkit',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Bootstrap',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Tailwind CSS',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'PostgreSQL',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Git',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'GitHub',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Webpack',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Figma',
    icon: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Postman',
    icon: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    stack: ['languages', 'all'],
    name: 'C++',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-plain.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'VSCode',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
  },
  {
    stack: ['tools', 'all'],
    name: 'Office 365',
    icon: 'https://img.icons8.com/?size=100&id=37619&format=png&color=000000',
  },
  {
    stack: ['tools', 'all'],
    name: 'UIPath',
    icon: 'https://logowik.com/content/uploads/images/ui-path7967.jpg',
  },
  {
    stack: ['frameworks', 'all'],
    name: 'Streamlit',
    icon: 'https://streamlit.io/images/brand/streamlit-logo-secondary-colormark-lighttext.svg',
  },
];

const projects = [
  {
    id: 1,
    name: 'Better Cover Letter Generator',
    desc: "Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",
    tech: ['React', 'JavaScript', 'Streamlit', 'Snowflake'],
    img: img1,
    carousel: [carousel1, carousel2, carousel3],
    source_link: 'https://github.com',
    live_link: 'https://github.com',
  },
  {
    id: 2,
    name: 'Better Cover Letter Generator',
    desc: "Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",
    tech: ['React', 'JavaScript', 'Streamlit', 'Snowflake'],
    img: img1,
    carousel: [carousel1, carousel2, carousel3],
    source_link: 'https://github.com',
    live_link: 'https://github.com',
  },
  {
    id: 3,
    name: 'Better Cover Letter Generator',
    desc: "Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",
    tech: ['React', 'JavaScript', 'Streamlit', 'Snowflake'],
    img: img1,
    carousel: [carousel1, carousel2, carousel3],
    source_link: 'https://github.com',
    live_link: 'https://github.com',
  },
  {
    id: 4,
    name: 'Better Cover Letter Generator',
    desc: "Using Streamlit and Snowflake API, I created a cover letter generator that uses a user's resume to generate a cover letter for a job application. ",
    tech: ['React', 'JavaScript', 'Streamlit', 'Snowflake'],
    img: img1,
    carousel: [carousel1, carousel2, carousel3],
    source_link: 'https://github.com',
    live_link: 'https://github.com',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Supervisor 1',
    image: '',
    text: 'She is good',
    country: 'Any',
    linkedIn: 'https://www.linkedin.com/in/tewaryantara/',
  },
];

const services = [
  {
    id: 1,
    icon: responsive,
    title: 'Responsive Design',
    text: 'I specialize in creating websites that are not just visually stunning but also highly adaptable. My responsive designs ensure that your site looks and works perfectly on any device, providing an exceptional user experience regardless of screen size.',
  },
  {
    id: 2,
    icon: react,
    title: 'Front-end Development',
    text: 'I breathe life into your creative ideas by translating them into captivating web interfaces. Using the latest frontend technologies and best practices, I build engaging, user-friendly websites that leave a lasting impression.',
  },
  {
    id: 3,
    icon: LookingGif,
    title: 'Back-end Development',
    text: 'My backend development expertise forms the backbone of your web application. I design and build robust, efficient, and secure server-side solutions that handle data management and business logic seamlessly, ensuring your website functions flawlessly.',
  },
];

const navLinks = [
  {
    id: 1,
    name: 'About',
    url: '/#about',
  },
  {
    id: 2,
    name: 'Service',
    url: '/#service',
  },
  {
    id: 3,
    name: 'Work',
    url: '/#work',
  },
  {
    id: 4,
    name: 'Testimonial',
    url: '/#testimonial',
  },
  {
    id: 5,
    name: 'Contact',
    url: '/#contact',
  },
];

export { technologies, projects, testimonials, social, services, navLinks };
