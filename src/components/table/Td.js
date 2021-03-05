import React from 'react'
import styled from 'styled-components'

const StyledTd = styled.td`
    padding: 10px;
    color: #b3bfd8;
`

const Td = ({children}) => {
    return (
        <StyledTd>
            {children}
        </StyledTd>
    )
}

export default Td
