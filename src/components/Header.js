import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 140px;
  background-color: rgba(0, 0, 0, 0.99);
  padding: 9px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 9vh;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
   border-bottom: 2px solid gray;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  margin: 2px;
  color: rgba(255, 255, 255, 0.7);
  background-color: rgba(0, 0, 0, 0);
  border-radius: 5px;
  height: 50px;
  width: 100px;
  border-color: rgba(0, 0, 0, 0.2);
  border: none !important;
`;

// const SearchInput = styled.input`
//   border-radius: 10px;
//   border: 2px solid gray;
//   height: 50px;
//   width: 75px;
//   margin-top: 2px;
//   background-color: rgba(0, 0, 0, 0.2);
//   color: gray;
//   &::placeholder {
//     color:gray;
//     padding:0px 8px;

//   @media (min-width: 768px) {
//     margin-top: 0;
//   }
// `;

export default function Header() {
  const navigate = useNavigate();
 
    return (
      <>   
        <Container>
          <div className="headerComp">
            <div className="headerContent">
              <ButtonGroup>
                {/* <Button type="button">Home</Button>
        <Button type="button">Music</Button>
        <Button type="button">About us</Button>
        <Button type="button">Shows</Button> */}
                <Button type="button" onClick={() => navigate("/")}>
                  Home
                </Button>
                <Button type="button" onClick={() => navigate("/music")}>
                  Music
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/about")}
                >
                  About us
                </Button>
                <Button
                  type="button"
                  onClick={() => navigate("/shows")}
                >
                  Shows
                </Button>
              </ButtonGroup>
            </div>
            {/* <div>
        <SearchInput type="text" placeholder='Search' />
      </div> */}
          </div>
        </Container>  
        {/* <div className='forAddingImg'><br /> <br /> <br /> <br /> <br /> <br /> 
    <br /> <br /> <br /> <br /> <br /> <br /> <br /><br /> <br /> <br /> <br /> <br /> <br /> <br />
    "Indulge in the ethereal melodies and intimate lyricism of Cigarettes After Sex, a mesmerizing American ambient pop band hailing from El Paso. Immerse yourself in their atmospheric soundscapes and let their music transport you to a world of emotional depth and introspection. 

    </div> */}
      </>
    );
  };

