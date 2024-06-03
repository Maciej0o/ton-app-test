import 'styled-components'

export interface IMediaQueries {
  mobile?: string
  mobileL?: string
  tablet?: string
  tabletL?: string
  laptop?: string
  laptopL?: string
  desktopS?: string
  desktop?: string
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string,
    }
  }
}

