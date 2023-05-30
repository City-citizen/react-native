import React from 'react';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';
import AddPost from './AddPost';
import { useNavigation } from "@react-navigation/native";


const Logo = styled.h1`
font-size: 2.7vh;
font-weight: 700;
padding: 1.5vh;
margin: 0;
margin-right: auto;
`;

const IconBox = styled.div`
/* margin-left: auto; */
height: 5.8vh;
display: flex;
align-items: center;
`;

function Header() {
  const navigation = useNavigation();

  return (
    <>
    <div style={{display: "inline-flex"}}>
    <Logo>CITY</Logo>
    <IconBox>
        <Icon name="bell" size={20} style={{padding: "2vh"}}/>
    </IconBox>
    </div>
    </>
  )
}

export default Header