import React from 'react'
import styled from 'styled-components'

const OuterBox0 = styled.div`
  width: 50%;
  align-self: flex-start;
`;
const OuterBox1 = styled.div`
  margin-right: -2px;
  margin-left: -2px;
  display: flex;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: -4px;
  flex-wrap: wrap;
`;
const OuterBox2 = styled.div`
  display: flex;
  margin-top: -4px;
  flex-wrap: wrap;
`;
const ButtonBox = styled.div`
    border-style: solid;
    border-color: transparent;
    border-width: 4px 2px 0px;
    width: 100%;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;
`;
const Button = styled.a`
    margin: 0px;
    border-radius: 8px;
    border-width: 1px;
    border-style: solid;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    transition: top 0.1s ease 0s, box-shadow 0.1s ease 0s, border-color 0.1s ease 0s, background-color 0.1s ease 0s, color 0.1s ease 0s;
    white-space: nowrap;
    font-size: 16px;
    line-height: 1.5;
    padding: 8px 16px;
    width: 100%;
    color: rgb(255, 255, 255);
    background-color: rgb(0, 120, 130);
    border-color: transparent;
    text-decoration: none;
`;
const GetPreQualified = (props) => {
  return (
    <OuterBox0>
    <OuterBox1>
      <OuterBox2 spacing="tighter">
        <ButtonBox>
          <Button href="https://www.trulia.com/mortgages/pre-qualified/#/first-time" >
            Get Pre-Qualified
          </Button>
        </ButtonBox>
      </OuterBox2>
    </OuterBox1>
    </OuterBox0>
  )


}

export default GetPreQualified;