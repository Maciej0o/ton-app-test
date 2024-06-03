import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 290px;
  padding-bottom: 16px;
  padding-left: 124px;
  position: relative;
  .character {
    position: absolute;
    right: 0;
    top: -200px;
    object-fit: contain;
    z-index: 0;
  }
  .cloud-img {
    position: absolute;
    right: 0;
    bottom: -180px;
    object-fit: contain;
    z-index: 1;
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptopL} {
    padding-left: 40px;
    .character {
      right: -75px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptop} {
    margin-top: 200px;
    .character {
      width: 650px;
      top: -40px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    .character {
      width: 400px;
      top: 10px;
    }
    .cloud-img {
      position: absolute;
      right: 0;
      bottom: 15px;
      object-fit: contain;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 40px;
    padding-bottom: 100px;
    z-index: none;
    justify-content: center;
    .character {
      width: 350px;
      top: 940px;
      right: 50%;
      transform: translateX(50%);
      z-index: 0;
    }
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  max-width: 549px;
  z-index: 2;
  ${({ theme }) => theme.sizes.mediaQueries.laptop} {
    max-width: 420px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    max-width: 345px;
    z-index: 3;
  }
`

export const Title = styled.p`
  font-family: BabyDoll;
  font-size: 64px;
  margin-bottom: 32px;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    font-size: 48px;
  }
`

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 66px;
  position: relative;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    margin-bottom: 42px;
    line-height: 29px;
  }
`

export const BototmText = styled.span`
  font-size: 84px;
  font-family: BabyDoll;
  white-space: nowrap;
  position: absolute;
  bottom: 0;
  transform: translateY(100%) rotate(-3deg);
  left: 89px;
  ${({ theme }) => theme.sizes.mediaQueries.laptop} {
    font-size: 50px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    font-size: 52px;
    left: 0;
    white-space: wrap;
    line-height: 55px;
  }
`
