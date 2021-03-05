import React from 'react'
import Layout from '../components/layout'
import CharactersData from '../content/characters.json'
import TalentUpMaterialsData from '../content/talentUpMats.json'
import styled from 'styled-components'
import CharacterIcon from '../components/CharacterSection/CharacterIcon'

const Container = styled.div`
    min-width: 300px;
    max-width: 1000px;
    margin: 0 auto;
    margin-top: 100px;
    box-shadow: 0px 0px 10px #00000070;
    background:#292841;
    color: #b3bfd8;

    h3,
    p {
        margin-bottom: 10px;
    }
    h3{
        font-size:20px;
        font-weight:400;
        color: #ffdc63;
        margin: 18px 0px 9px 0px;
    }
    p{
        font-size:18px;
        line-height:25px;

    }
  
    .character-banner {
        display: flex;
        padding: 20px;
        background: linear-gradient(45deg, #222135, #292841);
        align-items:center;

        > * {
            margin: 10px;
        }
        
    }
  
  
  .title {
    color: #b3bfd8;
    margin: 50px 20px 20px 20px;
  }
  
  .talents {
    display: flex;
    flex-wrap: wrap;
    color: #b3bfd8;
    justify-content: space-around;

        .talent{
            width: 300px;
            padding: 20px;
            margin: 10px;
            background: linear-gradient(180deg, #222135, #292841);
            font-size:18px;

            ul{
                list-style-type:none;
                padding-left:15px;
                li{
                    position:relative;
                    margin-bottom:10px;
                    &::before{
                        content:'▹';
                        position:absolute;  
                        left:-19px;
                        color:#ffdc63;
                        font-weight:bolder;
                        font-size:20px; 
                    }
                }
            }

            .name {
                padding: 30px 0px 40px 0px;
                text-align: center;
            }
        }
  
    }

  
  table {
    border-collapse: collapse;
    width: 100%;
  }
  
  .ascension {
    margin-bottom: 100px;
  }
  
  th {
    background-color: #1c1b29;
    color: #ffdc63;
    padding: 10px;
    text-align: left;
  }
  
  td {
    padding: 10px;
    color: #b3bfd8;
  }
  
  tr:nth-child(even) {
    background-color: #212133;
  }
  
  tr:nth-child(odd) {
    background-color: #1e1d2d;
  }
`

const MatIcons = styled.div`
    display:flex;


    .mat-icon{
        position:relative;

        .mat-name{
            padding:3px 7px;
            border-radius:5px;
            transition:.3s;
            width:max-content;
            z-index:3;
            background:#00000090;
            ${props=>props.hide && `
                opacity:0;
                visibility:hidden;
                left:0;
                top:-15px;
                position:absolute;
            `}
        }

        .mat-name:hover, img:hover ~ .mat-name{
            visibility:visible;
            opacity:1;
        }

    }
    ${props=>props.CustomStyles}

`

const Constellations = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    padding:20px;
    grid-gap:20px;

    .constellation{
        background:#222135;
        padding:20px;
        position:relative;
        overflow:hidden;

        .const-number{
            position:absolute;
            top:-10px;
            left:-10px;
            background:#ffdc63;
            border-bottom-right-radius:100px;
            padding:13px 15px 15px 13px;
            font-weight:900;
            color:#1c1b29;
            box-shadow:0px 0px 10px rgba(0,0,0,0.5);
        }

        h3{
            margin-bottom:20px;
        }
    }
`

const Character = (props) => {

    const character = CharactersData.find(obj=>
        obj.name === props.pageContext.slug
    )

    const talentUpMats_MobMats = character.ascension[0].mat4.name

    const underscorize = (str) =>{
        return str.replace(/\s/g,'_')
    }

    const talentUpMats_Books = TalentUpMaterialsData.books.find(obj=>
        obj.characters.map(item => item === props.pageContext.slug)    
    )
    
    const talentUpMats_BossMats = TalentUpMaterialsData.bossMats.find(obj=>
        obj.characters.map(item => item === props.pageContext.slug)    
    )


    return (
        <Layout>
            <Container>
                <div className="character-banner">
                    <CharacterIcon name = {character.name} imgURL = {character.imgURL} rarity = {character.rarity} element = {character.type} />
                    <div className="description">
                        <h3>Description: </h3>
                        <p>{character.description}</p>
                        <p>Location: {character.location} </p>
                    </div>
                </div>
                <h2 className="title">{character.name}'s Talent-up Materials</h2>

                <MatIcons hide={false} CustomStyles={`background:#1e1d2d; &>*{margin:15px 0px 15px 15px;padding:15px;background:#212133;box-shadow:0px 0px 5px rgba(0,0,0,0.5);text-align:center;}`}>
            
                    <div className = 'mat-icon'>
                        <img src={'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(talentUpMats_Books.name) + '.png'} alt={talentUpMats_Books.name}/>
                        <div className = 'mat-name'>{talentUpMats_Books.name}</div>
                    </div>
                    <div className = 'mat-icon'>
                        <img src={'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(talentUpMats_MobMats) + '.png'} alt={talentUpMats_MobMats}/>
                        <div className = 'mat-name'>{talentUpMats_MobMats}</div>
                    </div>
                    <div className = 'mat-icon'>
                        <img src={'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(talentUpMats_BossMats.name) + '.png'} alt={talentUpMats_BossMats.name}/>
                        <div className = 'mat-name'>{talentUpMats_BossMats.name}</div>
                    </div>
                    
                </MatIcons>

                
                <h2 className="title">{character.name}'s  Ascension Materials</h2>

                <table className="ascension">
                    <thead>
                        <tr>
                            <th>Ascension Lvl</th>
                            <th>Required Materials</th>
                            <th>Mora Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {character.ascension.map((item,index) =>{
                            let mat1ImgURL,mat2ImgURL,mat3ImgURL,mat4ImgURL
                            if(item.mat1) mat1ImgURL = 'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(item.mat1.name) + '.png'
                            if(item.mat2) mat2ImgURL = 'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(item.mat2.name) + '.png'
                            if(item.mat3) mat3ImgURL = 'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(item.mat3.name) + '.png'
                            if(item.mat4) mat4ImgURL = 'https://rerollcdn.com/GENSHIN/Farming/NEW/' + underscorize(item.mat4.name) + '.png'

                            return (
                                <tr key={index}>
                                    <td>
                                        { item.ascension }
                                    </td>
                                    <td>
                                        <MatIcons hide={true}>
                                            <div className = 'mat-icon'>
                                                <img src={ mat1ImgURL } alt={item.mat1.name}/>
                                                <div className = 'mat-name'>{item.mat1.name}</div>
                                                { item.mat1.amount }x
                                            </div>
                                            <div className = 'mat-icon'>
                                                <img src={ mat2ImgURL } alt={item.mat2?.name}/>
                                                <div className = 'mat-name'>{item.mat2?.name}</div>
                                                { item.mat2?.amount } {item.mat2 && 'x'}
                                            </div>
                                            <div className = 'mat-icon'>
                                                <img src={ mat3ImgURL } alt={item.mat3.name}/>
                                                <div className = 'mat-name'>{item.mat3.name}</div>
                                                { item.mat3.amount }x 
                                            </div>
                                            <div className = 'mat-icon'>
                                                <img src={ mat4ImgURL } alt={item.mat4.name}/>
                                                <div className = 'mat-name'>{item.mat4.name}</div>
                                                { item.mat4.amount }x
                                            </div>
                                            
                                        </MatIcons>
                                    </td>
                                    <td>
                                        { item.cost }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

                <h2 className="title">Talents</h2>
                <div className="talents">
                    {character.skills.map((item,index)=>
                        <div className="talent" key={index}>
                            <div className="name">
                                <h3>{item.name}</h3>
                                <p>{ item.type }</p>
                            </div>
                            <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                            <br/>
                            {item.modifiers && 
                                <div>
                                    <h3>Skill Attributes</h3>
                                    <br/>
                                    <table>
                                        <tbody>
                                            { item.modifiers?.map((_,i)=>
                                                <tr key={i}>
                                                    <td>{_.stat}</td>
                                                    <td>{_.value}</td>
                                                </tr>
                                            )} 
                                        </tbody>
                                    </table>
                                </div>
                            }
                        </div>
                    )} 
                </div>

                
                <h2 className="title">Passive Talents</h2>
                <div className="talents">
                    {character.passives.map((item,index)=>
                        <div className="talent" key={index}>
                            <div className="name">
                                <h3>{item.name}</h3>
                                <p>{ item.unlock ? 'Unlocked at: '+item.unlock : 'Unlocked at: lvl 1'}</p>
                            </div>
                            <div dangerouslySetInnerHTML={{__html:item.description}}></div>
                        </div>
                    )} 
                </div>

                <h2 className="title">{character.name}'s  constellations</h2>

                <Constellations>
                    {character.constellations.map((c,i)=>
                        <div key={i} className='constellation'>
                            <div className='const-number'>C{i+1}</div>
                            <h3>{c.name}</h3>
                            <p dangerouslySetInnerHTML={{__html:c.description}}></p>
                        </div>
                    )}

                </Constellations>

                
            </Container>
        </Layout>
    )
}

export default Character
