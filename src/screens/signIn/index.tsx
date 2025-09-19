import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput } from 'react-native';
import { stylesSignIn } from './styles';



export  function SignIn() {
  return (
    <View style={stylesSignIn.container}>
      <Text>digite alguma coisa.</Text>
      <TextInput style={{Width:200,height:50,borderWidth:2}}/> 
      <StatusBar style="auto" />
    </View>
  );
}


