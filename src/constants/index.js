export const navLinks = [
  {
    id: 2,
    name: "About",
    href: "#About",
  },
  {
    id: 3,
    name: "experience",
    href: "#experience",
  },
  {
    id: 4,
    name: "projects",
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
    img: "/assets/Spy-fall.png",
    source_code_link: "https://github.com/amirlrz/spyfall-Game",
    Link: "https://spyfall.liara.run/",
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
    duration: "17 March 2025 - Present ",
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
    name: "typescript.4",
    icon: "/assets/typescript.png",
  },
  {
    name: "wordpress.5",
    icon: "/assets/wordpress.png",
  },
  {
    name: "js.6",
    icon: "/assets/javascript (1).png",
  },
  {
    name: "css.7",
    icon: "/assets/css3.png",
  },
  {
    name: "html.8",
    icon: "/assets/html.png",
  },
  {
    name: "git.9",
    icon: "/assets/git.png",
  },
  {
    name: "Threejs.10",
    icon: "/assets/threejs-1.svg",
  },
];
