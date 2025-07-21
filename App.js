import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import ShopScreen from './screens/ShopScreen';
import HomeScreen from './screens/HomeScreen';
import { Colors } from './constants/styles';
import CustomHeader from './components/UI/CustomHeader';

const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <>
    <StatusBar style='light'/>
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{
        // headerShown: false,
        // contentStyle: {backgroundColor: "#FFFDF6"}
        contentStyle: {backgroundColor: Colors.softIvory}
      }}
      >
        <Stack.Screen name='Login' component={LoginScreen} 
        options={{
          header: () => (
            <CustomHeader title="Please Login" showLogout={false} spacerWidth={50}/>
          )
        }}
        /> 
        <Stack.Screen name='Shop' component={ShopScreen} 
        options={{
          header: () => (
            <CustomHeader title="Nearby Shops in Your Area" spacerWidth={100}/>
          )
        }}
        />
        <Stack.Screen name='Home' component={HomeScreen} 
        options={{
          header: () => (
            <CustomHeader title="Home Screen" spacerWidth={100}/>
          )
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white'
  }
});
