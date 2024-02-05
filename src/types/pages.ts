interface INavLinks {
  id: string;
  title: string;
}

interface IPageTexts {
  about: IPageText;
  experience: IPageText;
  projects: IPageText;
  contact: IPageText;
  credit: IPageText;
}

interface IIcon {
  name: string;
  icon: string;
}

interface IExperience {
  title: string;
  company_name: string;
  icon: string;
  date: string;
  points: string[];
}

interface IProject {
  name: string;
  description:string;
  tags: string[]
  image: string;
  source_code_link:string;
  project_link:string;
}

