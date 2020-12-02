import React from 'react'
import styled from 'styled-components'


const SelectContainer = styled.div`
    width: 100%;
    display: inline-block;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    font-weight: bold;
    border: ${props=> (props.selected === 'loan') ? '3px solid #007882' : '1px solid rgb(205, 209, 212)'};
    border-radius: 8px;
    background-color: rgb(255, 255, 255);
    padding: 8px;
    outline: none;
    transition: box-shadow 0.15s ease 0s, border-color 0.15s ease 0s;
`;


const InsideSelect = styled.div`
    flex-direction: row;
    -webkit-box-align: center;
    align-items: center;
    display: flex;

`;

const Label = styled.div`
    margin-left: 0px;
    flex: 1 1 0px;
    width: 100%;
    margin: 0px 8px;
`;



const Arrow = styled.div`
    display: inline-block;
    font-size: 0px;
    width: 16px !important;
    height: 24px !important;
`;



const Select = styled.select`
    appearance: none;
    position: absolute;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    cursor: pointer;
    font-size: 16px;
    line-height: 1.5;
`;



const Option = styled.option`
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
`;

class LoanSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loanType: '30-year fixed'
    }
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect (event) {
    let newType = event.target.value;
    this.props.loanChange(newType);
    this.setState({loanType: newType})
  }


  render () {
    return (

      <SelectContainer
      selected={this.props.selected}

      >
        <InsideSelect>
          <Label>
            {this.state.loanType}
          </Label>
          <Arrow>
            <svg className="svg" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M15.961 18.183l7.056-7.147 1.893 1.868-8.951 9.068-8.927-9.069 1.896-1.866z" fill="#869099"></path></svg>
          </Arrow>
        </InsideSelect>
        <Select
        onClick={()=>this.props.updateSelected('loan')}
        value={this.state.loanType}
        onChange={this.handleSelect}>
          <Option value="30-year-fixed">30-year fixed</Option>
          <Option value="20-year-fixed">20-year fixed</Option>
          <Option value="15-year-fixed">15-year fixed</Option>
          <Option value="10-year-fixed">10-year fixed</Option>
          <Option value="FHA-30-year-fixed">FHA 30-year fixed</Option>
          <Option value="FHA-15-year-fixed">FHA 15-year fixed</Option>
          <Option value="VA-30-year-fixed">VA 30-year fixed</Option>
          <Option value="VA-15-year-fixed">VA 15-year fixed</Option>
        </Select>
        </SelectContainer>

    )
  }

}

export default LoanSelect;