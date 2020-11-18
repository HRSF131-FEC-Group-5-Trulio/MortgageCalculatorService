import React from 'react'
import styled from 'styled-components'

const sliderStyles = (props) => (`
    background: linear-gradient(to right, #007882 0%, #007882 ${props.left}%, #cdd1d4 ${props.left}%, #cdd1d4 100%);
`)

const Styles = styled.div`
  .slider {
  background: #f5f6f7;
  height: 34px;
  -webkit-appearance: none;
  margin: 10px 0;
  width: 100%;
}
.slider:focus {
  outline: none;
}
.slider::-webkit-slider-runnable-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #FFFFFF;
  border-radius: 1px;
  border: 1px solid #FFFFFF;
  ${props => sliderStyles(props)}
}
.slider::-webkit-slider-thumb {

  border: 4px solid #FFFFFF;
  height: 23px;
  width: 23px;
  border-radius: 23px;
  background: #007882;
  cursor: pointer;
  -webkit-appearance: none;
  margin-top: -10px;
}
.slider:focus::-webkit-slider-runnable-track {
  ${props => sliderStyles(props)}
}
.slider::-moz-range-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #f5f6f7;
  background: #007882;
  border-radius: 1px;
  border: 1px solid #f5f6f7;
}
.slider::-moz-range-thumb {
  box-shadow: 3px 3px 3px #fff;
  border: 2px solid #FFFFFF;
  height: 23px;
  width: 23px;
  border-radius: 23px;
  background: #007882;
  cursor: pointer;
}
.slider::-ms-track {
  width: 100%;
  height: 6px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.slider::-ms-fill-lower {
  background: #007882;
  border: 1px solid #f5f6f7;
  border-radius: 2px;
  box-shadow: 1px 1px 1px #f5f6f7;
}
.slider::-ms-fill-upper {
  background: #007882;
  border: 1px solid #f5f6f7;
  border-radius: 2px;
  box-shadow: 1px 1px 1px #f5f6f7;
}
.slider::-ms-thumb {
  margin-top: 1px;
  box-shadow: 3px 3px 3px #f5f6f7;
  border: 2px solid #f5f6f7;
  height: 23px;
  width: 23px;
  border-radius: 23px;
  background: #007882;
  cursor: pointer;
}
.slider:focus::-ms-fill-lower {
  background: #007882;
}
.slider:focus::-ms-fill-upper {
  background: #007882;
}

`;

class Slider extends React.Component  {
  constructor (props) {
    super (props);
    this.state = {
      value: 70
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange = (event) => {
    this.setState({value: event.target.value});
  }

  render () {


    return (
      <div style={{position: 'relative'}}>
      <Styles color={this.props.color} left={this.state.value}>

        <input type="range" min={0} value={this.state.value} max={100}  className="slider" onChange={this.handleOnChange} />
      </Styles>
      </div>
    )
  }
}

export default Slider;


