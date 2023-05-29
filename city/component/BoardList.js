import React from 'react';
import styled from 'styled-components';
import Header from './Header';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchBar from './SearchBar';
import ad from './adv.png';
import { useNavigation } from "@react-navigation/native";
// import { BrowserRouter, Routes, useNavigate, Route, Router, Link, useNavigation } from 'react-router-dom';
// import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BoardBox = styled.div`
border: 0.3vh solid black;
border-radius: 8vh;
font-size: 2vh;
width: 80%;
height: 2vh;
display: block;
margin: 0 auto 2vh auto;
padding: 1vh;
position: relative;
display: flex;
align-items: center;
font-weight: 500;
`;

const Ad = styled.img`
width: 90%;
padding: 2vh 0;
margin: 0 auto;
`;

function Board() {
  const navigation = useNavigation();
  const boards = [
    {id: 0, name: "University", link: "/board"},
    {id: 1, name: "Major city", link: "univ" },
    {id: 2, name: "맛집", link: "univ"},
    {id: 3, name: "고민", link: "univ"},
    {id: 4, name: "연애", link: "univ"},
    {id: 5, name: "노래추천", link: "univ"},
    {id: 6, name: "구인", link: "univ"}
];


  return (
    <>
    <Header />
    <SearchBar />
    <Ad src={ad}/>
      {boards.map((board) => (
        <BoardBox key={board.id} 
        onClick={() => navigation.navigate("Board")}>
          {board.name}
          {/* <Routes>
          <Route path={'/board'} element={<board.link />} />
          </Routes>
          <Link to={board.link}>{board.name}</Link> */}
          <Icon name="dots-vertical" size={20} color="#000" style={{position: "absolute", width: "3vh", right: "3%" }} />
        </BoardBox>
      ))}

    {/* </BrowserRouter> */}
    
    </>
  )
}

export default Board