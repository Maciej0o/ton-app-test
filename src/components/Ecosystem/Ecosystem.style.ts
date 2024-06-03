import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 330px;
  padding-bottom: 340px;
  padding-left: 124px;
  padding-right: 124px;
  position: relative;
  .character {
    position: absolute;
    right: 0;
    top: 110px;
    object-fit: contain;
    z-index: 1;
  }
  .balloon {
    position: absolute;
    left: 0;
    top: 40px;
    object-fit: contain;
    z-index: 1;
    width: 400px;
  }
  .coin {
    position: absolute;
    left: 340px;
    bottom: 130px;
    object-fit: contain;
    z-index: 0;
    width: 250px;
  }
  .pad {
    position: absolute;
    right: 0;
    bottom: 140px;
    object-fit: contain;
    z-index: 1;
    width: 300px;
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptopL} {
    padding-left: 40px;
    padding-right: 40px;
    .balloon {
      top: 0px;
    }
    .pad {
      bottom: 100px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    padding-left: 40px;
    padding-right: 40px;
    .character {
      top: 70px;
    }
    .balloon {
      width: 400px;
    }
    .pad {
      width: 300px;
    }
    .coin {
      width: 200px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 300px;
    padding-bottom: 130px;
    .character {
      width: 160px;
      top: calc(100% - 140px);
    }
    .balloon {
      width: 160px;
      top: calc(100% - 210px);
    }
    .pad {
      width: 140px;
      bottom: 90px;
    }
    .coin {
      width: 150px;
      top: 250px;
      left: calc(50% + 80px);
    }
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 2;
`

export const Title = styled.p`
  font-family: BabyDoll;
  font-size: 64px;
  margin-bottom: 32px;
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    font-size: 48px;
  }
`

export const Description = styled.p`
  font-size: 33px;
  margin-bottom: 66px;
  text-align: center;
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    font-size: 18px;
  }
`
