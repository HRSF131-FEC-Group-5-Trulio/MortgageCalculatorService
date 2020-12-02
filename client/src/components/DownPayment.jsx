import React from 'react'
import styled from 'styled-components'
import Slider from './Slider.jsx'
import CurrencyInput from 'react-currency-input-field';
import NumberFormat from 'react-number-format';
// import NumericInput from 'react-numeric-input';


const InputStyle = styled(CurrencyInput)`
    width: 100px;
    /* border-width: 1px 1px 1px 1px;
    border-top-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-right-style: solid; */
    border: ${props=> (props.selected === 'down') ? '3px solid #007882' : '1px solid rgb(205, 209, 212)'};
    /* border-top-color: ${props=> (props.selected === 'down') ? ' #007882' : 'rgb(205, 209, 212)'};
    border-bottom-color: ${props=> (props.selected === 'down') ? ' #007882' : 'rgb(205, 209, 212)'};
    border-left-color: ${props=> (props.selected === 'down') ? ' #007882' : 'rgb(205, 209, 212)'}; */
    border-image: initial;
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 8px 0px 0px 8px;
    /* border-right-style: initial; */
    /* border-right-color: ${props=> (props.selected === 'down') ? ' #007882' : 'rgb(205, 209, 212)'}; */
    /* border-color: ${props=> (props.selected === 'down') ? ' #007882' : 'rgb(205, 209, 212)'}; */
    margin-left: auto;


`;

const InputStyle2 = styled(NumberFormat)`
    border: ${props=> (props.selected === 'downPercent') ? '3px solid #007882' : '1px solid rgb(205, 209, 212)'};
    padding: 8px;
    font-size: 16px;
    line-height: 1.5;
    width: 56px;
    display: inline-block;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
    border-radius: 0px 8px 8px 0px;

`;

const HomeStyles = styled.div`
    background-color: #f5f6f7;
    font-weight: bold;
    font-size: 16px;
    line-height: 1.5;
    flex: 1 1 0%;
    width: 100%;
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 16px;
    min-height: 48px;

`;

// const Percent = styled.span`
//     border: 1px inset #fff;

// `;

const DownPayment = (props) => {

      return (
        <HomeStyles>
            Down Payment
          <InputStyle
          type="text"
          prefix="$"
          value={Math.floor(props.down)}
          selected={props.selected}
          onChange={props.downChange}
          onClick={()=>props.updateSelected('down')}
          />
          {/* <Percent> */}
          <InputStyle2
          type="text"
          value={props.downPercent}
          selected={props.selected}
          onClick={()=>props.updateSelected('downPercent')}
          suffix="%"
        //   value={props.downPercent + "%"}
          onChange={props.downPercentChange}/>
          {/* % */}
          {/* </Percent> */}
        </HomeStyles>
    )
}

export default DownPayment;