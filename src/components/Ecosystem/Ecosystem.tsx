import { Wrapper, Column, Title, Description } from './Ecosystem.style';
import character from '/images/ecosystem-character.png';
import pad1 from '/images/ecosystem-pad1.png';

export const Ecosystem = () => {
  return (
    <Wrapper id='ecosystem'>
      <img src={character} alt='character' className='character' />
      <img src={pad1} alt='character' className='pad' />
      <Column>
        <Title>Title2</Title>
        <Description>
          <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum necessitatibus commodi totam ad, unde accusantium! Cupiditate magni quisquam laborum earum dolorum fugit repellat quo, esse molestias? Dolor aperiam odit dolorem!
          Ipsa, perspiciatis tempore. Expedita quisquam optio porro possimus voluptatum labore vel velit odit necessitatibus nostrum ducimus inventore temporibus vero, consequuntur repudiandae eveniet rem numquam cum recusandae non ad quidem repellendus.
          Itaque facere temporibus ut, quas nihil officiis error amet sapiente quibusdam? Distinctio blanditiis, doloremque itaque enim doloribus, quo aliquam, eligendi reprehenderit laudantium unde voluptates autem ex at odit aspernatur atque?
          Aperiam delectus rem, sint ipsum dolore perferendis similique rerum. Fugiat quod ad, eos dolores inventore ut ducimus quaerat! Quisquam nisi laudantium dolor facere. Excepturi omnis iste velit voluptas voluptatibus nesciunt.
          Reiciendis minus maxime, commodi cum fuga, quasi minima neque molestias eos blanditiis totam saepe est et facilis eum qui sint distinctio ipsa? Obcaecati optio, ab recusandae atque officia tenetur deleniti.
        </Description>
      </Column>
    </Wrapper>
  );
};
