import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'

const StyledDiv = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100px;
    height: 70%;
    background: url(${props=>props.sideArrowImg});
    background-repeat: no-repeat;
    background-position-x: center;
    background-size: 50% 100%;
  `

const SideArrows = () => {
    const {sideArrowImg} = useStaticQuery(graphql`
        {
            sideArrowImg: file(relativePath:{eq:"arrow.svg"}){
                publicURL
            }
        }
    `)

    return (
      <StyledDiv sideArrowImg={sideArrowImg.publicURL} />
    )
}

export default SideArrows
