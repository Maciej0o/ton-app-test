import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
  .clouds {
    position: absolute;
    z-index: 1;
    object-fit: cover;
    height: 100%;
    object-position: top;
  }
  .clouds-mobile {
    display: none;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    .clouds {
      display: none;
    }
    .clouds-mobile {
      display: block;
      position: absolute;
      z-index: 1;
      object-fit: cover;
      width: 100%;
      height: 100%;
      object-position: 0 -10px;
    }
  }
`