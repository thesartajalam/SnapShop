import { Alert, StyleSheet, View } from "react-native"
import AuthForm from "../components/Auth/AuthForm";
// import AsyncStorage from "@react-native-async-storage/async-storage"; // use this when you want to store data on device's memory
import { getDistance } from "geolib";
import { useLocationManager } from "../util/LocationManager";
import { useState } from "react";
import LoadingOverlay from "../components/UI/LoadingOverlay";
import { checkNearbyShops } from "../util/http"; // this will come in action when we'll navigate using the Geoapify places API data

const DUMMY_USER = {
    username: 'admin',
    password: '1234'
}

function LoginScreen({navigation}) {
    const [isLoading, setIsLoading] = useState(false);
    const {getLocation} = useLocationManager();

    async function loginHandler(credentials) {
        const {username, password} = credentials;
        
        if(username === DUMMY_USER.username && password === DUMMY_USER.password ){
            setIsLoading(true);
            try {
                // await AsyncStorage.setItem('UserCredentials', JSON.stringify(credentials));

                const userLocation = await getLocation();

                if(!userLocation) return;

                const {latitude, longitude} = userLocation;

                /*--- Use this for manual testing with hardcoded values for both within and outside 300 meters ---*/

                const WITH_IN_300M = { // ~268 meters
                    latitude: latitude + 0.002, 
                    longitude: longitude - 0.0015
                };


                const OUTSIDE_300M = { // ~590-600 meters
                    latitude: latitude + 0.005,  
                    longitude: longitude - 0.004, 
                };

                const distance = getDistance({latitude, longitude}, WITH_IN_300M);

                if(distance <= 300){
                    navigation.replace('Shop');
                }
                else{
                    navigation.replace('Home');
                }

                /*------------------------------------------------------------------------------------------------- */
                
                
                
                /*--- Use this If you want to navigate to ShopScreen if there is a shop under 300m in real as it uses 
                --- the real data from the GEOAPIFY Places API which helps us to know that is there any shop located under 
                --- our 300 meters radius ----------------------------------------------------------------------------*/


                // const hasShopNearby = await checkNearbyShops(latitude, longitude);
                
                // if(hasShopNearby){
                //     navigation.replace('Shop');
                // }
                // else{
                //     navigation.replace('Home');
                // }

                /*------------------------------------------------------------------------------------------------- */

            } catch (error) {
                setIsLoading(false);
                console.error(error);
                Alert.alert("Something went wrong", "Please try again", [{text: "Okay"}]);
            }
            setIsLoading(false);
        }
        else if(username.length === 0 || password.length === 0){
            Alert.alert("Credentials can't be empty", "Please enter your credentials, then Login", [{text: "Okay"}]);
        }
        else{
            Alert.alert('Wrong Credentials', 'Please use appropriate username and password', [{text: 'Okay'}]);
            return;
        }
    }

    if(isLoading){
        return <LoadingOverlay message="Loading Nearby Shops" size="large"/>
    }
    
    return <AuthForm onAuthenticate={loginHandler}/>; 
}

export default LoginScreen;

const styles = StyleSheet.create({
    OuterContainer: {
        flex: 1,
    }
});
