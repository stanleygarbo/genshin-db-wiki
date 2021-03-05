import React from 'react'
import styled from 'styled-components'

const StyledTable = styled.table`
    border-collapse: collapse;
    width: 100%;
    position:relative;
    box-shadow: 0px 0px 10px #00000050;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: -2px;
        bottom: -2px;
        left: -2px;
        right: -2px;
        background-color: #ffdc63;
        z-index: -1;
        transform: skew(2deg, 2deg);
        box-shadow: 0px 0px 10px #00000050;
    }


`



const index = ({children}) => {
    return (
        <StyledTable>
            {children}
        </StyledTable>
    )
}

export default index
