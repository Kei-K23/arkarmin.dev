export const WEB_APPS = [
  {
    title: "TaskPilot",
    repo: "https://github.com/Kei-K23/task-pilot",
    demo: "https://task-pilot-nine.vercel.app/",
    description:
      "Manage, gather and navigate your tasks and projects like a pro with TaskPilot. Simple and minimal version of Jira but every developer favorite thing, it's Open-Source. Creating workspaces, project, tasks, kanban boards, calendars, invite system, image uploads, analytics, authentication and more other features.",
    tags: ["Next.js", "Hono.js", "Tailwind", "ShadcnUI", "AppWrite"],
    thumbnail: "/_static/projects/task-pilot.png",
  },
  {
    title: "Mentor",
    repo: "https://github.com/Kei-K23/mentor",
    demo: "https://mentor-beta.vercel.app/",
    description:
      "Mentor is an open-source web application for learning, practicing and mastering programming languages and craft interview questions. The goal of this project is to improve the developer community.",
    tags: ["Next.js", "Prisma", "Tailwind", "ShadcnUI", "Postgres"],
    thumbnail: "/_static/projects/mentor.png",
  },
  {
    title: "Flow",
    repo: "https://github.com/Kei-K23/Flow-LMS",
    demo: "https://flow-lms.vercel.app/",
    description:
      "Flow is modern LMS for languages with beautiful and game like system (Duolingo like system).",
    tags: ["Next.js", "Prisma", "Tailwind", "ShadcnUI", "Postgres"],
    thumbnail: "/_static/projects/flow.png",
  },
  {
    title: "React Finder 🗂️",
    repo: "https://github.com/Kei-K23/react-finder",
    demo: "https://react-finder-gamma.vercel.app",
    description:
      "Recreating interactive Mac OS file explore 'Finder' 🗂️ but this one is for web 🕸️. I recreated most functionalities of Mac OS Finder, including UI and user interactions functionalities and features.",
    tags: ["Next.js", "Tailwind", "ShadcnUI"],
    thumbnail: "/_static/projects/react-finder.png",
  },
] as const;

export const TOOLS = [
  {
    title: "states-nepal",
    repo: "https://github.com/adarshaacharya/states-nepal",
    external: "https://www.npmjs.com/package/states-nepal",
    description:
      "npm package to get the dataset about different administrative division of Nepal.",
    techs: ["npm-package"],
  },
  {
    title: "aaja (आज)",
    repo: "https://github.com/adarshaacharya/aaja",
    external: "https://www.npmjs.com/package/aaja",
    description:
      "Cli tool to get today's nepali date, tithi, public events and current time.",
    techs: ["npm-package"],
  },
  {
    title: "ApiHub",
    repo: "https://github.com/adarshaacharya/ApiHub",
    external:
      "https://marketplace.visualstudio.com/items?itemName=AadarshaAcharya.api-hub",
    description:
      "VS Code extension to get free third party api url on different categories.",
    techs: ["vscode-extension"],
  },
  {
    title: "shitcommits",
    repo: "https://github.com/adarshaacharya/shitcommits",
    external: "https://www.npmjs.com/package/shitcommits",
    description: "Cli tool to make git commits with not-so perfect messges.",
    techs: ["npm-package"],
  },
] as const;
