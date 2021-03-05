import React from 'react'
import styled from 'styled-components'

const StyledCharacterIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // color: #ffdc63;
    color: #444;
    font-size:13px;
    font-weight:bold;
    width: 70px;
    background:#d4d4d4;
    padding-bottom:1px;
    border-radius: 5px;
    position: relative;
    box-sizing:none;
    z-index:1;
    transition:.3s;

    &::before{
        content:'';
        height:100%;
        width:100%;
        position:absolute;
        top:-2px;
        left:-2px;
        border-radius:5px;
        z-index:-1;
        transition:.2s;
    }

    &:hover{
        transform:scale(1.02);
    }

    


    &:hover::before{
        background:#d4d4d4;
        border:2px solid #d4d4d4;
        box-shadow: 0px 0px 15px #d4d4d490;
    }
    
    .character-icon{
        border-top-right-radius: 5px;
        border-top-left-radius: 5px;
        border-bottom-right-radius: 15px;
        overflow:hidden;
        width: 70px;
        height: 70px;
        margin-bottom: 1px;
        position: relative;
    }
    
    .element {
        z-index: 3;
        width: 30px;
        height: 30px;
        position: absolute;
        top: -15px;
        left: -15px;
    }
    
    .character-icon .character-img {
        width: 70px;
        border-radius: 5px;
    }
`

const CharacterIcon = ({name,imgURL,element,rarity}) => {
    return (
        <StyledCharacterIcon>
            <img className="element" src={`https://rerollcdn.com/GENSHIN/Elements/Element_${element}.png`} alt={element} />
            <div className={`character-icon ${rarity===5? 'gold' :'purple'} `}>
                <img className="character-img" src={imgURL} alt={name}/>
            </div>
            <span>{name}</span>
        </StyledCharacterIcon>
    )
}

export default CharacterIcon
