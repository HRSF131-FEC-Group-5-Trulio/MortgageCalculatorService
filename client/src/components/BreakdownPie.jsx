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
    stroke-dasharray: ${props => props.princIntX}, ${props => props.princIntY};
    stroke-dashoffset: 25;
`;

const PropertyTax = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(0, 173, 187);
    stroke-width: 3.8;
    stroke-dasharray: ${props => props.propTaxX}, ${props => props.propTaxY};
    stroke-dashoffset: ${props => props.propTaxOffset};
`;

const HomeInsurance = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(194, 213, 0);
    stroke-width: 3.8;
    stroke-dasharray: ${props => props.homeInsX}, ${props => props.homeInsY};
    stroke-dashoffset: ${props => props.homeInsOffset};
`;
const MortgageInsOther = styled.circle`
    cx: 18;
    cy: 18;
    r: 15.9155;
    fill: transparent;
    stroke: rgb(206, 182, 255);
    stroke-width: 3.8;
    stroke-dasharray: ${props => props.mortInsX}, ${props => props.mortInsY};
    stroke-dashoffset: ${props => props.mortInsOffset};
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
  let princIntX = props.princInt / monthly * 100;
  let princIntY = 100 - princIntX;
  let propTaxX = props.propertyTax / monthly * 100;
  let propTaxY = 100 - propTaxX;
  let propTaxOffset = 25 + princIntY;
  let homeInsX = props.homeIns / monthly * 100;
  let homeInsY = 100 - homeInsX;
  let homeInsOffset = propTaxOffset - propTaxX;
  let mortInsX = props.mortIns / monthly * 100;
  let mortInsY = 100 - mortInsX;
  let mortInsOffset = 25 + mortInsX;
  let convertUSD = monthly.toLocaleString('en-US', {style: 'currency', currency: 'USD'});
  let removeDecimals = convertUSD.slice(0, convertUSD.length - 3);
  return (
    <OuterPieBox>
        <InnerPieBox>
          <InnerPieBox2>
            <ViewBox viewBox="0 0 36 36">
              <MonthlyTotalCircle role="presentation"/>
              <PrincipalAndInterest
              princIntX={princIntX}
              princIntY={princIntY}/>
              <PropertyTax
              propTaxX={propTaxX}
              propTaxY={propTaxY}
              propTaxOffset={propTaxOffset}
              />
              <HomeInsurance
              homeInsX={homeInsX}
              homeInsY={homeInsY}
              homeInsOffset={homeInsOffset}
              />
              <MortgageInsOther
              mortInsX={mortInsX}
              mortInsY={mortInsY}
              mortInsOffset={mortInsOffset}
              />
            </ViewBox>
          </InnerPieBox2>
          <MonthlyTotalBox>
            <MonthlyTotalInner>
              <MonthlyTotalValue>
                {removeDecimals}
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