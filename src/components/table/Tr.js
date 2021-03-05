import React from 'react'
import styled from 'styled-components'

const StyledTr = styled.tr`
    &:nth-child(even) {
        background-color: #32304e;
    }

    &:nth-child(odd) {
        background-color: #28263a;
    }
`

const Tr = ({children}) => {
    return (
        <StyledTr>
            {children}
        </StyledTr>
    )
}

export default Tr
