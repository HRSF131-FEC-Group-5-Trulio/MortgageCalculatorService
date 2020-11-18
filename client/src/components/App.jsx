import React from 'react'
import Slider from './Slider.jsx'
import Practice from './Practice.jsx'
import Header from './Header.jsx'
import Form from './Form.jsx'
import styled from 'styled-components'
import axios from 'axios'
import HomePrice from './HomePrice.jsx'
import PracticeGrid from './PracticeGrid.jsx'


const Container = styled.div`
  .container {
    background: white;
    width: 100%;
  }
`

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      settings: [],
      listings: {}
    }
  }

  componentDidMount () {
    axios({
      method: 'get',
      url: 'http://localhost:3000/api/mortgagedata/settings',
      responseType: 'json'
    })
    .then((response) => {
      let dataObj = response.data;
      this.setState({settings: dataObj, listings: this.state.listings})
    }).
    catch((error) => {console.log(error)});
  }


  render () {
    let monthly = 5610;
    return (

      <Container>
      <div className="container">
        {/* <PracticeGrid/> */}
        {/* <HomePrice/> */}
        {/* <Header price={monthly}/> */}
        <Form price={1500000} settings={this.state.settings}/>
        {/* {console.log(this.state.settings)} */}
      </div>
      </Container>
    )
  }

}

export default App;