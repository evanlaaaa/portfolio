import { IJob } from "../types/interface";

export const experiences: IJob[] = [
  {
    companyName: "V6 Technology",
    companyAddress: "Bukit Mertajam, Malaysia",
    companyLink: "https://www.v6technology.net/",
    positionTitle: "Software Engineer",
    dateRange: "Aug 2022 - Present",
    description: [
      "Developed a Kotlin app with AppsFlyer integration, achieving 20% higher install tracking accuracy than Firebase Analytics.",
      "Deployed a robust Strapi (Headless CMS) backend on Amazon EC2 using Docker, seamlessly integrated with PostgreSQL for enhanced data management and scalability. Developed a Flutter app that effectively interacts with the API, enabling efficient content management and real-time data access.",
      "Solved the challenge of delivering correct APK variants for Flutter apps to users with different device architectures. Implemented a dynamic APK delivery solution using Flutter Web as proxy webpage, integrated seamlessly into existing .NET projects. Reducing download size by 70%.",
      "Modernized a Laravel application by strategically migrating Blade views to React.js using Inertia.js, enhancing user experience and maintainability. Led planning and decision-making for the migration, ensuring a smooth transition and minimal disruption to existing functionality. Developed necessary APIs for seamless integration between the new frontend and backend.",
      "Led the development of a Flutter app from scratch, enabling intuitive interaction with the client's extended service, featuring a fully custom-built interactive Candlestick Chart for real-time market visualization, enhancing user engagement and investment decision-making. Leveraged CoinGecko APIs for seamless data integration and market updates, ensuring accurate and timely information within the app.",
      "Wrote unit and integration tests for Swift and Kotlin apps using Appium and Mocha. Also wrote unit, integration, UI tests for Flutter app using built-in testing tools. Established a robust Gitlab CI/CD pipeline for the Flutter app for automated testing.",
      "Collaborated with the UI/UX team to improve UI/UX for both Swift and migrated React.js apps. Enhanced existing UIs by improving usability, responsiveness, and accessibility."
    ],
    technologies: [
      "React.js", "Inertia.js", "Flutter", "Laravel", "Swift", "Appium", "TypeScript", "CI/CD", "Kotlin", "Docker", "CI/CD"
    ]
  },
  {
    companyName: "Silkron",
    companyAddress: "Penang, Malaysia",
    companyLink: "https://www.silkron.com/",
    positionTitle: "Software Engineer",
    dateRange: "Jan 2021 - Jul 2022",
    description: [
      "Developed and published VendronOP, a Flutter app seamlessly interacting with Vendron Cloud, their in-house product's cloud service. Contributed UI/UX feedback on initial designs, improving user experience and engagement.",
      "Conducted thorough research into Veriff's documentation, designed a seamless business flow for user registration and verification, and developed intuitive UIs. Additionally, created a new business flow for identity checking during purchases to enhance fraud prevention measures.",
      "Analyzed and enhanced API business logic to streamline data processing and reduce resource consumption.",
      "Restructured API architecture to adhere to RESTful principles, promoting better organization, maintainability, and scalability.",
      "Increased QA team efficiency by developing automated UI tests. Simplified testing processes and API understanding through comprehensive documentation."
    ],
    technologies: [
      "Flutter", "PHP", "Yii2", "Veriff"
    ]
  },
  {
    companyName: "B-Three Enterprise",
    companyAddress: "Remote, Freelance",
    positionTitle: "Full-stack Web Developer",
    dateRange: "Apr 2018 - Aug 2018",
    description: [
      "Developed a full-stack clinic management system using React.js and Laravel, saved stakeholders 20% of their monthly expenses compared to subscribing to existing clinic management systems. Also leveraged Redux for state management.",
      "Forked and tailored a scheduler library to meet specific appointment management needs, ensuring adaptability and long-term maintainability.",
      "Integrated Pusher notifications for real-time updates across web and mobile platforms, fostering efficient communication and user engagement.",
      "Built React Native mobile app for seamless appointment management, enhanced through Pusher real-time notifications"
    ],
    technologies: [
      "Laravel", "React.js", "React Native", "TypeScript", "Redux", "Pusher"
    ]
  },
  {
    companyName: "Sunway Idealite",
    companyAddress: "Remote, Freelance",
    positionTitle: "Full-stack Web Developer",
    dateRange: "Jan 2018 - Mar 2018",
    description: [
      "Built a web-based restaurant POS system that helped speed up the ordering process by 40%",
      "Designed and implemented an algorithm to resolve \"promotion\" for the POS",
    ],
    technologies: [
      "Javascript", "JQuery", "PHP", "SQL"
    ]
  }
]