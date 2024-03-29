import { IProject } from "../types/interface";

export const projects: IProject[] = [
  {
    id: 1,
    projectName: "MClinic",
    projectDescription: "An adaptable healthcare management solution that empowers users to seamlessly record diverse sets of data. The primary objective of this system is to supplant traditional paper records, facilitating a comprehensive shift towards a fully digitalized information repository. Alongside efficient data storage, it offers an advanced appointment module, enabling practitioners to effectively manage their patients' scheduling.",
    imageUrl: '/images/mclinic.png',
    technologies: ["React.js", "React Native", "Laravel", "TypeScript", "Pusher"],
    gallery: ["/images/cms/1.png", "/images/cms/2.png", "/images/cms/3.png", "/images/cms/4.png", "/images/cms/5.png", "/images/cms/6.png", "/images/cms/7.png"],
  },
  {
    id: 2,
    projectName: "Vapr Identity Verification",
    projectDescription: "An identity authentication system in Vapr. Prior to registering with the system, end-users are required to undergo an identity verification process. Additionally, before making any purchases, end-users must undergo a biometric facial scan.",
    imageUrl: '/images/vapr.png',
    technologies: ["Java", "Flutter", "JSON", "Veriff", "PHP"],
    gallery: ["/images/vapr/1.png", "/images/vapr/2.png", "/images/vapr/3.png", "/images/vapr/4.png", "/images/vapr/5.png"]
  },
  {
    id: 3,
    projectName: "Vendron OP",
    projectDescription: "A mobile application to facilitate user communication within Vendron Cloud ecosystem, which enables access and key information in real time",
    imageUrl: '/images/vop.png',
    technologies: ["Flutter", "PHP", "Socket.io"],
    gallery: ["/images/vop/1.png", "/images/vop/2.png", "/images/vop/3.png", "/images/vop/4.png", "/images/vop/5.png", "/images/vop/6.png"]
  },
  {
    id: 4,
    projectName: "BDO Parley & Stock Management",
    projectDescription: "This is a personal side project that I created in my free time. It is designed to calculate and manage complex barter activities in a game called Black Desert Online. The tool assists players in managing and calculating more efficiently, reducing the amount of time they need to spend.",
    imageUrl: '/images/bdo.png',
    technologies: ["React.js", "ChakraUI", "gh-pages"],
    external: [
      {
        isGithub: true,
        link: 'https://github.com/evanlaaaa/react-bdo-barter'
      }
    ]
  },
  {
    id: 5,
    projectName: "Reverse Engineer MT-Framework *.ipr file",
    projectDescription: "Requested by one of the member from the community I participated with, I enabled him to import 3D models based on asset placement (*.ipr) from Capcom's in-house game engine, MT-Framework. Using 010 Editor, I analyzed the binary file structure and extracted the relevant data. I then wrote custom import functions in Python to convert the extracted data into a format compatible with Blender's API.",
    imageUrl: '/images/ipr.png',
    technologies: ["Python", "010 Editor", "Blender"],
    gallery: ["/images/ipr/1.png", "/images/ipr/2.png"],
    external: [
      {
        isGithub: true,
        link: 'https://github.com/evanlaaaa/MT-Framework-IPR'
      }
    ]
  },
  {
    id: 6,
    projectName: "TMDB",
    projectDescription: "TMDB App made with Flutter. Able to view movies in Grid View and Page View. Also supported search and filtering, and view trailer",
    imageUrl: '/images/tmdb.png',
    technologies: ["Flutter", "API Integration"],
    gallery: [
      "/images/tmdb/1.png", 
      "/images/tmdb/2.png",
      "/images/tmdb/3.png",
      "/images/tmdb/4.png",
      "/images/tmdb/5.png",
      "/images/tmdb/6.png",
    ],
    external: [
      {
        isGithub: true,
        link: 'https://github.com/evanlaaaa/tmdb'
      }
    ]
  },
  {
    id: 7,
    projectName: "Flutter Interactive Candlestick Chart",
    projectDescription: "Thwarted by the limitations of existing Flutter charting packages, I embarked on a quest to build a better candlestick chart. Inspired by TradingView's dynamic transformations, I crafted a custom solution that empowers you to zoom in on minute movements or out to grasp the big picture. I dove headfirst into understanding how widgets tick, building my own custom painter to handle the intricacies of candlestick rendering. Then, I tackled the intricate dance of gesture events, ensuring smooth panning and zooming at any scale. Included overlay popular indicators like Bollinger %B, CCI, and RSI to uncover hidden trends and confirm trading signals. ",
    imageUrl: '/images/csc.png',
    technologies: ["Flutter", "Computer Graphics Math"],
    gallery: [
      "/images/cs/1.gif", 
      "/images/cs/2.gif",
      "/images/cs/3.gif",
      "/images/cs/4.gif",
      "/images/cs/5.gif",
      "/images/cs/6.png"
    ],
  },
]