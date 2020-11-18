import React from 'react'
import styled, {ThemeProvider} from 'styled-components'
import Button from '../elements/button.js'


const theme = {
  primary: 'teal',
  secondary: 'green',
  alert: 'yellow',
  font: 'sans-serif'
}



const H1 = styled.h1`
  font-size: 3rem;
`

const Practice = () => {
  return (
    <ThemeProvider theme={theme}>
    <div>
    <H1>Styled Component</H1>
    <input type="number"/>
    <Button color="secondary">Create</Button>
    </div>
    </ThemeProvider>
  )
}

export default Practice;