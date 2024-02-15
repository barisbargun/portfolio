import useWindowScroll from "@/hooks/useWindowScroll";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../components/ui/dropdown-menu";
import { navLinks } from "../constants";

const Navbar = () => {

  const height = useWindowScroll();

  const moveTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <header className={`fixed h-fit ${height! >= 500 && "bg-mainColor"} w-screen py-3 flex-center z-20`}>
      <div className="flex-between max-w-[1024px] w-[90%]">
        {/* LOGO */}
        <div className="flex-center gap-3 cursor-pointer" onClick={moveTop}>
          <img
            src="/assets/logo.svg"
            width={57}
            height={57}
            alt="logo"
            loading="eager"
          />
          <p className="f15-bold tracking-[5px] uppercase">Barış Olgun</p>
        </div>

        {/* NAVIGATION DESKTOP*/}
        <nav className="flex-between gap-5 max-md:hidden">
          {navLinks.map(v =>
            <a key={v.id} href={`#${v.id}`} className="navLinks"
            >{v.title}</a>
          )}
        </nav>
        {/* NAVIGATION MOBILE*/}
        <nav className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <img src='/assets/menu.svg' alt="menu" loading="eager" width={16} height={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {navLinks.map(v =>
                <DropdownMenuItem className='cursor-pointer' key={v.title}>
                  <a href={`#${v.id}`} className="w-full h-full navLinks">{v.title}</a>
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </div>
    </header>
  )
}

export default Navbar