import React, {useState, useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import {Context as AuthContext} from '../Context/authContext';


const SignupScreen = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {state, signup} = useContext(AuthContext);

  return (
      <View style={styles.container}>
        <Spacer>
            <Text h3>Sign up for a tracker</Text>
        </Spacer>

            <Input label={"Email"} value={email} onChangeText={setEmail} autoCapitalize='none' autoCorrect={false}/>
            <Spacer />
            <Input label={"Password"} value={password} onChangeText={setPassword} autoCapitalize='none' autoCorrect={false} secureTextEntry />
            <Spacer>
                <Button title={"Signup"} onPress={() => signup({ email, password })}/>
            </Spacer>
      </View>
  );
};

SignupScreen.navigationOptions = () => {
    return {
        header: null
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        marginBottom: 400
    }
});

export default SignupScreen;