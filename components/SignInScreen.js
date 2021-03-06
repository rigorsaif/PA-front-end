import React from "react";
import { AsyncStorage, Button, StyleSheet, View, TextInput } from "react-native";

class SignInScreen extends React.Component {
  state = {
    username: "",
    password: ""
  }
  static navigationOptions = {
    title: "sign in"
  };
  render() {
    return <View style={styles.container}>
        <TextInput title="username" placeholder="username" />
        <TextInput title="password" placeholder="password" secureTextEntry={true} />
        <Button title="Sign in!" onPress={this.signInAsync} />
      </View>;
  }

  signInAsync = async () => {
    await AsyncStorage.setItem("userToken", "abc");
    this.props.navigation.navigate("Form");
  };
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default SignInScreen;
