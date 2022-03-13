import {createDrawerNavigator} from "@react-navigation/drawer"
import BottomTabNavigator from "./BottomTabNavigator_c81"
import Profile from "../screens/Profile"

const Drawer = createDrawerNavigator();

const DrawerNavigator = () =>{
    return(
        <Drawer.Navigator>
            <Drawer.Screen name = 'home' component = {BottomTabNavigator}/>
            <Drawer.Screen name = 'profile' component = {Profile}/>
        </Drawer.Navigator>
    )
}
export default DrawerNavigator