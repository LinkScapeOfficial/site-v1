import { Button, Navbar, Dropdown, Menu } from 'react-daisyui'
import Link from 'next/link'

const Navs = [
  { href: '/team', name: 'Team', passHref: true },
  { href: '/hackathons', name: 'Hackathons', passHref: true },
  {
    href: 'https://workshops.hackclub.com/',
    name: 'Workshops',
    passHref: false
  },
  {
    href: 'https://scrapbook.hackclub.com/',
    name: 'Scrapbook',
    passHref: false
  }
]

const NaviBar = () => {
  return (
    <>
      <div className="flex w-full component-preview p-4 items-center justify-center gap-2 font-sans">
        <Navbar>
          <Navbar.Start>
            <Dropdown>
              <Button color="ghost" tabIndex={0} className="lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </Button>
              <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
                {Navs.map(nav => {
                  return <Dropdown.Item>
                    <Link href={nav.href}>{nav.name}</Link>
                  </Dropdown.Item>
                })}
              </Dropdown.Menu>
            </Dropdown>
            <Link className="btn btn-ghost normal-case text-xl" href="/"><img src="https://cloud-lg4bzew4u-hack-club-bot.vercel.app/02fa-links________1-prefect.png" class="h-10" /></Link>
          </Navbar.Start>
          <Navbar.Center className="hidden lg:flex">
            <Menu horizontal className="p-0">
              {Navs.map(nav => {
                return <Menu.Item>
                  <Link href={nav.href}>{nav.name}</Link>
                </Menu.Item>
              })}
            </Menu>
          </Navbar.Center>
        </Navbar>
      </div>
    </>
  )
}

export default NaviBar
