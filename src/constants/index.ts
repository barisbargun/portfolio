const navLinks: INavLinks[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const pageTexts: IPageTexts = {
  about: {
    intro: "Introduction",
    head: "About me.",
    desc: "With a keen understanding of the full stack, I am capable of developing end-to-end web applications that deliver a seamless user experience. My commitment to staying updated with the latest industry trends ensures that I can leverage cutting-edge technologies to create modern and efficient web solutions."
  },
  experience: {
    intro: "The progress I've made up to this point",
    head: "Work Experience."
  },
  projects: {
    intro: "Collections of my artistic endeavors",
    head: "Projects.",
    desc: "Behold a showcase of my prowess in web development, a testament to my rich experience manifested in real-world examples. Each project is meticulously crafted, reflecting a harmonious blend of skill and creativity. Explore the intricacies of my work through the accompanying Code Repository links and immersive live demos, where every line of code breathes life into a digital masterpiece."
  },
  contact: {
    intro: "Get In Touch",
    head: "Contact."
  },
  credit: {
    intro: "Explore models",
    head: "Credit."
  }
}

const services: IIcon[] = [
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

const experiences: IExperience[] = [
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

const projects: IProject[] = [
  {
    name: "Social Media App",
    description:
      "A well-founded platform, this social media app empowers users to share posts, express appreciation through likes, and craft their own digital realms.",
    tags: ["react", "appwrite", "tailwindcss"],
    image: "/assets/screenshoots/snapgram-screenshot.jpeg",
    source_code_link: "https://github.com/barisbargun/Snapgram",
    project_link: "https://baris-snapgram-app.netlify.app"
  },
  {
    name: "Prompt Share App",
    description:
      "Powered by Next.js, Promptopia enables users to effortlessly share, edit, and delete their prompts. Authenticated via Google API for a secure experience.",
    tags: ["react", "nextjs", "mongodb"],
    image: "/assets/screenshoots/promptopia-screenshot.jpeg",
    source_code_link: "https://github.com/barisbargun/Promptopia",
    project_link: "https://baris-promptopia-app.vercel.app"
  },
];

const credits: string[] = [
  "\"Gaming Desktop PC\" (https://sketchfab.com/3d-models/gaming-desktop-pc-d1d8282c9916438091f11aeb28787b66) by Yolala1232 (https://sketchfab.com/Yolala1232) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)",
  "\"Stylized planet\" (https://sketchfab.com/3d-models/stylized-planet-789725db86f547fc9163b00f302c3e70) by cmzw (https://sketchfab.com/cmzw) licensed under CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)"
]

export { navLinks, pageTexts, services, experiences, projects, credits };
