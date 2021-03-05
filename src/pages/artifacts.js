import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Table from "../components/table"
import Th from "../components/table/Th"
import Tr from "../components/table/Tr"
import Td from "../components/table/Td"
import artifactsData from "../content/artifacts.json"
import styled from 'styled-components'
import Wallpaper from "../components/Wallpaper"
import ItemImage from "../components/ItemImage"

const Wrapper = styled.div`
    position:relative;
    width:100%:
    height:100%;
    padding:100px 0px;
`

const Container = styled.div`
    width:1100px;
    margin: 0px auto;
`

const ArtifactSet = styled.div`
    display:flex;
    align-items:center;
`

const H3 = styled.h3`
    color: #ffdc63;
    font-size:17px;
`


const Artifacts = () => {
    
    return (
    <Layout>
      <SEO title="Artifacts" />
      <Wrapper>
        <Wallpaper top='90px' />
        <Container>
            <Table>
                <thead>
                    <Tr>
                        <Th>
                            Set
                        </Th>
                        <Th>
                            Max Stars
                        </Th>
                        <Th>
                            2-piece
                        </Th>
                        <Th>
                            4-piece
                        </Th>
                    </Tr>
                </thead>
                <tbody>
                    {artifactsData.map((item)=>
                        <Tr key={item.id}>
                            <Td>
                                <ArtifactSet>
                                    <ItemImage rarity={item.rarity} src = {item.imgURL}/>
                                    <H3>{item.name}</H3>
                                </ArtifactSet>
                            </Td>
                            <Td>
                                <span className="stars" dangerouslySetInnerHTML={{__html:'&#9733;'.repeat(item.rarity)}}/>
                            </Td>
                            {item.bonus.map((val,index)=>
                                <Td key ={index}>
                                    {val?.value}
                                </Td>
                            )}
                        </Tr>
                    )}
                </tbody>
            </Table>
        </Container>
      </Wrapper>
    </Layout>
)}

export default Artifacts
