import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-top: 120px;
  padding-left: 124px;
  padding-right: 124px;
  position: relative;
  .character {
    position: absolute;
    left: 0;
    top: 140px;
    object-fit: contain;
    z-index: 0;
  }
  .question-marks {
    position: absolute;
    right: 60px;
    top: 70px;
    object-fit: contain;
    z-index: 1;
  }
  .cloud {
    display: none;
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptopL} {
    padding-left: 40px;
    padding-right: 40px;
    .question-marks {
      top: 100px;
      width: 250px;
    }
    .character {
      left: 0;
      top: 290px;
      width: 700px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.laptop} {
    .character {
      left: -100px;
      top: 405px;
      width: 600px;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    .question-marks {
      right: 10px;
      width: 200px;
      top: 220px;
    }
    .character {
      display: block;
      width: 393px;
      top: 900px;
      left: 0;
      z-index: 1;
    }
    .cloud {
      display: block;
      position: absolute;
      left: 0;
      top: 1050px;
      object-fit: contain;
      z-index: 1;
    }
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    padding-top: 300px;
    .question-marks {
      right: 50%;
      width: 290px;
      top: 440px;
      transform: translateX(50%);
    }
    .character {
      display: block;
      width: 393px;
      top: 1070px;
      left: 0;
      z-index: 1;
    }
    .cloud {
      display: block;
      position: absolute;
      left: 0;
      top: 1220px;
      object-fit: contain;
      z-index: 1;
    }
  }
`

export const Column = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  z-index: 2;
`

export const Row = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    justify-content: center;
  }
`

export const Calculator = styled.div`
  width: 534px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: flex-start;
  align-self: flex-end;
  row-gap: 17px;
  z-index: 2;
  margin-top: 60px;
  position: relative;
  .arrows {
    position: absolute;
    top: 170px;
    right: 20px;
    z-index: 2
  }
  ${({ theme }) => theme.sizes.mediaQueries.tabletL} {
    align-self: center;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    margin-top: 140px;
    width: 345px;
    align-items: center;
    .arrows {
      top: 150px;
    }
  }
`

export const Title = styled.p`
  font-family: BabyDoll;
  font-size: 64px;
  margin-bottom: 110px;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    font-size: 48px;
  }
`

export const Subtitle = styled.p`
  font-family: BabyDoll;
  font-size: 48px;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    font-size: 36px;
  }
`

export const BottomText = styled.p`
  font-family: BabyDoll;
  font-size: 24px;
  line-height: 55px;
`

export const Input = styled.input`
  width: 40%;
  font-size: 48px;
  font-family: BabyDoll;
  border: none;
  text-align: right;
  margin-right: 10px;
  &:focus-visible {
    outline: none;
  }
`

export const Text = styled.p`
  font-size: 48px;
  font-family: BabyDoll;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    flex-direction: column;
  }
`

export const Label = styled.label`
  width: 100%;
  font-family: BabyDoll;
  margin: 10px 20px;
  font-size: 48px;
  display: flex;
  align-items: center;
  z-index: 1;
`

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 534px;
  height: 131px;
  .button-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .button-background-mobile {
    display: none;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    width: 344px;
    height: 130px;
    .button-background {
      display: none;
    }
    .button-background-mobile {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
`

export const Button = styled.button<{ $disabled: boolean }>`
  display: flex;
  position: relative;
  font-size: 42px;
  justify-content: center;
  align-items: center;
  width: 534px;
  height: 77px;
  z-index: 1;
  color: #fff;
  padding: 0;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  .button-background {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
  .button-background-mobile {
    display: none;
  }
  ${({ theme }) => theme.sizes.mediaQueries.tablet} {
    width: 344px;
    .button-background {
      display: none;
    }
    .button-background-mobile {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: -1;
    }
  }
`
