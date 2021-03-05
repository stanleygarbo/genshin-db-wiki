import { graphql, useStaticQuery, Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 100px 0px 100px 0px;

    .img-container{
      width: 100%;
      height: 100%;
      z-index: -1;
      position: absolute;
      top: 0;
      left: 0;
      background: url('https://images2.alphacoders.com/111/1110623.png');
      background-repeat:no-repeat;
      background-position:center;

      &::before {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        content: "";
        background: linear-gradient(
          180deg,
          rgba(28,27,41,.90),
          rgba(28,27,41,.60)
        );
        // backdrop-filter: blur(3px);
      }
    }

    .greetings{
      width: 80%;
      text-align: center;
    }
    .greetings h1 {
      font-size: 24px;
      margin-bottom: 20px;
      color: #ddd;
    }
    .greetings h2 {
      font-size: 50px;
      color: #fff;
    }
  }
  
  .options {
    max-width: 600px;
    padding: 40px 0px 0px 0px;
    display: flex;
    justify-content: space-around;
    flex-wrap:wrap;
    /* background-color: #0e1032; */
    color: #fff;
  }
  .option {
    padding: 0;
    width: 200px;
    text-align: center;
    position: relative;
    background-image: url(${props=>props.buttonImg});
    background-size: 100% 100%;
    cursor: pointer;
    transition: 0.3s;
  }

  .option:hover {
    transform: scale(1.05);
  }

  .option h3 {
    color: #ffdc63;
    font-weight: 100;
    padding: 10px;
  }

  @media(max-width:883px){
    .greetings h1 {
      font-size:15px;
      font-weight:300;
    }
    .greetings h2 {
      font-size:30px;
      font-weight:500;
    }
  }

  @media(max-width:600px){
    .options > *{
      margin:10px;
    }
  }
`


const FirstSection = () => {

  const data = useStaticQuery(graphql`
    {
      buttonImg: file(relativePath:{eq:"button.svg"}){
        publicURL
      }
    }
  `)

  return (
    <Wrapper buttonImg = {data.buttonImg.publicURL}>
      <div className = "img-container">
      </div>

      <div className="greetings">
          <h1>Genshin Impact Item infos</h1>
          <h2>
              Welcome to Genshin-DB! Get all the Info you need about
              Genshin Impact items
          </h2>
      </div>

      <div className="options">
          <Link to="/artifacts">
              <div className="option artifacts">
                  <h3>Artifacts</h3>
              </div>
          </Link>
          <Link to="/weapons">
              <div className="option weapons">
                  <h3>Weapons</h3>
              </div>
          </Link>
          <Link to="/gastronomy">
              <div className="option search">
                  <h3>Gastronomy</h3>
              </div>
          </Link>
        </div>
    </Wrapper>
  )
}

export default FirstSection
