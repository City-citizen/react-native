import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

// import HomeIcon from '@mui/icons-material/Home';
// import PersonIcon from '@mui/icons-material/Person';
// import TodayIcon from '@mui/icons-material/Today';
// import ListIcon from '@mui/icons-material/List';
// import SavingsIcon from '@mui/icons-material/Savings';

const Nav = styled.div`
background-color: #f2f2f2;
position: fixed;
left: 0;
right: 0;
bottom: 0px;
width: 100%;
height: 3vh;
padding: 2vh 0;
text-align: center;
align-items: center;
display: flex;
justify-content: space-evenly;
`;


function NavBar() {
  return (
    <>
    <Nav>
      <Icon name="list" size={20}/>
      <Icon name="home" size={20} />
      <Icon name="dollar" size={20}  />
      <Icon name="people" size={20}  />
      </Nav>
    </>
  )
}

export default NavBar;