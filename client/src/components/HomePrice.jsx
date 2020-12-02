import React from 'react'
import styled from 'styled-components'
import Slider from './Slider.jsx'
import CurrencyInput from 'react-currency-input-field';
import NumberFormat from 'react-number-format';

const InputStyle = styled(CurrencyInput)`
      width: 112px;
      border-radius: 8px;
      /* border: 1px solid rgb(205, 209, 212); */
      border: ${props=> (props.selected === 'price') ? '3px solid #007882' : '1px solid rgb(205, 209, 212)'};
      padding: 8px;
      font-size: 16px;
      line-height: 1.5;
      display: inline-block;
      outline: none;
      transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
      font-family: TruliaSans, system, -apple-system, Roboto, "Segoe UI Bold", Arial, sans-serif;
      margin-left: auto;

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

const HomePrice = (props) => {

      return (

        <HomeStyles>
            Home Price
          <InputStyle
          type="text"
          prefix="$"
          value={props.price}
          onChange={props.priceChange}
          selected={props.selected}
          onClick={()=>props.updateSelected('price')}/>

        </HomeStyles>
    )

}

export default HomePrice;
