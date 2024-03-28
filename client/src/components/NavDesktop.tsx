import { menuLinks } from "@/constants";
import { MenuCreatorName } from ".";

const NavDesktop = () => {
  return (
    <nav className="pageWidth items-center justify-between gap-4  max-lg:hidden">
      <MenuCreatorName />
      <ul className="flex-center justify-between gap-10">
        {Object.values(menuLinks)
          .slice(1)
          .map((v) => (
            <li key={v.name}>
              <a
                className="font-source font-semibold uppercase text-sm opacity-60 transition-opacity hover:opacity-100"
                href={v.link}
              >
                {v.name}
              </a>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default NavDesktop;
