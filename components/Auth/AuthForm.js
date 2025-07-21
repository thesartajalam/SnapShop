import { StyleSheet, View } from "react-native"
import Input from "./Input";
import { useState } from "react";
import Button from "../UI/Button";
import { Colors } from "../../constants/styles";

function AuthForm({onAuthenticate}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function updateInputValueHandler(inputType, enteredValue) {
        switch(inputType){
            case 'username':
                setUsername(enteredValue.trim());
                break;
            case 'password':
                setPassword(enteredValue.trim());
                break;
        }
    }

    function onSubmitHandler() {
        onAuthenticate({username, password});
        setUsername("");
        setPassword("");
    }
    
    return <View style={styles.authContent}>
        <Input label="Enter your Username" onUpdateValue={updateInputValueHandler.bind(this, 'username')} value={username}/>
        <Input label="Password"onUpdateValue={updateInputValueHandler.bind(this, 'password')} value={password}/>
        <View style={styles.buttons}>
            <Button onPress={onSubmitHandler}>Login</Button>
        </View>
    </View>
}

export default AuthForm;

const styles = StyleSheet.create({
    authContent: {
    marginTop: 150,
    marginHorizontal: 32,
    padding: 16,
    borderRadius: 8,
    // backgroundColor: "#164B60",
    backgroundColor: Colors.oceanBlue,
    elevation: 5,
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    marginLeft: 35
  },
    buttons: {
    marginBottom: 4,
  },
});