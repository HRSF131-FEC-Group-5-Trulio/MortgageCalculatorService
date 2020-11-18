import React from 'react'
import Slider from './Slider.jsx'
import Practice from './Practice.jsx'
import styled from 'styled-components'


const Container = styled.div`
  .container {
    background: white;
  }
`

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      settings: []
    }
  }


  render () {
    return (
      <Container>
      <div className="container">

      </div>
      </Container>
    )
  }

}

export default App;