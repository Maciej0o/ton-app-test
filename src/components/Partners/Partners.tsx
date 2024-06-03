import {
  Wrapper,
  Column,
  Title,
  Calculator,
  Subtitle,
  InputWrapper,
  Button,
  Row,
  BottomText,
  Input,
  Label,
  Text,
} from './Partners.style';
import { useState } from 'react';
import character from '/images/partners-character.png';
import questionMarks from '/images/question-marks.png';
import inputBgc from '/images/input-bgc.svg';
import inputMobileBgc from '/images/input-mobile.svg';
import buttonBgc from '/images/buy-token-btn.svg';
import buttonMobileBgc from '/images/buy-token-mobile.svg';
import cloud from '/images/cloud-mobile-partners.png';
import arrows from '/images/arrows-calculator.svg';
import { useConnect, useAccount, useWriteContract } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { base } from 'viem/chains';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Partners = () => {
  const { connectAsync } = useConnect();
  const { address } = useAccount();
  const { writeContractAsync } = useWriteContract();
  const [usdtValue, setUsdtValue] = useState('');
  const [started, setStarted] = useState(false);

  const handlePayment = async () => {
    try {
      setStarted(true);
      if (!address) {
        await connectAsync({ chainId: base.id, connector: injected() });
      }

      await writeContractAsync({
        chainId: base.id,
        address: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
        functionName: 'transfer',
        abi: [
          {
            constant: false,
            inputs: [
              {
                name: '_to',
                type: 'address',
              },
              {
                name: '_value',
                type: 'uint256',
              },
            ],
            name: 'transfer',
            outputs: [],
            payable: false,
            stateMutability: 'nonpayable',
            type: 'function',
          },
        ],
        args: ['0x0bA443598EC46Ae9f6D5a008C6843bD87BA7f82F', +usdtValue * 1000000],
      });

      toast.success('Transaction success');
      setStarted(false);
      setUsdtValue('');
    } catch (err) {
      console.log(err);
      setStarted(false);
      toast.error('Transaction failed');
    }
  };

  return (
    <Wrapper id='participate'>
      <ToastContainer position='bottom-center' autoClose={3000} hideProgressBar={false} closeOnClick pauseOnHover />
      <img src={character} alt='character' className='character' />
      <img src={questionMarks} alt='character' className='question-marks' />
      <img src={cloud} alt='cloud' className='cloud' />
      <Column>
        <Title>
          Partners &<br />
          Backers
        </Title>
        <Calculator id='buy'>
          <Subtitle>Amount calculator</Subtitle>
          <img src={arrows} alt='' className='arrows' />
          <InputWrapper>
            <Label>
              <Input
                value={usdtValue}
                type='text'
                onChange={(e: any) => /^[0-9]*\.?[0-9]*$/.test(e.target.value) && setUsdtValue(e.target.value)}
                placeholder='0'
              />
              USDC
            </Label>
            <img src={inputBgc} alt='' className='button-background' />
            <img src={inputMobileBgc} alt='' className='button-background-mobile' />
          </InputWrapper>
          <InputWrapper>
            <Text>
              {usdtValue ? (+usdtValue / 0.0019).toFixed(2) : 0} <span>Tokens</span>
            </Text>
            <img src={inputBgc} alt='' className='button-background' />
            <img src={inputMobileBgc} alt='' className='button-background-mobile' />
          </InputWrapper>
          <Button onClick={() => +usdtValue > 0 && handlePayment()} $disabled={+usdtValue <= 0}>
            {started ? 'Loading...' : 'Buy Tokens'}
            <img src={buttonBgc} alt='' className='button-background' />
            <img src={buttonMobileBgc} alt='' className='button-background-mobile' />
          </Button>
          <Row>
            <BottomText>1 Token = 0.0019 USDC</BottomText>
          </Row>
        </Calculator>
      </Column>
    </Wrapper>
  );
};
