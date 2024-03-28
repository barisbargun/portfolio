import { NavDesktop, NavMobile } from ".";

const Navbar = () => {

  return (
    <header className='flex-center fixed left-0 top-0 z-50 h-12 w-full bg-background/40 shadow-[0_1px_1px_theme("colors.slate.700")] backdrop-blur-[2px] lg:h-16'>
      {/** For Desktop */}
      <NavDesktop />

      {/** For Mobile */}
      <NavMobile />
    </header>
  )
}

export default Navbar