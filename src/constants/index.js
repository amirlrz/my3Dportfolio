export const navLinks = [
  {
    id: 2,
    name: "About Me",
    href: "#About",
  },
  {
    id: 3,
    name: "Experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "Projects",
    href: "#projects",
  },
];

export const myProjects = [
  {
    id: 50,
    title: "weather App",
    description: `
  Real-time weather data fetching
  Location-based forecasts
  Responsive UI with Tailwind CSS
    `,
    img: "/assets/weatherApp.png",
    hoverImg: "/assets/weather2.png",
    source_code_link: "https://github.com/amirlrz/weather-app",
    Link: "",
    tags: [
      {
        name: "react.js12",
        color: "#5a30b6",
      },
      {
        name: "tailwind65",
        color: "#06945b",
      },
      {
        name: "Ready-to-use-Api",
        color: "#8e0569",
      },
    ],
  },
  {
    id: 51,
    title: "Spyfall game",
    img: "/assets/spy-fall2.PNG",
    hoverImg: "/assets/spy-fall.png",
    source_code_link: "https://github.com/amirlrz/spyfall-Game",
    Link: "https://spyfall.liara.run/",
    description: `
 A multiplayer web-based game built with React 
Implemented manual data setup for game locations and roles.
Players can see the number of participants, topic/location, and a countdown timer.
One player is randomly assigned as the spy, while others try to guess who it is before time runs out.
Designed responsive UI for desktop and mobile devices.
Focused on state management, user interactions, and game logic using React hooks.`,

    tags: [
      {
        name: "react.js12",
        color: "#5a30b6",
      },
      {
        name: "tailwind65",
        color: "#06945b",
      },
      {
        name: "manually created data",
        color: "#8e0569",
      },
    ],
  },
  {
    id: 60,
    title: "Coffee Store",
    description: `
    Next.js e-commerce with Supabase (auth/database), WordPress CMS (Api), and Zustand cart. SSR/CSR SEO, Tailwind styling, real-time updates. Manages products, users, payments ,products basket.
    `,
    img: "/assets/giyumeh1.png",
    Link: "https://lrz-store.liara.run",
    source_code_link: "https://github.com/amirlrz/Coffee-store",
    hoverImg: "/assets/coffe2.png",
    tags: [
      {
        name: "next.js1",
        color: "#5a30b6",
      },
      {
        name: "tailwind22",
        color: "#06945b",
      },
      {
        name: "supabase12",
        color: "#8e0569",
      },
    ],
  },
  {
    id: 61,
    title: " Internal ERP System",
    description: `
Built a web-based ERP platform for internal staff operations using Next.js and Redux Toolkit.
Developed responsive UI components and managed global state for smooth user experience.
Integrated REST APIs for authentication, data management, and internal workflows.
Contributed to digitizing administrative processes, improving efficiency and scalability.
    `,
    img: "/assets/erp1.JPG",
    hoverImg: "/assets/erp2.JPG",
    tags: [
      {
        name: "next.js",
        color: "#5a30b6",
      },
      {
        name: "mui",
        color: "#06945b",
      },
      {
        name: "redux",
        color: "#8e0569",
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 20,
    pos: "Internship",
    duration: "June 2022 - August 2022",
    title: "Fouland Technique International Company (Isfahan)",
    icon: "/assets/tailwind.png",
  },
  {
    id: 30,

    pos: "Bootcamp Course",
    duration: "June 2024 - December 2024",
    title: "Isfahan Iron Company (Isfahan)",
    icon: "/assets/javascript (1).png",
  },
  {
    id: 40,
    pos: "SEO Specialist & Website Administrator",
    duration: "March 2024 -  February 2025 ",
    title: "Giyumeh Coffee Production (Isfahan)",
    icon: "/assets/wordpress.png",
  },
  {
    id: 42,
    title: "Software Engineer Nika Farinegan Co. ",
    duration: "5 March 2025 - Present ",
    pos: "Developing an ERP system for power utilities using Next.js and TypeScript ",
    icon: "/assets/next.png",
  },
];

export const technologies = [
  {
    name: "react.1",
    icon: "/assets/react.png",
  },
  {
    name: "next.2",
    icon: "/assets/next.png",
  },
  {
    name: "tailwind.3",
    icon: "/assets/tailwind.png",
  },
  {
    name: "figma.4",
    icon: "/assets/figma.png",
  },
  {
    name: "typescript.5",
    icon: "/assets/typescript.png",
  },
  {
    name: "wordpress.6",
    icon: "/assets/wordpress.png",
  },
  {
    name: "js.7",
    icon: "/assets/javascript (1).png",
  },
  {
    name: "css.8",
    icon: "/assets/css3.png",
  },
  {
    name: "html.9",
    icon: "/assets/html.png",
  },
  {
    name: "git.10",
    icon: "/assets/git.png",
  },
  {
    name: "Threejs.11",
    icon: "/assets/threejs-1.svg",
  },
  {
    name: "mui.12",
    icon: "/assets/mui.png",
  },
  {
    name: "supabase.13",
    icon: "/assets/supabase.webp",
  },
  {
    name: "Microsoft_Azure.14",
    icon: "/assets/Microsoft_Azure.png",
  },
];
