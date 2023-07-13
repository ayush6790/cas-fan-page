import React from 'react';
import styled from 'styled-components';
import { MDBBtn } from 'mdb-react-ui-kit';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  padding: 20px;
  height: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 9vh;
  }
`;

const Logo = styled.img`
  display: block;
  height: 50px;
  width: 50px;
  margin-right: 10px;
  color: transparent;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const Button = styled.button`
  margin: 2px;
  color: rgba(255, 255, 255,0.7);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  height: 50px;
  width: 100px;
  border-color: rgba(0, 0, 0, 0.2);
  border: 2px solid gray;
`;

const SearchInput = styled.input`
  border-radius: 10px;
  border: 2px solid gray;
  height: 50px;
  width: 75px;
  margin-top: 2px; 
  background-color: rgba(0, 0, 0, 0.2);
  color: gray;
  &::placeholder {
    color:gray;
    padding:0px 8px;

  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

export default function Header() {
    const handleButtonClick = (buttonName) => {
        console.log(`Button "${buttonName}" clicked!`);
        // Perform your desired action here
        if (buttonName === 'Home') {
            window.open('https://www.cigarettesaftersex.com/', '_blank');
        } else if (buttonName === 'Music') {
            window.open('https://www.cigarettesaftersex.com/lyrics-index', '_blank');
        }
        // else console.error('Unknown button');
        else alert('Unknown button');
      };
  return (
    <Container>
      <div>
        <Logo src="logo192.png" alt="logo goes here" />
      </div>
      <ButtonGroup>
        {/* <Button type="button">Home</Button>
        <Button type="button">Music</Button>
        <Button type="button">About us</Button>
        <Button type="button">Shows</Button> */}
        <Button type="button" onClick={() => handleButtonClick('Home')}>Home</Button>
        <Button type="button" onClick={() => handleButtonClick('Music')}>Music</Button>
        <Button type="button" onClick={() => handleButtonClick('About us')}>About us</Button>
        <Button type="button" onClick={() => handleButtonClick('Shows')}>Shows</Button>
      </ButtonGroup>
      <div>
        <SearchInput type="text" placeholder='Search' />
      </div>
    </Container>
  );
}

