import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native'
import React from 'react' 
import { useCallback } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen";
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ArrowUpRightIcon } from "react-native-heroicons/outline";
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {

  const navigation = useNavigation();
  const [fontsLoaded, fontError] =useFonts({
      PlayBold: require("../fonts/Play-Bold.ttf"),
      PlayRegular: require("../fonts/Play-Regular.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError){
        await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded){
    return null;
  }


  return (
    <View onLayout={onLayoutRootView} className="flex-1" style={{ width: wp(100) }}>
      <View className="justify-center items-center" style={{ width: wp(100), height: hp(100) }}>
  
        {/* Boxing Pic Image "HeartIcon.png" */}
        <View className="justify-center items-center p-0" style={{ width: wp(100), marginBottom: hp(2) }}>
          <Image
            source={require("../../assets/HeartIcon.png")}
            style={{
              width: wp(100),
              height: hp(50), // Adjust the height as needed
              resizeMode: "contain",
            }}
          />
        </View>
  
        {/* Welcome Text */}
        <View className="w-full p-6 px-10 mb-4">
          <Text className="font-semibold tracking-widest leading-9" style={{ fontSize: wp(10), fontFamily: "PlayBold" }}>
            Fighting
          </Text>
  
          <Text className="tracking-widest w-[70%] leading-none" style={{ fontSize: wp(10), fontFamily: "PlayRegular" }}>
            Made Accesible for You
          </Text>
  
          <Text className="text-ray-800 leading-6 tracking-wider -[70%] mt-2" style={{ fontSize: wp(4), fontFamily: "PlayRegular" }}>
            Ready for a Knuckle Sandwich?
          </Text>
        </View>
            
        {/*Touchable Button */}
        <View className="w-full px-10">
          <TouchableOpacity 
           className="bg-blue-600 px-4 py-4 rounded-x1 flex-row justify-center items-center w-[45%]"
           onPress={() => 
            navigation.navigate("HomeTabs")
            }
          >
            <Text className="text-white font-bold mr-2" 
            style={{ 
              fontSize: wp(4), 
              fontFamily: "PlayBold" }}
            >
              Let's Start
            </Text>
            <ArrowUpRightIcon color={"white"} size={20} strokeWidth={2.5} />
          </TouchableOpacity>
        </View>
  
      </View>
    </View>
  );
  
}