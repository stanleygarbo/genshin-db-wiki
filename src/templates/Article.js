import React from 'react'
import ArticlesData from '../content/articles.json'
import Layout from '../components/layout'
import styled from 'styled-components'

const Container = styled.div`
    margin: 90px auto;
    color:#b3bfd8;
    max-width:750px;

    h1{
        margin: 50px 0px;
    }

    p{
        font-size:18px;
    }

`

const Article = (props) => {
    const article = ArticlesData.find(obj=>
        obj.slug===props.pageContext.slug    
    )

    return (
        <Layout>
            <Container>
                <h1>{article.title}</h1>
                <div className='content' dangerouslySetInnerHTML={{__html:article.content}} />
            </Container>
        </Layout>
    )
}

export default Article
