import { createStackNavigator } from '@react-navigation/stack';
import Intro from '../Screens/Intro';
import Login from '../Screens/Login';
import SignUp from '../Screens/SignUp';
import { News } from '../Screens/News';
import { NavigationContainer } from '@react-navigation/native';
import { ForgotPassword } from '../Screens/ForgotPassword';
import { Profile } from '../Screens/Profile';
import { EditProfile } from '../Screens/EditProfile';
import { PostNews } from '../Screens/PostNews';
import { Politics } from '../Screens/Politics';
import { Sport } from '../Screens/Sport';
import { Entertainment } from '../Screens/Entertainment';




const Stack = createStackNavigator();

export function StackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Intro" component={Intro} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
                <Stack.Screen name="SignUp" component={SignUp}  options={{headerShown:false}}/>
                <Stack.Screen name="News" component={News} options={{headerShown:false}}/>
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{headerShown:false}}/>
                <Stack.Screen name="Profile" component={Profile} options={{title: "profile"}} />
                <Stack.Screen name="EditProfile" component={EditProfile} />
                <Stack.Screen name="Entertainment" component={Entertainment} />
                <Stack.Screen name="Sport" component={Sport} />
                <Stack.Screen name="Politics" component={Politics} />
                <Stack.Screen name="PostNews" component={PostNews} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}