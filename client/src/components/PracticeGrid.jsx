import React from 'react'
import styled from 'styled-components'

const GridStyles = styled.div`

  .wrapper {

  }

  .letter {
    font-size: large;
    color: orange;
    align-items: center;
    font-style: "Segoe UI Bold";
  }

`;

const PracticeGrid = (props) => {
  return (

    <div className="wrapper">
      <div className="letter">
        A
      </div>
      <div className="letter>">
        B
      </div>
    </div>

  )


}

export default PracticeGrid;