import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { profileData } from '../constants';
import { CameraIcon } from 'react-native-heroicons/outline';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function ProfileScreen() {

  const data = profileData[0];

  return (
    <ScrollView className="relative bg-white flex-1"
    contentContainerStyle={{
      paddingBottom: hp(5),
    }}
    >

      <View>
        {/*Image */}
        <Image 
          source={data.imgUrl}
          style={{
            width: wp(100),
            height: hp(60),
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
          }}
        />
      </View>


      {/*Header */}
      <View className="w-full absolute flex-row justify-end items-center pt-10">
        <View className="pt-2 rounded-full bg-black/40 mr-5 justify-between">
          <CameraIcon size={hp(3.5)} color={"white"} strokeWidth={1.5}/>
        </View>
      </View>

      {/*Bio */}
      <View className="w-full justify-start items-start px-6 space-y-4 mt-6">
        <View className="flex-row space-x-2 justify-between w-full items-center">
          <View className="flex-row">
            <Text className="text-black text-center font-bold text-xl">
              {data.name}
              {", "}
            </Text>
            <Text className="text-black text-center font-bold text-xl">
              {data.age}
              </Text>
          </View>

          <Text>Edit</Text>
        </View>

        {/*Hobbies*/}
        <View>
          <View className="flex-row">
            { data.hobbies?.map((hobby, index) => (
                <View 
                  key={index}
                  style={{
                    borderRadius: 20,
                    padding: 5,
                    paddingHorizontal: 10,
                    marginRight: 5
                  }}
                  className="bg-[#d3d3d3]"
                >
                  <Text className="text-black/70">{hobby}</Text>
                </View>
            ))}
          </View>

          {/*User bio */}
          <Text className="uppercase font-semibold text-neutral-500 tracking-wider mt-5 mb-1">Bio</Text>

          <Text className="font-medium text-black/80 text-left text-sm">{data.bio}</Text>
        </View>
      </View>
    </ScrollView>
  )
}