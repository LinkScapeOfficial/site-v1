import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { Box, Link } from 'theme-ui'
import theme from '@hackclub/theme'
import NextLink from 'next/link'

const rgbaBgColor = (props, opacity) =>
  `rgba(
    ${props.bgColor[0]},
    ${props.bgColor[1]},
    ${props.bgColor[2]},
    ${opacity}
  )`

const fixed = props =>
  (props.scrolled || props.toggled || props.fixed) &&
  `
    background-color: ${rgbaBgColor(props, 0.96875)};
    border-bottom: 1px solid rgba(48, 48, 48, 0.125);
    @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
      background-color: ${props.transparent
        ? 'transparent'
        : rgbaBgColor(props, 0.75)};
      -webkit-backdrop-filter: saturate(180%) blur(20px);
      backdrop-filter: saturate(180%) blur(20px);
    }
  `

const Root = styled(Box)`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  ${fixed};
  @media print {
    display: none;
  }
`

export const Content = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1024px;
  margin: auto;
  position: relative;
  z-index: 2;
  padding-left: ${theme.space[3]}px;
  @media (min-width: ${theme.breakpoints[2]}em) {
    padding: 0 ${theme.space[4]}px;
  }
`

const hoverColor = name =>
  ({
    white: 'smoke',
    smoke: 'muted',
    muted: 'slate',
    slate: 'black',
    black: 'slate',
    primary: 'error'
  }[name] || 'black')

const slide = `
  from {
    transform: translateY(-25%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const layout = props =>
  props.isMobile
    ? `
        display: ${props.toggled ? 'flex' : 'none'};
        flex-direction: column;
        overflow-y: auto;
        text-align: left;
        height: 100vh;
        @media (prefers-reduced-motion: no-preference) {
          animation: ${slide} 0.25s ease-in;
        }
        a {
          color: ${theme.colors[props.dark ? 'white' : 'black']} !important;
          margin: 0 auto;
          height: 64px;
          font-weight: bold;
          font-size: ${theme.fontSizes[2]}px;
          width: 100%;
          max-width: 18rem;
          &:not(:last-child) {
            border-bottom: 1px solid rgba(48, 48, 48, 0.125);
          }
          @media screen and (max-width: 22em) {
            max-width: 16rem;
          }
        }
      `
    : `
        @media (min-width: 56em) {
          display: flex;
          justify-content: flex-end;
        }
        a {
          font-size: ${theme.fontSizes[1]}px;
          text-transform: uppercase;
          &:hover {
            color: ${theme.colors[hoverColor(props.color)]};
          }
        }
      `

const NavBar = styled(Box)`
  ${layout};
  a {
    margin-left: ${theme.space[3]}px;
    padding: ${theme.space[3]}px;
    text-decoration: none;
    @media (min-width: 56em) {
      color: ${props => theme.colors[props.color] || props.color};
    }
  }
`

const Navigation = props => (
  <NavBar role="navigation" {...props}>
    <NextLink href="/clubs" passHref>
      <Link>Clubs</Link>
    </NextLink>
    <NextLink href="/bank" passHref>
      <Link>Bank</Link>
    </NextLink>
    <NextLink href="/hackathons" passHref>
      <Link>Hackathons</Link>
    </NextLink>
    <NextLink href="/slack" passHref>
      <Link>Slack</Link>
    </NextLink>
    <Link href="https://scrapbook.hackclub.com/">Scrapbook</Link>
    <Link href="https://workshops.hackclub.com/">Workshops</Link>
  </NavBar>
)

const Navs = [
  {href: "/team", name:"Team", passHref: true},
  {href: "/hackathons", name:"Hackathons", passHref: true},
  {href: "https://workshops.hackclub.com/", name:"Workshops" , passHref: false},
  {href: "https://scrapbook.hackclub.com/", name: "Scrapbook", passHref: false}
]

const ToggleContainer = styled(Box)`
  align-items: center;
  justify-content: center;
  min-width: 64px;
  min-height: 44px;
  cursor: pointer;
  user-select: none;
  margin-left: auto;
  @media (min-width: 56em) {
    display: none;
  }
`

function Header({ unfixed, color, bgColor, dark, fixed, ...props }) {
  const [scrolled, setScrolled] = useState(false)
  const [toggled, setToggled] = useState(false)
  const [mobile, setMobile] = useState(false)

  const onScroll = () => {
    const newState = window.scrollY >= 16

    setScrolled(newState)
  }

  const handleToggleMenu = () => {
    setToggled(t => !t)
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (!unfixed) {
        window.addEventListener('scroll', onScroll)
      }

      const mobileQuery = window.matchMedia('(max-width: 48em)')
      mobileQuery.addEventListener('change', () => {
        setMobile(true)
        setToggled(false)
      })
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [unfixed])

  const baseColor = dark
    ? color || 'white'
    : color === 'white' && scrolled
    ? 'black'
    : color
  const toggleColor = dark
    ? color || 'snow'
    : toggled || (color === 'white' && scrolled)
    ? 'slate'
    : color

  return (
    <Root
      {...props}
      fixed={fixed}
      scrolled={scrolled}
      toggled={toggled}
      dark={dark}
      bgColor={bgColor || (dark ? [32, 34, 36] : [255, 255, 255])}
      as="header"
    >
      <Content>
        <img src="https://cloud-btis5corq-hack-club-bot.vercel.app/02fa-_________links________1-fullimg.png" width="50" />
        <Navigation
          as="nav"
          aria-hidden={!!mobile}
          color={baseColor}
          dark={dark}
        />
      </Content>
      <Navigation
        as="nav"
        aria-hidden={!mobile}
        isMobile
        toggled={toggled}
        color={baseColor}
        dark={dark}
      />
      {toggled && <Box css="position: fixed; top: 0; right: 0; bottom: 0; left: 0; z-index: 999;" />}
    </Root>
  )
}

Header.defaultProps = {
  color: 'white'
}

export default Header
