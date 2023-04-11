import { useNavigation } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput,TouchableOpacity, View ,Image} from 'react-native';

export default function LoginPage() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={{
          width:'100%',
          height:'100%',
          position: 'absolute',
          bottom:-55,
        }}
        source={require("../img/backgroundimg.png")}
        resizeMode='cover'/>
      <Text style={{ color: 'white', fontSize: 70 }}>CITY</Text>
      <TextInput
        style={styles.input}
        placeholder="ID"
        placeholderTextColor="white"
      />
      <TextInput
        style={styles.input}
        placeholder="PASSWORD"
        placeholderTextColor="white"
        secureTextEntry={true}
      />
     <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={{ color: 'white' }}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}
        onPress={() => {navigation.navigate('JoinMembershipPage')}}
        >
          <Text style={{ color: 'white' }}>회원가입</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.button2}>
          <Text style={{ color: 'white' }}>아이디 비밀번호 찾기</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    width: '40%',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    color: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 10,
    
  },
  button: {
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: '18%',
    alignItems: 'center',
  },
  button2:{
    backgroundColor: 'darkblue',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
    width: '40%',
    alignItems: 'center',
  },
});