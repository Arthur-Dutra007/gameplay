import { StatusBar } from 'expo-status-bar';
import { Text, View,TextInput } from 'react-native';
import { stylesSignIn } from './styles';
import{ useState } from 'react';


export  function SignIn() {
  const [Text,setText] = useState();
  return (
    <View style={stylesSignIn.container}>
      <Text>digite alguma coisa.</Text>
      <TextInput style={stylesSignIn.TextInput} onChangeText={setText} /> 
      <StatusBar style="auto" />
      <Text>Você Digitou: {Text}</Text>
    </View>
  );
}


