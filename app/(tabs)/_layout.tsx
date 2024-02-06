import React from "react";
import { Tabs } from "expo-router";
import Colors from "@/constants/Colors";
import {
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarLabelStyle: {
          fontFamily: "mon",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarLabel: "Explore",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" color={color} size={size}></Ionicons>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="wishlist"
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size}></Ionicons>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="trips"
        options={{
          tabBarLabel: "Trips",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5
              name="airbnb"
              color={color}
              size={size}
            ></FontAwesome5>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="inbox"
        options={{
          tabBarLabel: "Inbox",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="message-outline"
              color={color}
              size={size}
            ></MaterialCommunityIcons>
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons
              name="person-circle-outline"
              color={color}
              size={size}
            ></Ionicons>
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
};

export default Layout;