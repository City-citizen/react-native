import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./components/pages/LoginPage";
import JoinMembershipPage from "./components/pages/JoinMembershipPage";
import IdPasswordFind from "./components/pages/IdPasswordFind";
import MainPage from "./components/pages/MainPage";
import MyPage from "./components/pages/MyPage";
import EditPage from "./components/pages/EditPage";
import SearchPage from "./components/pages/SearchPage";
import PasswordChange from "./components/pages/PasswordChange";
import Photoselect from "./components/pages/Photoselect";
import "react-native-gesture-handler";
import BoardList from "./components/pages/BoardList";
import Board from "./components/pages/Board";
import Addpost from "./components/pages/Addpost";
import Post  from "./components/pages/Post";
import ReportList from "./components/pages/ReportList";
import Report from "./components/pages/Report";
import axios from "axios";
import { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Mark from './components/pages/Mark';
import TimeTable from "./components/pages/TimeTable";
import Point from "./components/pages/Point";
import EachPoint from "./components/pages/EachPoint";
import License from "./components/pages/License";

const Stack = createStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LoginPage"
          screenOptions={{
            headerBackTitleVisible: false,
            headerStyle: { height: 120 },
          }}
        >
          <Stack.Screen
            name="LoginPage"
            component={LoginPage}
            options={{ title: "CITY" }}
          />
          <Stack.Screen
            name="JoinMembershipPage"
            component={JoinMembershipPage}
            options={{ title: "회원가입" }}
          />
          <Stack.Screen
            name="IdPasswordFind"
            component={IdPasswordFind}
            options={{ title: "아이디 비밀번호 찾기" }}
          />
          <Stack.Screen
            name="MainPage"
            component={MainPage}
            options={{title:'CITY', gestureEnabled:false }}
          />
           <Stack.Screen
            name="MyPage"
            component={MyPage}
            options={{ title: "내 정보" }}
          />
          <Stack.Screen
            name="EditPage"
            component={EditPage}
            options={{ title: "설정" }}
          />
           <Stack.Screen
            name="SearchPage"
            component={SearchPage}
            options={{ title: "검색" }}
          />
          <Stack.Screen
            name="PasswordChange"
            component={PasswordChange}
            options={{ title: "비밀번호 변경" }}
          />
           <Stack.Screen
            name="Photoselect"
            component={Photoselect}
            options={{ title: "프로필사진 변경" }}
          />
           <Stack.Screen
            name="BoardList"
            component={BoardList}
            options={{ title: "게시판 목록" }}
          />
          <Stack.Screen
            name="Board"
            component={Board}
            options={{ title: "게시물 목록" }}
          />
          <Stack.Screen
            name="Addpost"
            component={Addpost}
            options={{ title: "게시물 작성" }}
          />

          <Stack.Screen
            name="Post"
            component={Post}
            options={{ title: "게시물" }}
          />

          <Stack.Screen
            name="ReportList"
            component={ReportList}
            options={{ title: "신고게시판" }}
          />

          <Stack.Screen
            name="Report"
            component={Report}
            options={{ title: "신고게시물" }}
          />

          <Stack.Screen
            name="Mark"
            component={Mark}
            options={{ title: "보관함" }}
          />

           <Stack.Screen
            name="TimeTable"
            component={TimeTable}
            options={{ title: "시간표" }}
          />
          <Stack.Screen
            name="Point"
            component={Point}
            options={{ title: "포인트" }}
          />

          <Stack.Screen
            name="EachPoint"
            component={EachPoint}
            options={{ title: "포인트" }}
          />

          <Stack.Screen
            name="License"
            component={License}
            options={{ title: "자격증" }}
          />
         
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
