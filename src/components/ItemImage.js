import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
    height:60px;
    width:57px;
    margin-right:10px;
    border-radius:5px;
`

const ItemImage = ({rarity,src}) => {
    return <Image src={src} className={rarity === 1 ? 'white' : rarity === 2 ? 'green' : rarity === 3 ? 'blue' : rarity === 4 ? 'purple' : 'gold'}/>
}

export default ItemImage