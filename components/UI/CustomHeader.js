import { SafeAreaView, StyleSheet, View, Text, Platform, StatusBar, Pressable } from "react-native";
import LogoutButton from "./LogoutButton";
import { Colors } from "../../constants/styles";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function CustomHeader({title, showLogout = true, spacerWidth}) {
    const navigation = useNavigation();

    // Will be used when We'll use AsyncStorage for subsequent active login and logout
    // and can also store the the authToken for getting access to the protected resources
    // async function logOutHandler() {
    //     try {
    //         await AsyncStorage.removeItem('UserCredentials');
    //         navigation.replace('Login');
    //     } catch (error) {
    //         Alert.alert('Logout Failed', 'Something went wrong!');
    //     }
    // }

    function logOutHandler() {
      navigation.replace('Login');
    }

    return <SafeAreaView style={styles.safeArea}>
        <View style={styles.header}>
            <View style={{width: spacerWidth}}/> 
            <Text style={styles.title}>{title}</Text>
            <View style={styles.right}>
                {showLogout && 
                <LogoutButton onPress={logOutHandler} />
                }
            </View>
        </View>
    </SafeAreaView>
}

export default CustomHeader;

const styles = StyleSheet.create({
    safeArea: {
    // backgroundColor: Colors.primary500,
    // backgroundColor: "#A0C878",
    backgroundColor: Colors.leafGreen,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
  header: {
    height: 56,
    // backgroundColor: "#A0C878",
    backgroundColor: Colors.leafGreen,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  title: {
    flex: 1,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 40,
    fontFamily: "sans-serif-condensed" 
  },
  right: {
    // width: 40,
    marginRight: 2,
    alignItems: 'flex-end',
  },
  logoutButton: {
  padding: 8,
}
});