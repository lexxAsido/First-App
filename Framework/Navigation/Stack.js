import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../Screens/Intro';
import Login from '../Screens/Login';
import Profile from '../Screens/Profile';
import SignUp from '../Screens/SignUp';
import { News } from '../Screens/News';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
                <Stack.Screen name="News" component={News} options={{headerShown:false}}/>
                <Stack.Screen name="Profile" component={Profile} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}