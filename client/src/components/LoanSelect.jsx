import React from 'react'
import styled from 'styled-components'

const LoanStyles = styled.div`

  .selectContainer {
    width: 100%;
    display: inline-block;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    font-weight: bold;
    border: 1px solid rgb(205, 209, 212);
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    padding: 8px;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
  }

  .insideSelect {
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    display: flex;
  }

  .label {
    margin-left: 0px;
    flex: 1 1 0px;
    width: 100%;
    margin: 0px 8px;
  }

  .select {
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    cursor: pointer;
    appearance: none;
    font-size: 16px;
    line-height: 1.5;
  }

  .option {
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
  }

`;

class LoanSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: '30-year fixed'
    }
  }


  render () {
    return (
      <div className="selectContainer">
        {/* <div className="insideSelect">
          <div className="label">
            30-year fixed
          </div>
        </div> */}
        <select>
          <option>30-year fixed</option>
          <option>20-year fixed</option>
          <option>15-year fixed</option>
          <option>10-year fixed</option>
          <option>FHA 30-year fixed</option>
          <option>FHA 15-year fixed</option>
          <option>VA 30-year fixed</option>
          <option>VA 15-year fixed</option>
        </select>
        <span className="custom-array"></span>
      </div>
    )
  }

}

export default LoanSelect;