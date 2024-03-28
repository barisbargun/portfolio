export const pageInfo: IPageInfo = {
  creatorName: "Barış Olgun",
  logo: "/assets/logo.avif"
};


type MenuLink = "main" | "about" | "experience" | "contact";
export const menuLinks: Record<MenuLink, IMenuLink> = {
  main: { name: "Homepage", link: "#main" },
  about: { name: "About", link: "#about" },
  experience: { name: "Experience", link: "#experience" },
  contact: { name: "Contact", link: "#contact" },
};


/* Page Intros, Headers, Descriptions  */
export const pageTexts = {
  main: {
    head: "FULL STACK WEB DEVELOPER",
    desc: "Crafting captivating and innovative web applications is my forte."
  } as IPageText,
  about: {
    intro: "Introduction",
    head: "About me.",
    desc: "With a keen understanding of the full stack, I am capable of developing end-to-end web applications that deliver a seamless user experience. My commitment to staying updated with the latest industry trends ensures that I can leverage cutting-edge technologies to create modern and efficient web solutions."
  } as IPageText,
  experience: {
    intro: "The progress I've made up to this point",
    head: "Work Experience."
  } as IPageText,
  projects: {
    intro: "Collections of my artistic endeavors",
    head: "Projects.",
    desc: "Behold a showcase of my prowess in web development, a testament to my rich experience manifested in real-world examples. Each project is meticulously crafted, reflecting a harmonious blend of skill and creativity. Explore the intricacies of my work through the accompanying Code Repository links and immersive live demos, where every line of code breathes life into a digital masterpiece."
  } as IPageText,
  contact: {
    intro: "Get In Touch",
    head: "Contact."
  } as IPageText,
  credit: {
    intro: "Explore models",
    head: "Credit."
  } as IPageText
}


/* About Page  */
export const services: IIcon[] = [
  {
    name: "Web Developer",
    icon: "/assets/serviceIcons/web.avif",
  },
  {
    name: "Javascript Developer",
    icon: "/assets/serviceIcons/creator.avif",
  },
  {
    name: "React js Developer",
    icon: "/assets/serviceIcons/mobile.avif",
  },
  {
    name: "Node js Developer",
    icon: "/assets/serviceIcons/backend.avif",
  },
];

export const quote = "A web developer, weaving the digital fabric, sculpts user experiences and shapes the digital future with innovative solutions that transcend the boundaries of the web."

/* Experience Page  */
export const experiences: IExperience[] = [
  {
    title: "Software intern",
    company_name: "Regex telecommunication",
    icon: "/assets/experiencesIcons/gift.svg",
    date: "September 2020 - July 2021",
    points: [
      "In the 11th grade, my internship at Regex Telecommunications began.",
      "Initially, I worked on web-based projects using HTML, CSS, JS, and Angular.",
      "Later on, I expanded my skills to include C# and SQL.",
      "Through continuous self-improvement, I crafted aesthetically pleasing designs and developed functional programs.",
    ],
  },
  {
    title: "Next?",
    company_name: "Care to collaborate?",
    icon: "/assets/experiencesIcons/questionMark.svg",
    date: "",
    points: [
      "I possess expertise in developing web applications using React.js and Next.js, with a focus on creating visually appealing websites.",
      "I excel in crafting MERN applications, utilizing Node.js and Express.js for robust backend development.",
      "Overall, I am well-versed in both front-end and back-end technologies, ensuring comprehensive and effective web development.",
    ],
  }
];


/* Project Page  */
export const projects: IProject[] = [
  {
    name: "Social Media App",
    description:
      "A well-founded platform, this social media app empowers users to share posts, express appreciation through likes, and craft their own digital realms.",
    tags: ["react", "appwrite", "tailwindcss"],
    image: "/assets/screenshoots/snapgram.avif",
    project_link: "https://baris-snapgram-app.netlify.app"
  },
  {
    name: "Prompt Share App",
    description:
      "Powered by Next.js, Promptopia enables users to effortlessly share, edit, and delete their prompts. Authenticated via Google API for a secure experience.",
    tags: ["react", "nextjs", "mongodb"],
    image: "/assets/screenshoots/promptopia.avif",
    project_link: "https://baris-promptopia-app.vercel.app"
  },
  {
    name: "Car Rental App",
    description:
      "Client-side powered by ReactJS, backend by ExpressJS. The car rental app includes a content management system for seamless customization.",
    tags: ["react", "expressjs", "mongodb"],
    image: "/assets/screenshoots/car-rent.avif",
    project_link: "https://barisolgun-car-rent.netlify.app/"
  },
  {
    name: "Personal Portfolio",
    description:
      "Utilizing the robust combination of Next.js and Tailwind CSS, this personal portfolio showcases an array of meticulously crafted services and projects.",
    tags: ["react", "nextjs", "tailwindcss"],
    image: "/assets/screenshoots/portfolio2.avif",
    project_link: "https://baris-portfolio2-app.vercel.app/"
  },
];


/* Credits Page  */
export const credits: string[] = [
    "\"Stylized planet\" (https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70) by cmzw (https://sketchfab.com/cmzw) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)"
]
