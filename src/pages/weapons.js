import React from 'react'
import styled from 'styled-components'
import data from '../content/weapons.json'
import Layout from '../components/layout'
import Wallpaper from '../components/Wallpaper'

const Wrapper = styled.div`
    z-index: 1;
    position: relative;
    padding-top:90px;

    .container {
        width: 1100px;
        margin: 0px auto;
        background-color: #1c1b29;
        position: relative;
        box-shadow: 0px 0px 10px #00000050;
        padding: 15px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-gap: 10px;

        .weapon {
            display: flex;
            flex-direction: column;
            background-color: #292841;
            box-shadow: 0px 0px 10px #00000080;
            border-radius: 5px;
            overflow: hidden;
        }

        .img-bg-color {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0px 10px 0px 0px;
            position: relative;
            padding-bottom: 30px;
            
            .item-stats-wrapper {
                display: flex;
                flex-direction: column;
                
            
                .item-stats {
                    display: flex;
                    flex-direction: column;
                    font-size: 16px;
                    color: #fff;
                }
            }
            
            img {
                height: 90px;
            }
        }
        
        .weapon-info {
            padding: 10px;
            
            h2 {
                color: #ffdc63;
                font-size: 17px;
            }
            p {
                color: #b3bfd8;
                font-size: 15px;
                margin-top: 15px;
                line-height: 20px;
            }
        }
    }
`

const Stars=styled.span`
    color: gold;
    font-size: 22px;
    font-weight: bolder;
    position: absolute;
    left: 0px;
    bottom: 0px;
    background-color: #00000050;
    padding: 0px 10px;
    height: 30px;
    min-width: 100%;
`

const weapons = () => {
    return (
        <Layout>
            <Wrapper>
                <Wallpaper/>
                <div className="container">
                    {data.map(item=>
                        <div className="weapon">
                            <div 
                                className={`img-bg-color 
                                    ${item.rarity === 5? 'gold' : item.rarity === 4?'purple'
                                    : item.rarity === 3?'blue'
                                    : item.rarity === 2?'green':
                                    'white'}`
                                }
                            >
                                <img src={item.imgURL} alt="weapon"/>
                                <div className="item-stats-wrapper">
                                    <div className="item-stats">
                                        <span>Base ATK</span> 
                                        <span>{item.base}</span>
                                    </div>
                                    <div className="item-stats">
                                        <span>{item.secondary}</span> 
                                        <span>---</span>
                                    </div>
                                </div>
                                <Stars dangerouslySetInnerHTML={{__html:'&#9733;'.repeat(item.rarity)}}/>

                            </div>
                            <div className="weapon-info">
                                <h2>{item.name}</h2>
                                <p dangerouslySetInnerHTML={{__html:item.bonus}}></p>
                                <p>Source: {item.location} </p>
                            </div>
                        </div>
                    )}
                </div>
            </Wrapper>
        </Layout>
    )
}

export default weapons
