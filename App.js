import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer } from "@react-navigation/native";
import LoginPage from './components/pages/LoginPage';
import JoinMembershipPage from './components/pages/JoinMembershipPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="LoginPage"
        screenOptions={{
          headerBackTitleVisible: false,
          headerStyle:{height:120,}        }}>
  <Stack.Screen name="LoginPage" component={LoginPage} options={{title: 'CITY'}}/>
  <Stack.Screen name="JoinMembershipPage" component={JoinMembershipPage} options={{title: 'CITY'}}/>

</Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
