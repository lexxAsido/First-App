import { Image, ImageBackground, ScrollView, Text, View, StyleSheet, Linking } from 'react-native';

export  function News() {
  
  const handleReadMore = () => {
    Linking.openURL('https://punchng.com/nigerians-react-as-verydarkman-shares-another-alleged-call-recording-of-bobrisky/#:~:text=Bobrisky,%20on%20Monday,%20found%20himself%20at%20the%20centre%20of%20another');
  };
  const handleReadMore2 = () => {
    Linking.openURL('https://www.tvcnews.tv/2024/10/breaking-fubara-allegedly-voids-police-attempt-to-seal-off-rsiec-headquarters/#:~:text=Rivers%20State%20governor,%20Siminalayi%20Fubara%20said%20he%20foiled%20an');
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ImageBackground source={require("./assets/lexmedia.png")} style={{ width: "100%", flex: 1 }}>
        <View style={{ padding: 40, paddingHorizontal: 5, backgroundColor: "#0a020ade" }}>
          <View style={{ backgroundColor: "#0e0f0e", shadowColor: "#a8bd33ff", shadowRadius: 9, shadowOpacity: 0.25, borderRadius: 20, marginVertical: 10 }}>
            <Text style={{ color: "cyan", fontSize: 35, textAlign: "center", fontWeight: "800"}}>LEXX MEDIA</Text>
          </View>

          <View style={{ margin: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: "black", fontSize: 30, backgroundColor: "cyan", width: 220, borderRadius: 20, marginVertical: 10, paddingHorizontal: 6 }}>Entertainment</Text>

            <View style={{ flex: 1 }}>
              <Text style={{ color: "#f8f1f1", fontWeight: 600, fontSize: 17 }}>
                VeryDarkBlackMan releases another voice recording of Bobrisky😊
              </Text>
              <Image source={require("./assets/bob.jpg")} style={{ width: "100%", height: 230, marginVertical: 20 }} />
              <Text style={{ color: "white", fontWeight: 500, fontSize: 18 }}>
                Nigerians have taken to social media to express their thoughts on the latest leaked call recording allegedly featuring controversial crossdresser,
                Idris Okuneye, popularly known as Bobrisky.
                {'\n'}{'\n'}
                {/* represents a line break */}
                Bobrisky, on Monday, found himself at the centre of another controversy following the release of an alleged call recording by social media influencer, Martins Otse, aka VeryDarkMan.
                {'\n'}{'\n'}
                In the recording, Bobrisky purportedly admitted to not being in prison but rather in a well-furnished apartment near the prison, amongst other claims.
              </Text>

              <View>

                <Text
                  style={{ color: "black", marginTop: 10, fontWeight: "bold", backgroundColor: "yellow", textAlign: "center", marginHorizontal: 30, paddingVertical: 5 ,borderRadius: 20 }}

                  onPress={handleReadMore}>
                  ReadMore
                </Text>
              </View>
            </View>
          </View>

          <View style={{ marginVertical: 4 }}>
            <Text style={{ fontSize: 20, fontWeight: 800, color: "black", fontSize: 30, backgroundColor: "cyan", width: 210, borderRadius: 20, marginVertical: 10, padding: 2 }}>Politics Today</Text>
            <Image source={require("./assets/fubara.jpg")} style={{ width: "100%", height: 230, marginVertical: 20 }} />
            <Text style={{ color: "white", fontWeight: 500, fontSize: 18 }}>
              The incident led to a faceoff between the Governor, his supporters and suspected police officers in the early hours of the morning.

              The Governor said he stormed the RSIEC office after getting reports that a new team of police officers had arrived to take over the complex on Aba Road in Port Harcourt.

              Speaking in front of the RSIEC Office, Gov Fubara condemned the conduct of the policemen accusing them of acting out a script from his political opponents.
            </Text>

            <View>

              <Text
                style={{ color: "black", marginTop: 10, fontWeight: "bold", backgroundColor: "yellow", textAlign: "center", marginHorizontal: 30, paddingVertical: 5, borderRadius: 10 }}

                onPress={handleReadMore2}>
                ReadMore
              </Text>
            </View>

          </View>

          <Image source={require("./assets/manu.jpeg")} style={{ width: "100%", height: 230, marginVertical: 20 }} />
          <Image source={require("./assets/ReactN2.png")} style={{ width: "100%", height: 230, marginVertical: 20 }} />

        </View>
      </ImageBackground>
    </ScrollView>
  );
}
