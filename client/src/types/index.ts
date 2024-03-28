interface IPageInfo {
  creatorName: string;
  logo:string;
}

/* About Page Icons, Nav Logo */
interface IIcon {
  name: string;
  icon: string;
}


/* Page Intros, Headers, Descriptions  */
interface IPageText {
  intro?: string;
  head: string;
  desc?: string;
}


/* Main Page */
interface IMenuLink {
  name: string;
  link: string;
}


/* Experience Page  */
interface IExperience {
  title: string;
  company_name: string;
  icon: string;
  date: string;
  points: string[];
}


/* Project Page  */
interface IProject {
  name: string;
  description:string;
  tags: string[]
  image: string;
  project_link:string;
}

