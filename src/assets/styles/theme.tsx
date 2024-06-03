import { IMediaQueries } from './styled';

const BREAKPOINTS: IMediaQueries = {
  mobile: '@media only screen and (max-width: 411px)',
  mobileL: '@media only screen and (max-width: 479px)',
  tablet: '@media only screen and (max-width: 768px)',
  tabletL: '@media only screen and (max-width: 992px)',
  laptop: '@media only screen and (max-width: 1200px)',
  laptopL: '@media only screen and (max-width: 1400px)',
  desktopS: '@media only screen and (max-width: 1539px)',
  desktop: '@media only screen and (max-width: 1919px)',
};

export const theme = {
  colors: {
    background: '#ffffff',
  },
  sizes: {
    mediaQueries: BREAKPOINTS,
  },
};
