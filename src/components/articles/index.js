import React from 'react'
import ArticlesData from '../../content/articles.json'
import ArticlesCard from './ArticlesCard'
import styled from 'styled-components'
import {useStaticQuery,graphql} from 'gatsby'

const Wrapper = styled.div`
    padding: 100px 0px;
    display:flex;
    flex-direction:column;
    align-items:center;
    background:#292841;
    h1{
        margin-bottom: 70px;
        color:#fff;
        z-index:1;
        width:100%;
        text-align:center;
    }

    p{
        color:#fff;
    }

`

const ArticlesContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
`

const Articles = (props) => {

    const {wallpaper} = useStaticQuery(graphql`
        {
            wallpaper:file(relativePath:{eq:"wallpaper.jpg"}){
                publicURL
            }
        }
    `)

    return (
        <Wrapper imgURL = {wallpaper.publicURL}>
            <h1>Articles</h1>
            <ArticlesContainer>
                {ArticlesData.length? ArticlesData.map(item=>
                    <ArticlesCard key={item.id} title={item.title} summary={item.summary} banner={item.bannerImgUrl} slug={item.slug} />    
                )
                    :
                <p>Coming Soon...</p>
                }
            </ArticlesContainer>
        </Wrapper>
    )
}

export default Articles
