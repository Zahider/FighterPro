import { View, Text, Platform, Image, Touchable, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercentageToDP } from 'react-native-responsive-screen';
import { profile } from "../../assets/images";
import { BellIcon } from 'react-native-heroicons/outline';
import Carousel from 'react-native-snap-carousel';
import { datesData } from '../constants';
import DatesCard from '../component/DatesCard';

const android = Platform.OS === "android";
const {width, height} = Dimensions.get('window')

export default function HomeScreen() {
  return (
    <SafeAreaView 
      className= "bg-white flex-1 justify-between"
      style={{
        paddingTop: android ? heightPercentageToDP(2) : 0,
      }}
    >

      {/**Header */}
      <View className="w-full flex-row justify-between items-center px-4 mb-8">
        {/*Image */}
        <View className="rounded-full items-center justify-center">
          <Image
            source={profile}
            style={{
              width: heightPercentageToDP(4.5),//profile logo width
              height: heightPercentageToDP(4.5),//profile logo height
              resizeMode: "cover",
            }}
            className="rounded-full"
          />
        </View>

          {/*Brand Namd */}
          <View>
            <Text className="text-xl font-semibold text-center uppercase">
              Fister Pro
            </Text>
          </View>

          {/**Bell Icon */}
          <View className="bg-black/10 p-2 rounded-full items-center justify-center">
              <TouchableOpacity>
                <BellIcon
                  size={25} strokeWidth={2} color="black"     
                />
              </TouchableOpacity>
          </View>

      </View>

      {/**Carousel */}
      <View className="pb-4">
        <View className="mx-4 mb-4">
          <Text className="capitalize text-2xl font-semibold"
          style={{
            fontFamily: "PlayBold",
          }}>
            Find your next opponent
          </Text>
        </View>
        
        <View>
          <Carousel data={datesData} 
            renderItem={({item}) => <DatesCard item={item}/>}
            firstItem={1}
            inactiveSlideScale={0.86}
            inactiveSlideOpacity={0.6}
            sliderWidth={width}
            itemWidth={width * .8}
            slideStyle={{display: "flex", alignItems: "center"}}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}