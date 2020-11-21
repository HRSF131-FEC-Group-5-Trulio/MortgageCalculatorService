import React from 'react'
import styled from 'styled-components'

const OuterPieBox = styled.div`
  margin: 32px 32px 32px 16px;
  background: red;
`;
const InnerPieBox = styled.div`
  width: 280px;
  position: relative;
  box-sizing: border-box;
  margin: auto;
  flex-shrink: 0;
  background: orange;
`;
const InnerPieBox2 = styled.div`
  width: 280px;
  height: 280px;
  background: white;
`;

const ViewBox = styled.svg`

`;

const MonthlyTotalCircle = styled.circle`
  cx: 18;
  cy: 18;
  r: 12;
  fill: rgb(255, 255, 255);
  transform-origin: 0px 0px;
`;

const PrincipalAndInterest = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(5, 34, 134);
    stroke-width: 3.8;
    stroke-dasharray: 78.6392, 21.3608;
    stroke-dashoffset: 25;
`;

const PropertyTax = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(0, 173, 187);
    stroke-width: 3.8;
    stroke-dasharray: 12.613, 87.387;
    stroke-dashoffset: 46.3608;
`;

const HomeInsurance = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(194, 213, 0);
    stroke-width: 3.8;
    stroke-dasharray: 1.6953, 98.3047;
    stroke-dashoffset: 33.7477;
`;
const MortgageInsOther = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(206, 182, 255);
    stroke-width: 3.8;
    stroke-dasharray: 7.05244, 92.9476;
    stroke-dashoffset: 32.0524;
`;
const MonthlyTotalBox = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    margin: 0px;
    width: 100%;
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
`;
const MonthlyTotalInner = styled.div`
    flex-direction: column;
    width: auto;
    display: inline-block;
`;
const MonthlyTotalValue = styled.div`
    font-size: 38px;
    font-weight: bold;
    line-height: 1.05;
    align-self: center;
`;
const MonthLabel = styled.div`
    font-size: 16px;
    line-height: 1.5;
    text-align: center;

`;

const BreakdownPie = (props) => {
  let monthly = Math.floor(props.total);
  return (
    <OuterPieBox>
        <InnerPieBox>
          <InnerPieBox2>
            <ViewBox viewBox="0 0 36 36">
              <MonthlyTotalCircle role="presentation"/>
              <PrincipalAndInterest
              total={props.total}
              princInt={props.princInt}/>
              <PropertyTax
              total={props.total}
              propertyTax={props.propertyTax}/>
              <HomeInsurance
              total={props.total}
              homeIns/>
              <MortgageInsOther
              total={props.total}
              mortIns={props.mortIns}/>
            </ViewBox>
          </InnerPieBox2>
          <MonthlyTotalBox>
            <MonthlyTotalInner>
              <MonthlyTotalValue>
                ${monthly}
              </MonthlyTotalValue>
              <MonthLabel>
                /month
              </MonthLabel>
            </MonthlyTotalInner>
          </MonthlyTotalBox>
        </InnerPieBox>
      </OuterPieBox>
  )
}

export default BreakdownPie;