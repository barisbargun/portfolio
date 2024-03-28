import { menuLinks, pageInfo } from "@/constants";

export const MenuCreatorName = () => (
  <a href={menuLinks.main.link}>
    <h2 className="f-creator ">
      {pageInfo.creatorName}
    </h2>
  </a>
);

export const HeroButtons = () => {
  return (
    <div className="mt-6 flex flex-wrap items-center gap-4">
      <a href="#projects" className="button-white">
        Projects
      </a>
      <a href={menuLinks.contact.link} className="button-indigo">
        Contact Me
      </a>
    </div>
  );
};