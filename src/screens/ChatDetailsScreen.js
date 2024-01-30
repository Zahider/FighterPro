import { View, Text, Platform, Touchable, Image, TouchableOpacity, ImageBackground, FlatList, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon, EllipsisHorizontalIcon, FaceSmileIcon, PaperAirplaneIcon, PhotoIcon } from 'react-native-heroicons/outline';

const android = Platform.OS === "android";

export default function ChatDetailsScreen({route}) {
  const navigation = useNavigation();
  const {chat, imgUrl, name, age} = route.params;

  return (
    <SafeAreaView 
      className="justify-center items-center relative bg-white"
      style={{
        paddingTop: android ? hp(4) : 0,
    }}
    >

      {/*Header */}
      <View className="justify-between items-center flex-row w-full px-4 pb-2 border-b border-neutral-400">
      {/*Arrow */}
      
      <TouchableOpacity className="w-2/3 flex-row items-center"
        onPress={() => navigation.navigate("Chat")}
      >
        <ChevronLeftIcon size={hp(2.5)} color={"black"} strokeWidth={2}/>

        {/*Date  Avai */}
        <View className="border-2 rounded-full border-red-400 mr-2 ml-4">
          <Image source={imgUrl} 
            style={{
              width: hp(4.5),
              height: hp(4.5)
            }}
            className="rounded-full"
          />
        </View>

        <View className="justify-center items-start">
          <Text className="font-bold text-base">
            {name}
            {", "}
            {age}
          </Text>
          <Text className="text-xs text-neutral-400">You matched today</Text>
        </View>
     </TouchableOpacity>

     {/*Elipse Icon */}
      <View className="w-1/3 items-end">
        <View className="bg-black/5 rounded-full p-1">
          <EllipsisHorizontalIcon 
            size={hp(3)} 
            color={"black"} 
            strokeWidth={2}
          />
        </View>
      </View>
    </View>
              
      {/*Chat Details */}
      <View className="w-full h-full">
        <Text className="text-center text-neutral-400 pt-4">Today</Text>

        <FlatList 
          data={chat}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{
            paddingBottom: hp(15),
          }}
          renderItem={({item}) => (
            <View 
            style={{
              flexDirection: item.sender === "me" ? "row-reverse" : "row",
              padding: 10,
              paddingVertical: item.sender === "me" ? 13 : 3,
            }}
            >
            
              <View style={{
                  width: "auto",
                  maxWidth: "70%",
                }}
              >
                <View 
                  style={{
                    borderBottomRightRadius: item.sender === "me" ? 0 : 10,
                    borderBottomLeftRadius: item.sender === "me" ? 10 : 0,
                    backgroundColor: item.sender === "me" ? "#171717" : "#3b82f6",
                    padding: 10,
                    borderRadius: 10,
                  }}
                >
                  
                  <Text className="text-white text-base leading-5">
                    {" "}
                    {item.message}
                  </Text>
                </View>

                {item.sender === "me" && (
                      <Text className="text-xs font-semibold text-neutral-500 text-right">
                        {"Read"}
                        {item.timestamp}  
                      </Text>
                )}
              </View>

                
              </View>
          )}
        />
      </View>

      {/*Bottom Text Input and Icon*/}
      <View className="absolute flex-row justify-between items-center w-full px-2 pb-3 pt-2 bg-white bottom-6">
        <View className="flex-row justify-between items-center rounded-2xl bg-neutral-200 px-3 py-3 w-[85%]">
          <TextInput
            placeholder="Write your message here"
            placeholderTextColor={"gray"}
            style={{
              fontSize: hp(1.7),
              fontWeight: "medium",
            }}
          />

          <View className="flex-row justify-center items-center space-x-1">
            <PhotoIcon color={"gray"} strokeWidth={3} />
            <FaceSmileIcon size={hp(2.5)} color={"gray"} strokeWidth={4} />
          </View>
        </View>

        <View className="bg-blue-500 rounded-2xl py-3 w-[13%] justify-center items-center">
          <PaperAirplaneIcon color={"white"}/>
        </View>
      </View>
      </SafeAreaView>
  )
}