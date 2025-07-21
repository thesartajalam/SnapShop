import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";
import { useState } from "react";
import { Alert } from "react-native";

export function useLocationManager() {
    const [locationPermissionInformation, requestPermission] = useForegroundPermissions();
    // const [location, setLocation] = useState(null);
    const [hasPermission, setHasPermisson] = useState(false);

    async function verifyPermissions() {
        if(locationPermissionInformation.status === PermissionStatus.UNDETERMINED){
            const permissionResponse = await requestPermission();

            return permissionResponse.granted;
        }

        if(locationPermissionInformation.status === PermissionStatus.DENIED){
            Alert.alert("Insufficient Permissions!", "You need to grant location access to use this feature");
            return false;
        }
        return true;
    }

    async function getLocation() {
        await requestPermission();

        const permissionStatus = await verifyPermissions();
        setHasPermisson(permissionStatus);

        if(!permissionStatus) return null;

        try {
            const locationData = await getCurrentPositionAsync();
            const coords = {
                latitude: locationData.coords.latitude,
                longitude: locationData.coords.longitude

            }
            // setLocation(coords);
            return coords;
        } catch (error) {
            console.error("Failed to get location", error);
            Alert.alert("Error", "Could not get location. Try again!");
            return null;
        }
    }

    return {
        getLocation,
        hasPermission
    }
}