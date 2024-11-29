import { useEffect, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { StackNavigator } from './Framework/Navigation/Stack';
import { AppProvider } from './Framework/Component/globalVariables';

// Fonts
import { Pacifico_400Regular } from "@expo-google-fonts/pacifico";
import {
  Montserrat_100Thin, Montserrat_200ExtraLight, Montserrat_300Light, Montserrat_400Regular,
  Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold, Montserrat_800ExtraBold, Montserrat_900Black
} from "@expo-google-fonts/montserrat";
import { Profile } from "./Framework/Screens/Profile";
import { EditProfile } from "./Framework/Screens/EditProfile";
import { Preloader } from "./Framework/Component/preloader";
import { News } from "./Framework/Screens/News";
import { PostNews } from "./Framework/Screens/PostNews";



// Prevent splash screen from hiding automatically
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Load fonts
        await Font.loadAsync({
          Pacifico_400Regular,
          Montserrat_100Thin,
          Montserrat_200ExtraLight,
          Montserrat_300Light,
          Montserrat_400Regular,
          Montserrat_500Medium,
          Montserrat_600SemiBold,
          Montserrat_700Bold,
          Montserrat_800ExtraBold,
          Montserrat_900Black,
        });

        // Simulate a delay for any other preloading
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // While loading, keep the splash screen
  }

  return (
    <AppProvider>
      <StackNavigator />
      <Preloader/>
      
      
      
    </AppProvider>
  );
}
