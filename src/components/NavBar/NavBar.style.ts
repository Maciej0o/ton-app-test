import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 32px;
  padding-bottom: 16px;
  position: relative;
  z-index: 3;
  padding-left: 124px;
  padding-right: 124px;
  .logo {
    width: 160px;
    margin-right: 20px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptopL} {
    padding-left: 40px;
    padding-right: 40px;
    .logo {
      width: 140px;
    }
  }
  @media only screen and (max-width: 1140px) {
    padding-top: 20px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.mobileL} {
    padding-left: 20px;
    padding-right: 20px;
    .logo {
      width: 120px;
    }
  }
`

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const RightColumn = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

export const Menu = styled.div`
  position: absolute;
  display: none;
  top: 185px;
  left: 0;
  width: 100vw;
  min-height: calc(100vh - 185px); 
  flex-direction: column;
  background-color: #fff;
  justify-content: start;
  align-items: center;
  z-index: 10;
  row-gap: 12px;
  .character1 {
    position: absolute;
    bottom: 0;
    left: 0;
  }
  .character2 {
    position: absolute;
    bottom: 0;
    right: 0;
  }
  @media only screen and (max-width: 1140px) {
    display: flex;
  }
`

export const BtnMenu = styled.button`
  padding: 0;
  position: absolute;
  top: 100%;
  display: none;
  @media only screen and (max-width: 1140px) {
    display: block;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  column-gap: 12px;
  @media only screen and (max-width: 1140px) {
    display: none;
  }
`

export const ListElement = styled.li`
  display: flex;
  justify-content: start;
  align-items: center;
`

export const SocialRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 25px;
  margin-top: 20px;
`

export const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

export const Link = styled.a`
  width: 134px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-family: BabyDoll;
  position: relative;
  z-index: 1;
  .bgc {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  @media only screen and (max-width: 1140px) {
    width: 277px;
  }
`

export const Button = styled.a`
  width: 173px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  position: relative;
  font-family: BabyDoll;
  color: #fff;
  z-index: 2;
  margin-left: 24px;
  .bgc {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .character {
    width: 168px;
    height: 168px;
    position: absolute;
    top: calc(100% - 10px);
    left: 50%;
    transform: translateX(-50%);
    z-index: -2;
  }
  .arrow {
    width: 48px;
    height: 55px;
    position: absolute;
    top: 100%;
    left: 0;
    transform: translateX(-50%);
    z-index: -2;
  }
  @media only screen and (max-width: 1140px) {
    .character {
      width: 131px;
      height: 131px;
    }
  }
`
