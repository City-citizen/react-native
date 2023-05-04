import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import LoginPage from "./components/pages/LoginPage";
import JoinMembershipPage from "./components/pages/JoinMembershipPage";
import IdPasswordFind from "./components/pages/IdPasswordFind";
import MainPage from "./components/pages/MainPage";
import MyPage from "./components/pages/MyPage";
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
            options={{ title: "CITY" }}
          />
           <Stack.Screen
            name="MyPage"
            component={MyPage}
            options={{ title: "CITY" }}
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
