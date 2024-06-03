import { Wrapper, Column, Title, Description, BototmText } from './Story.style';
import character from '/images/story-img.png';
import cloud from '/images/story-cloud.png';

export const Story = () => {
  return (
    <Wrapper id='story'>
      <img src={character} alt='character' className='character' />
      <img src={cloud} alt='character' className='cloud-img' />
      <Column>
        <Title>Story about...</Title>
        <Description>
          He's the epitome of a degenerate gambler, always pushing the limits, riding the wave of massive wins, and
          braving through the gut-wrenching losses. gmblr is more than a meme (more than a feeling!); it's a movement, a
          rebellion for those who dream big and gamble bigger, promising a wild ride for adventurers seeking to break
          free from the mundane. It's for the risk-takers, the dreamers, the adventurers in the casino space who are
          looking for a coin that matches their untamed spirit.
        </Description>
        <Description>
          Buckle up and join The Gambloooooor on a wild ride into the heart of the crypto gambling industry. Let's not
          just play the odds; let's redefine them. Welcome to the world of gmblr, where every moment is a gamble, and
          every gamble is a moment to seize. It's gonna be messy, it's gonna be nuts, but man, it's gonna be legendary.
          <BototmText>Let the games begin!</BototmText>
        </Description>
      </Column>
    </Wrapper>
  );
};
