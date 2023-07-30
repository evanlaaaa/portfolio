import { IJob } from "../model/interfaces";

export const experiences: IJob[] = [
  {
    companyName: "V6 Technology",
    companyAddress: "Bukit Mertajam, Malaysia",
    companyLink: "https://www.v6technology.net/",
    positionTitle: "Software Engineer",
    dateRange: "Aug 2022 - Present",
    description: [
      "Migrated existing Laravel Blade views to React.js using Inertia.js, as well as revamped the UI/UX, providing a smoother and more interactive user experience",
      "Established CI pipelines using GitLab CI to automate testing for Flutter app",
      "Developed interactive Kline charts from scratch in Flutter to meet client’s requirement",
      "Wrote automated unit and integration test using Appium and Mocha for their existed Kotlin and Swift app",
      "Collaborate with the UI/UX team to translate design wireframes into high-quality UIs and improve the UI/UX of the existing Swift app with UIKit",
      "Building mobile apps using Flutter that interact with client's new extended fintech services"
    ],
    technologies: [
      "React.js", "Inertia.js", "Flutter", "Laravel", "Swift", "UIKit", "Appium", "TypeScript", "CI/CD", "Kotlin", "PHP", "Dart"
    ]
  },
  {
    companyName: "Silkron",
    companyAddress: "Penang, Malaysia",
    companyLink: "https://www.silkron.com/",
    positionTitle: "Software Engineer",
    dateRange: "Jan 2021 - Jul 2022",
    description: [
      "Designing and building a mobile application to facilitate user communication within Vendron Cloud ecosystem",
      "Worked on integration with third-party identity verification services, built and designed new user registration flow",
      "Wrote integration tests for automated UI testing",
      "Built graphs using fl_chart library for visualizing customers’ sales metrics"
    ],
    technologies: [
      "Java", "Flutter", "Veriff", "PHP"
    ]
  },
  {
    companyName: "B-Three Enterprise",
    companyAddress: "Remote, Freelance",
    positionTitle: "Full-stack Web Developer",
    dateRange: "Apr 2018 - Aug 2018",
    description: [
      "Built clinic management system which helped clients save 10% of their monthly expenses",
      "Worked on integration with third-party notification service",
      "Built a mobile application to facilitate internal user’s communication with Appointment module",
    ],
    technologies: [
      "Javascript", "JQuery", "PHP", "Pusher", "SQL"
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