import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import ad from './adv.png';
import Header from './Header';
import SearchBar from './SearchBar';
import { useNavigation } from "@react-navigation/native";
import { useState, useCallback } from 'react';

const Ad = styled.img`
width: 90%;
padding: 2vh 0;
margin: 0 auto;
`;

const PostBox = styled.div`
width: 90%;
border-bottom: 1px solid #000;
margin-bottom: 1.5vh;
padding: 1vh 0;
margin: 0 auto;
`;

const BoardBox = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
`;

const PostTitle = styled.div`
font-size: 1.9vh;
font-weight: 700;
margin-left: 2vh;
`;

const PostContent = styled.div`
margin-left: 2vh;
`;


function Board() {
  const navigation = useNavigation();
  const post = [
    {id:1, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:2, comment: 4},
    {id:2, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:4, comment: 7},
    {id:3, title:"개굴개굴", content:"개굴개룰개루개룩ㄹ", good:5, comment: 10}
  ]

  const [isPost, setIsPost] = useState(false);
  const [postList, setPostList] = useState([]);

  const addPost = useCallback(() => {
    setIsPost(true),
    setPostList((postList) => [
      ...postList, {id:1, title:'개굴개굴개구리', content:"개굴개굴개굴", good: 2, comment: 2},
    ]);
  }, [postList]);

  return (
    <>
    <Header />
    <SearchBar />
    <Ad src={ad}/>
    <button onClick={addPost}>추가</button>
    <BoardBox>
      {isPost ? (
        <>
        {postList.map((p) => (
          <PostBox>
          <PostTitle>{p.title}</PostTitle>
          <PostContent>{p.content}</PostContent>
          <div style={{ position:"relative"}}>
          <Icon name="thumb-up" size={"2vh"} style={{position:"absolute", right: "16vw", bottom: "1vh"}}/>
          <div style={{position:"absolute", right: "13vw", bottom: "1vh"}}>{p.good}</div>
          <Icon name="comment-processing" size={"2vh"} style={{position:"absolute", right: "5vw", bottom: "1vh"}}/>
          <div style={{position:"absolute", right: "2vw", bottom: "1vh"}}>{p.comment}</div>
          </div>
        </PostBox>
        ))}
      </>
      ) : (
        <p>아직 글이 없음</p>
      )}
    </BoardBox>
    </>
  )
}

export default Board;
