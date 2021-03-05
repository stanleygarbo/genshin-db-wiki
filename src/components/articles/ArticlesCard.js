import React from 'react'
import { ArticleSummary } from './ArticleSummary'
import { ArticleTitle } from './ArticleTitle'
import styled from 'styled-components'
import {Link} from 'gatsby'

const Card = styled(Link)`
    width:330px;
    margin:20px;
    border-radius:5px;
    overflow:hidden;
    background:linear-gradient(90deg, rgba(0,0,0,.5), rgba(0,0,0,.3));
    // background:rgba(38,18,12,0.62);
    position:relative;
`

const Text = styled.div`
    padding:17px;
` 

const Image = styled.img`
    width:100%;
    height:170px;
    object-fit:cover;
`

const ArticlesCard = ({title,summary,banner,slug}) => {
    return (
        <Card to={`article/${slug}`}>
            <Image src={banner}></Image>
            <Text>
                <ArticleTitle>
                    {title}
                </ArticleTitle>
                <ArticleSummary>
                    {summary}
                </ArticleSummary>
            </Text>
        </Card>
    )
}

export default ArticlesCard
