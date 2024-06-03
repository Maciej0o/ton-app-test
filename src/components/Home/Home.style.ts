import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-top: 180px;
  padding-bottom: 16px;
  padding-right: 124px;
  position: relative;
  .character {
    position: absolute;
    left: 0;
    top: -50px;
    object-fit: contain;
    z-index: 0;
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptopL} {
    padding-right: 40px;
    .character {
      width: 600px;
      top: 100px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptop} {
    .character {
      width: 500px;
      top: 135px;
      left: 60px;
    }
  }
  @media only screen and (max-width: 1060px) {
    .character {
      width: 400px;
      top: 230px;
      left: 0;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    padding: 104px 20px 16px;
    justify-content: center;
    .character {
      width: 276px;
      height: auto;
      top: 630px;
      transform: rotate(-12deg);
    }
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  row-gap: 32px;
  max-width: 504px;
  margin-right: 48px;
  z-index: 2;
  ${({ theme }) => theme.sizes.mediaQueries.laptopL} {
    margin-right: 0;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    max-width: 360px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    max-width: 345px;
  }
`

export const Title = styled.p`
  font-family: BabyDoll;
  font-size: 64px;
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    font-size: 48px;
    line-height: 42px;
  }
`

export const Description = styled.p`
  font-size: 18px;
`

export const LeftRow = styled.div`
  display: flex;
  column-gap: 10px;
  .dex-logo {
    height: 30px;
  }
  .dextools-logo {
    height: 28px;
  }
`

export const RightRow = styled.div`
  display: flex;
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    margin-top: 40px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    margin-top: 68px;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    flex-direction: column;
    align-items: flex-end;
  }
`

export const Button = styled.button<{ $white: boolean}>`
  font-size: 24px;
  width: 171px;
  height: 44px;
  position: relative;
  z-index: 1;
  color: ${({ $white }) => $white ? '#000' : '#fff'};
  margin: ${({ $white }) => $white ? '0 20px 0 16px' : '0'};
  cursor: not-allowed;
  display: flex;
  align-items: center;
  justify-content: center;
  .bgc {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .arrow {
    width: 57px;
    height: 63px;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: -1;
    transform: rotate(-45deg);
  }
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    margin-right: 0;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    width: 164px;
  }
`

export const SocialBtn = styled.a`
  z-index: 1;
  padding: 0;
  margin-left: 12px;
  cursor: pointer;
`
