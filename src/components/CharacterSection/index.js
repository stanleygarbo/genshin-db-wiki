import { graphql, Link, useStaticQuery } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Characters from '../../content/characters.json'
import CharacterIcon from './CharacterIcon'
import {useState} from 'react'

const Wrapper = styled.div`
  .filters {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #292841;
    color: #b3bfd8;
    flex-direction: column;

    section {
      display: flex;
      justify-content: center;
      align-items: center;

      h3 {
        margin-right: 30px;
      }

      button {
        color: #fff;
        font-size: 18px;
        margin: 10px;
        padding: 10px;
        width: 50px;
        height: 50px;
        background-color: transparent;
        border: none;
        background-size: 80% 80%;
        background-repeat: no-repeat;
        background-position: center;
        border-radius: 5px;
        outline: none;
        cursor: pointer;
      }

      .active {
        background-color: #ffffff20;
      }
    }
  }

  .characters-section {
    max-width: 1100px;
    min-height:500px;
    margin:50px auto;
    padding: 20px;
    box-shadow:0 0 10px rgba(0,0,0,0.5);
    background:#292841;

    .search{
      margin-bottom:40px;
      height:35px;
      width:290px;
      padding:10px 20px;
      background:#1c1b29;
      outline:none;
      border:none;
      color:#b3bfd8;
      box-shadow:5px 5px 10px rgba(0,0,0,0.5) inset;
      border-radius:5px;
      font-size:15px;

      &::placeholder{
        color:#b3bfd8;
      }
    }

    .characters-wrapper{
      display: flex;
      flex-wrap: wrap;
      align-content:flex-start;
      justify-content:center;
      gap:40px;
    }
  }
`

const StyledFilterBtn = styled.button`
  ${props=>props.type && 'background: url(https://rerollcdn.com/GENSHIN/Elements/Element_'+props.type+'.png);'}
  ${props=>props.imgURL && 'background: url('+props.imgURL+');'}
`

const CharactersSection = () => {
  const [currentElement,setCurrentElement] = useState('All')
  const [currentWeapon,setCurrentWeapon] = useState('All')
  const [searchText,setSearchText] = useState('')

  const imgData = useStaticQuery(graphql`
    {
      sword: file(relativePath:{eq:"sword-p.png"}){
        publicURL
      }
      claymore: file(relativePath:{eq:"claymore-p.png"}){
        publicURL
      }
      catalyst: file(relativePath:{eq:"catalyst-p.png"}){
        publicURL
      }
      bow: file(relativePath:{eq:"bow-p.png"}){
        publicURL
      }
      polearm: file(relativePath:{eq:"polearm-p.png"}){
        publicURL
      }
    }
  
  `)

  const handleChange = (e) =>{
    setSearchText(e.target.value)
  }

  return (
    <Wrapper>
      <div className="filters">
        <section>
          <h3>Filters</h3>
          <StyledFilterBtn className={currentElement === 'All' && 'active'} onClick={()=>setCurrentElement('All')}>All</StyledFilterBtn>
          <StyledFilterBtn className={currentElement === 'Anemo' && 'active'} type='Anemo' onClick={()=>setCurrentElement('Anemo')}/>
          <StyledFilterBtn className={currentElement === 'Pyro' && 'active'} type='Pyro' onClick={()=>setCurrentElement('Pyro')}/>
          <StyledFilterBtn className={currentElement === 'Electro' && 'active'} type='Electro' onClick={()=>setCurrentElement('Electro')}/>
          <StyledFilterBtn className={currentElement === 'Hydro' && 'active'} type='Hydro' onClick={()=>setCurrentElement('Hydro')}/>
          <StyledFilterBtn className={currentElement === 'Geo' && 'active'} type='Geo' onClick={()=>setCurrentElement('Geo')}/>
          <StyledFilterBtn className={currentElement === 'Cryo' && 'active'} type='Cryo' onClick={()=>setCurrentElement('Cryo')}/>
        </section>
        <section>
          <StyledFilterBtn className={currentWeapon === 'All' && 'active'} onClick={()=>setCurrentWeapon('All')}>
              All
          </StyledFilterBtn>
          <StyledFilterBtn className={currentWeapon === 'Sword' && 'active'} imgURL={imgData.sword.publicURL} onClick={()=>setCurrentWeapon('Sword')}/>
          <StyledFilterBtn className={currentWeapon === 'Claymore' && 'active'} imgURL={imgData.claymore.publicURL} onClick={()=>setCurrentWeapon('Claymore')}/>
          <StyledFilterBtn className={currentWeapon === 'Polearm' && 'active'} imgURL={imgData.polearm.publicURL} onClick={()=>setCurrentWeapon('Polearm')}/>
          <StyledFilterBtn className={currentWeapon === 'Bow' && 'active'} imgURL={imgData.bow.publicURL} onClick={()=>setCurrentWeapon('Bow')}/>
          <StyledFilterBtn className={currentWeapon === 'Catalyst' && 'active'} imgURL={imgData.catalyst.publicURL} onClick={()=>setCurrentWeapon('Catalyst')}/>
        </section>
      </div>
      
      <div className="characters-section">
        <input name='search' 
        placeholder='Search Character' 
        className='search' onChange={handleChange}></input>

        <div className='characters-wrapper'>
          {Characters.map((item,index)=>{
            if(item.type === currentElement || currentElement === 'All')
              if(item.weapon === currentWeapon || currentWeapon === 'All'){
                return item.name.toLowerCase().includes(searchText) &&
                (
                  <Link key={index} to={`character/${item.name}`} >
                    <CharacterIcon name={item.name} imgURL = {item.imgURL} element = {item.type} rarity={item.rarity} />
                  </Link>
                )
              }
          })}
        </div>
      </div>
    </Wrapper>
  )
}

export default CharactersSection
