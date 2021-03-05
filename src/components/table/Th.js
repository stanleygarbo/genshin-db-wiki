import React from 'react'
import styled from 'styled-components'

const StyledTh = styled.th`
    background-color: #1c1b29;
    color: #ffdc63;
    padding: 20px 0px 20px 10px;
    text-align: left;
    font-size:20px;
    min-width:120px;
`


const th = ({children}) => {
    return (
        <StyledTh>
            {children}
        </StyledTh>
    )
}

export default th
