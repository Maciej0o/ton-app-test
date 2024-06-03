import { useState } from 'react';
import {
  Wrapper,
  NavList,
  ListElement,
  Link,
  Button,
  LogoWrapper,
  BtnMenu,
  Menu,
  RightColumn,
  SocialRow,
  SocialLink,
} from './NavBar.style';
import logo from '/images/gamblr-logo.png';
import linkBgc from '/images/nav-bgc.svg';
import linkBgcMobile from '/images/mobile-menu-link.svg';
import buyBgc from '/images/buy-bgc.svg';
import buyCharacter from '/images/buy-character.png';
import buyArrow from '/images/buy-arrow.svg';
import open from '/images/menu-open.svg';
import close from '/images/menu-close.svg';
import xIcon from '/images/x-icon.svg';
import telegramIcon from '/images/telegram-icon.svg';
import character1 from '/images/mobile-character1.png';
import character2 from '/images/mobile-character2.png';

export const NavBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    {
      label: 'test5',
      href: '#home',
      external: false,
    },
    {
      label: 'test4',
      href: '#story',
      external: false,
    },
    {
      label: 'test3',
      href: '#ecosystem',
      external: false,
    },
    {
      label: 'test12',
      href: '#tokenomics',
      external: false,
    },
    {
      label: 'test1',
      href: '#participate',
      external: false,
    },
  ];

  return (
    <>
      <Wrapper>
        <LogoWrapper>
          <img src={logo} alt='logo' className='logo' />
          <BtnMenu onClick={() => setOpenMenu(!openMenu)}>
            <img src={openMenu ? close : open} alt='logo' className='' />
          </BtnMenu>
        </LogoWrapper>
        <RightColumn>
          <NavList>
            {links.map(({ label, href, external }) => (
              <ListElement key={label}>
                <Link href={href} target={external ? '_blank' : '_self'}>
                  {label}
                  <img src={linkBgc} alt='' className='bgc' />
                </Link>
              </ListElement>
            ))}
          </NavList>
          <Button href='#buy' onClick={() => setOpenMenu(false)}>
            Buy Now <img src={buyBgc} alt='' className='bgc' />
            <img src={buyCharacter} alt='' className='character' />
            <img src={buyArrow} alt='' className='arrow' />
          </Button>
        </RightColumn>
        {openMenu && (
          <Menu>
            {links.map(({ label, href, external }) => (
              <ListElement key={label} onClick={() => setOpenMenu(false)}>
                <Link href={href} target={external ? '_blank' : '_self'}>
                  {label}
                  <img src={linkBgcMobile} alt='' className='bgc' />
                </Link>
              </ListElement>
            ))}
            <SocialRow>
              <SocialLink href='https://twitter.com/Gambloooooor' target='_blank'>
                <img src={xIcon} alt='' />
              </SocialLink>
              <SocialLink href='https://t.me/Gambloooooor' target='_blank'>
                <img src={telegramIcon} alt='' />
              </SocialLink>
            </SocialRow>
            <img src={character1} alt='' className='character1' />
            <img src={character2} alt='' className='character2' />
          </Menu>
        )}
      </Wrapper>
    </>
  );
};
