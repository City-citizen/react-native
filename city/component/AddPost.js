import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styled from 'styled-components';
import { useNavigation } from "@react-navigation/native";

const TitleInput = styled.input`
border: 0.3vh solid black;
border-radius: 1vh;
font-size: 2vh;
width: 80%;
height: 2.5vh;
display: block;
margin: 2vh auto;
padding: 0.7vh;
`;

const ContentInput = styled.textarea`
border: 0.3vh solid black;
border-radius: 1vh;
font-size: 2vh;
width: 80%;
height: 50vh;
display: block;
margin: 0 auto;
padding: 0.7vh;
`;

const Button = styled.button`
border: 0.3vh solid black;
border-radius: 1.5vh;
font-size: 1.7vh;
width: 20vw;
height: 3vh;
font-weight: 700;
margin: 2vh;
`;

function AddPost() {
    const navigation = useNavigation();

    const [inputs, setInputs] = useState({
        title: '',
        contents: '',
    });

    const { title, contents } = inputs;

    const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        })
      };

      useEffect(() => {
        TitleInput.current.focus();
    }, []);

      const onKeyUp = (e) => {
        if(e.key === 'Enter') {
            ContentInput.current.focus();
        }
    }

  return (
    <>
    <form action='' method='post'>
        <TitleInput 
        name="title" 
        value={title}
        placeholder='제목'
        onKeyUp={onKeyUp} 
        onChange={onChange}
        />
        <ContentInput 
        name="contents" 
        value={contents}
        placeholder='내용'
        />
        <div style={{display:"flex", justifyContent:"center"}}>
            <Button type='submit'>작성</Button>
            <Button type='submit'>취소</Button>
        </div>
    </form>
    </>
  )
}

export default AddPost