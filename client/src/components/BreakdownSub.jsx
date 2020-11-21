import React from 'react'
import styled from 'styled-components'

const PropIntTableOuter = styled.div`
    border-style: solid;
    border-color: transparent;
    border-width: 4px 2px 0px;
    width: 100%;
    -webkit-box-flex: 0;
    flex: 0 0 auto;
    display: block;
`;
const PropIntTableOuter2 = styled.div`
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
`;
const PropIntTableInner = styled.div`
    flex: 1 1 0px;
    width: 100%;
    margin: 0px 8px;
`;
const PropIntTableInner2 = styled.div`
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
`;
const PropIntTableInner3 = styled.div`
    width: 100%;
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
`;
const PropIntColorCode = styled.div`
    background-color: ${props => props.color};
    width: 16px;
    height: 16px;
    border-radius: 8px;
`;
const PropIntTextOuter = styled.div`
  margin-right: 0px;
  flex: 1 1 0px;
  width: 100%;
  margin: 0px 8px;
`;
const PropIntTextInner = styled.div`
    font-size: 16px;
    line-height: 1.5;
`;
const PropIntDollar = styled.div`
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
`;

const BreakdownSub = (props) => {
  return (
    <PropIntTableOuter>
    <PropIntTableOuter2>
    <PropIntTableInner>
      <PropIntTableInner2>
        <PropIntTableInner3>
          <PropIntColorCode color={props.color}/>
            <PropIntTextOuter>
              <PropIntTextInner>
                {props.category}
              </PropIntTextInner>
            </PropIntTextOuter>
        </PropIntTableInner3>
      </PropIntTableInner2>
    </PropIntTableInner>
    <PropIntDollar>
      ${JSON.stringify(props.cost)}
    </PropIntDollar>
    </PropIntTableOuter2>
  </PropIntTableOuter>
  )
}

export default BreakdownSub;