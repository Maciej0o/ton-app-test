import { Ecosystem } from '../Ecosystem/Ecosystem';
import { Home } from '../Home/Home';
import { NavBar } from '../NavBar/NavBar';
import { Story } from '../Story/Story';
import { Wrapper } from './Layout.style';
import clouds from '/images/clouds.png';
import cloudsMobile from '/images/cloud-mobile.png';

export const Layout = () => {
  return (
    <div className='main'>
      <Wrapper>
        <img src={clouds} alt='' className='clouds' />
        <img src={cloudsMobile} alt='' className='clouds-mobile' />
        <NavBar />
        <Home />
        <Story />
        <Ecosystem />
      </Wrapper>
    </div>
  );
};
