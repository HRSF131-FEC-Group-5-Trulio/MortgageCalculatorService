import React from 'react'
import Slider from './Slider.jsx'
import HomePrice from './HomePrice.jsx'
import DownPayment from './DownPayment.jsx'
import InterestRate from './InterestRate.jsx'
import LoanType from './LoanType.jsx'
import LoanSelect from './LoanSelect.jsx'
import styled from 'styled-components'

const ContainerStyles = styled.div`
  outline: none;
  box-sizing: border-box;
  color: color: rgb(59, 65, 68);
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: -0.1px;
  font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
`;
const Container1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    border-radius: 8px;
    overflow: hidden;
    background-color: rgb(245, 246, 247);
    padding: 16px;

`;
const Container2 = styled.div`
    display: flex;
    margin-left: -8px;
    margin-right: -8px;
    margin-top: -16px;
    flex-wrap: wrap;
`;
const Container3 = styled.div`
    -webkit-box-flex: 0;
    flex: 340px 0 0;
    display: block;
    border-style: solid;
    border-color: transparent;
    border-width: 16px 8px 0px;
`;
const Container4 = styled.div`
    box-sizing: border-box;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 2px;
`;
const Form = (props) => {
    return (
      <ContainerStyles>
      <Container1>
      <Container2>
        <Container3>
          <Container4>
              <HomePrice price={props.price} priceChange={props.priceChange}/>
            </Container4>
          <Slider max={1300000} value={props.price} change={props.priceChange} step={10} />
        </Container3>
        <Container3>
          <Container4>
              <DownPayment
              price={props.price}
              down={props.down}
              downPercent={props.downPercent}
              downChange={props.downChange}
              downPercentChange={props.downPercentChange}
              />
            </Container4>
          <Slider max={30} value={props.downPercent} change={props.downPercentChange} step={1}/>
          </Container3>
          <Container3>
          <Container4>
              <InterestRate
                rate={props.rate}
                interestChange={props.interestChange}
              />
            </Container4>
          <Slider max={6.5} value={props.rate} change={props.interestChange} step={.01}/>
          </Container3>
          <Container3>
          <Container4>
              <LoanType/>
            </Container4>
          <LoanSelect loanChange={props.loanChange}/>
          </Container3>
          </Container2>
        </Container1>
      </ContainerStyles>
    )
}
export default Form;