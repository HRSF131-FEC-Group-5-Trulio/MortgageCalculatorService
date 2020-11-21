import React from 'react'
import styled from 'styled-components'
import BreakdownSub from './BreakdownSub.jsx'
import BreakdownPie from './BreakdownPie.jsx'
import GetPreQualified from './GetPreQualified.jsx'

const ContainerMajor = styled.div`
  display: flex;
  flex-wrap: wrap;
  -webkit-box-pack: center;
  justify-content: center;
`;
const OuterBreakdownBox = styled.div`
    box-sizing: border-box;
    flex: 1 1 0%;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    flex-direction: column;
    padding: 16px 0px 16px 16px;
    min-width: 50%;
`;
const InnerBreakdownBox = styled.div`
  width: 100%;
  margin-right: -2px;
  margin-left: -2px;
  display: flex;
  margin-top: -4px;
  flex-wrap: wrap;
`;
const Padding = styled.div`
  padding: 0px 0px 32px;
`;

const BreakDown = (props) => {
  let total = Math.floor(props.monthly[0].monthly_payment);
  let princInt = Math.floor(props.monthly[0].principle_interest);
  let propertyTax = Math.floor(props.monthly[0].property_tax);
  let homeIns = props.monthly[0].home_ins;
  let mortIns = Math.floor(props.monthly[0].mortgage_insurance);
  return (
    <ContainerMajor>
      <BreakdownPie
      total={total}
      princInt={princInt}
      propertyTax={propertyTax}
      homeIns={homeIns}
      mortIns={mortIns}
      />
      <OuterBreakdownBox>
        <InnerBreakdownBox spacing="tighter">
          <BreakdownSub
          category={"Principle & Interest"}
          cost={princInt}
          color="rgb(5, 34, 134)"/>
          <BreakdownSub
          category={"Property Taxes"}
          cost={propertyTax}
          color="rgb(0, 173, 187)"/>
          <BreakdownSub
          category={"Home Insurance"}
          cost={homeIns}
          color="rgb(194, 213, 0)"/>
          <BreakdownSub
          category={"Mortgage ins & other"}
          cost={mortIns}
          color="rgb(206, 182, 255)"/>
        </InnerBreakdownBox>
        <Padding/>
      <GetPreQualified/>
      </OuterBreakdownBox>
    </ContainerMajor>
  )
}

export default BreakDown;