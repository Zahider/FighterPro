//import user pictures
import {
    profile,
    user1,
    user2,
    user3,
    user4,
    user5,
    user6,
    user7,
    user8,
} from "../../assets/images";

//import user account details
export const userData = [
    {
        id: 1,
        name: "Aiman",
        age: 24,
        hobbies: ["Fishing", "Capping", "Arguing", "Religion Talk"],
        fightStyle: "Kickboxing",
        bio: "If you beat me we go to Tobermory this year",
        distance: "London, Ontario",
        imgPath: user1,
    },
    {
        id: 2,
        name: "Dani",
        age: 24,
        hobbies: ["Cars", "Coding", "Binbaz", "Bailing on vacation plans"],
        fightStyle: "Boxing",
        bio: "Holler if you need wood from Home Depot",
        distance: "Ajax, Ontario",
        imgPath: user2,
    },
    {
        id: 3,
        name: "Saroash",
        age: 24,
        hobbies: ["Cryptocurrency", "Robbing elderly  women", "CS:GO", "Gym/Nutrition"],
        fightStyle: "Boxing",
        bio: "Lmk if you need security yea?",
        distance: "Ajax, Ontario",
        imgPath: user3,
    },
    {
        id: 4,
        name: "Rabih",
        age: 24,
        hobbies: ["Hunting", "Cars", "Arguing", "Volleyball"],
        fightStyle: "Brazilian Jiu Jitsu",
        bio: "Idk if I can do this weekend, lemme call you back in 5 mins",
        distance: "Ajax, Ontario",
        imgPath: user4,
    },
    {
        id: 5,
        name: "Siear",
        age: 25,
        hobbies: ["Soccer", "Snowboarding", "Family time"],
        fightStyle: "Kung-Fu",
        bio: "Imma be back Friday night styll",
        distance: "Kingston, Ontario",
        imgPath: user5,
    },
    {
        id: 6,
        name: "Ammar",
        age: 26,
        hobbies: ["Bodybuilding", "Philosphy", "Anime", "Cryptocurrency"],
        fightStyle: "Muay-Thai",
        bio: "Welcome to Retraine",
        distance: "Pickering, Ontario",
        imgPath: user6,
    },
    {
        id: 7,
        name: "Emran",
        age: 25,
        hobbies: ["Outdoors", "Soccer", "Religion Talk"],
        fightStyle: "Boxing",
        bio: "Dont be pzzy!",
        distance: "Ajax, Ontario",
        imgPath: user7,
    },
    {
        id: 8,
        name: "Harun",
        age: 24,
        hobbies: ["Hockey", "Motorcycles", "Cars", "Boston Pizza boys night"],
        fightStyle: "Resurgence",
        bio: "Did I hear someone say motorcycle??",
        distance: "Ajax, Ontario",
        imgPath: user8,
    },
];

//import chat details
export const chatData = [
    {
      id: 1,
      name: "Aiman",
      imgUrl: user1,
      age: 23,
      isOnline: true,
      lastMessage:
        "That sounds like a lot of fun. Would you like to go together sometime?",
      date: "2023-10-15",
      timeSent: "5 mins",
      chat: [
        {
          sender: "me",
          message: "Hi there! How's it going?",
          timestamp: "10:00 AM",
        },
        {
          sender: "Aiman",
          message: "I am doing great, thanks!",
          timestamp: "10:05 AM",
        },
        {
          sender: "me",
          message: "Have any exciting plans for the weekend? 😊",
          timestamp: "10:10 AM",
        },
        {
          sender: "Aiman",
          message: "Yes, I'm thinking of going hiking. 🏞️ What about you?",
          timestamp: "10:15 AM",
        },
        {
          sender: "me",
          message: "That sounds amazing! I might just tag along. 🥾",
          timestamp: "10:20 AM",
        },
        {
          sender: "Aiman",
          message: "That would be great! The more, the merrier. 🌟",
          timestamp: "10:25 AM",
        },
      ],
    },
    {
      id: 2,
      name: "Dani",
      imgUrl: user2,
      age: 23,
      isOnline: false,
      lastMessage: "Sure, let's do that. When are you free?",
      date: "2023-10-14",
      timeSent: "10 mins",
      chat: [
        {
          sender: "me",
          message: "Hey Dani, how have you been?",
          timestamp: "11:00 AM",
        },
        {
          sender: "Dani",
          message: "I've been good. How about you?",
          timestamp: "11:05 AM",
        },
        {
          sender: "me",
          message: "I've been a bit busy, but managing. 😊",
          timestamp: "11:10 AM",
        },
        {
          sender: "Dani",
          message: "I understand. We should catch up soon! maybe fight soon",
          timestamp: "11:15 AM",
        },
        {
          sender: "me",
          message: "Definitely! Let's plan something for this weekend. 🎉",
          timestamp: "11:20 AM",
        },
        {
          sender: "Dani",
          message: "Sure, that sounds good. When are you free? 🗓️",
          timestamp: "11:25 AM",
        },
        {
          sender: "me",
          message: "I'm free on Saturday afternoon. How about you? 🌤️",
          timestamp: "11:30 AM",
        },
        {
          sender: "Dani",
          message: "Saturday works for me too! Let's meet at our usual spot. 🍔",
          timestamp: "11:35 AM",
        },
        {
          sender: "me",
          message: "Sounds like a plan! See you then. 👋",
          timestamp: "11:40 AM",
        },
      ],
    },
    {
      id: 3,
      name: "Saroash",
      imgUrl: user3,
      age: 23,
      isOnline: true,
      lastMessage: "Sounds like a plan! Let's make it happen.",
      date: "2023-10-11",
      timeSent: "25 mins",
      chat: [
        {
          sender: "me",
          message: "Hi Saroash, how's your day going?",
          timestamp: "2:00 PM",
        },
        {
          sender: "Saroash",
          message: "It's going great! Enjoying the sunshine. How about you?",
          timestamp: "2:05 PM",
        },
        {
          sender: "me",
          message: "That's wonderful! I'm just getting through some work. 💻",
          timestamp: "2:10 PM",
        },
        {
          sender: "Saroash",
          message: "Don't work too hard! Make sure to take breaks. 🌞",
          timestamp: "2:15 PM",
        },
        {
          sender: "me",
          message:
            "Absolutely, breaks are necessary. Planning anything fun for the evening? 🎉",
          timestamp: "2:20 PM",
        },
        {
          sender: "Saroash",
          message: "I might go to the gym later. Need to work off some steam. 💪",
          timestamp: "2:25 PM",
        },
        {
          sender: "me",
          message: "That's a great idea! I should join you sometime. 🏋️‍♂️",
          timestamp: "2:30 PM",
        },
        {
          sender: "Saroash",
          message: "Definitely! The more, the merrier. 🤸‍♂️",
          timestamp: "2:35 PM",
        },
      ],
    },
    {
      id: 4,
      name: "Rabih",
      imgUrl: user4,
      age: 23,
      isOnline: true,
      lastMessage: "Definitely! Looking forward to it.",
      date: "2023-10-10",
      timeSent: "30 mins",
      chat: [
        {
          sender: "me",
          message: "Hey Rabih, how's your week been?",
          timestamp: "3:00 PM",
        },
  
        {
          sender: "Rabih",
          message: "It's been busy but good. How about you?",
          timestamp: "3:05 PM",
        },
        {
          sender: "Rabih",
          message: "And also tired",
          timestamp: "3:05 PM",
        },
        {
          sender: "me",
          message: "Mine's been quite hectic too, but managing.",
          timestamp: "3:10 PM",
        },
        {
          sender: "Rabih",
          message: "That's good to hear. Any exciting plans for the weekend?",
          timestamp: "3:15 PM",
        },
        {
          sender: "me",
          message:
            "Not yet, but I'm thinking of checking out that new restaurant downtown. You?",
          timestamp: "3:20 PM",
        },
        {
          sender: "Rabih",
          message:
            "I'm planning to go boxing with some friends. You should join us sometime!",
          timestamp: "3:25 PM",
        },
      ],
    },
  ];

  //User profile data
 export const datesData = [
    {
      id: 1,
      imgUrl: user1,
      name: "Aiman",
      lastName: "M",
      age: 23,
      city: "Humms",
      country: "Syria",
    },
    {
      id: 2,
      imgUrl: user2,
      name: "Dani",
      lastName: "A",
      age: 23,
      city: "Caracas",
      country: "Venezuela",
    },
    {
      id: 3,
      imgUrl: user3,
      name: "Saroash",
      lastName: "R",
      age: 23,
      city: "Karachi",
      country: "Pakistan",
    },
    {
        id: 4,
        imgUrl: user4,
        name: "Rabih",
        lastName: "A",
        age: 23,
        city: "Beirut",
        country: "Lebanon",
      },
    {
      id: 5,
      imgUrl: user5,
      name: "Siear",
      lastName: "L",
      age: 25,
      city: "Logar",
      country: "Afghanistan",
    },
    {
      id: 6,
      imgUrl: user6,
      name: "Ammar",
      lastName: "A",
      age: 26,
      city: "Tehran",
      country: "Iran",
    },
    {
      id: 7,
      imgUrl: user7,
      name: "Emran",
      lastName: "S",
      age: 25,
      city: "Kabul",
      country: "Afghanistan",
    },
    {
      id: 8,
      imgUrl: user8,
      name: "Harun",
      lastName: "R",
      age: 23,
      city: "Gujrat",
      country: "India",
    },
 
  ];
  
//main user profile  data
export const profileData = [
    {
      name: "Zahid R",
      age: 24,
      imgUrl: profile,
      hobbies: ["Travelling", "Staying Active", "Food"],
      bio: "Swipe if you want some competition! I have beeing bodybuilding for 7 years(SSL3), am a white belt in Taekwondo and played in OYSL Soccer as a teenager. Might stamina might not be the same as it was in high school but I will still put up a show on a ring that any audience will enjoy",
    },
  ];