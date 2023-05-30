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
import TimeTable from "./components/pages/TimeTable";
import Point from "./components/pages/Point";
import EachPoint from "./components/pages/EachPoint";
import License from "./components/pages/License";

import { createStackNavigator } from "@react-navigation/stack";

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
