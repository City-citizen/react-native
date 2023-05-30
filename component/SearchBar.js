import React from 'react'
// import SearchIcon from '@mui/icons-material/Search';
import styled from 'styled-components';
import Icon from 'react-native-vector-icons/FontAwesome';

const SearchInput = styled.input`
border: 0.3vh solid black;
border-radius: 8vh;
font-size: 2vh;
width: 80%;
height: 2.5vh;
display: block;
margin: 0 auto;
padding: 0.7vh;

`;

function SearchBar() {
  return (
    <>
    <div>
      <form action='' method='POST'>
          <div style={{position : "relative"}}>
              <SearchInput type='text' />
              <Icon name="search" size={20} color="#000" style={{position: "absolute", width: "3vh", top: "1vh", right: "10%"}} />
          </div>
      </form>
    </div>
    </>
  )
}

export default SearchBar