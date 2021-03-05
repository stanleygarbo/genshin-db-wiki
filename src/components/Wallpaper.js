import React from 'react'
import {useStaticQuery, graphql} from 'gatsby'
import styled from 'styled-components'

const Image = styled.div`
    width:100%;
    height:100%;
    background: url(${props=>props.imgURL});
    background-repeat:no-repeat;
    background-attachment:fixed;
    background-position:center;
    background-size:cover;
    position:absolute;
    // top:${props=>props.top};
    top:0;
    z-index:-2;
`

const Wallpaper = ({top}) => {
    const {wallpaper} = useStaticQuery(graphql`
        {
            wallpaper: file(relativePath: {eq: "wallpaper.jpg"}){
                publicURL
            }
        }
    `)

    return (
        <Image imgURL = {wallpaper.publicURL} top={top} />
    )
}

export default Wallpaper
