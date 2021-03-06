import {
  createBottomTabNavigator,
  createAppContainer,
  TabBarBottom
} from "react-navigation";
import { Ionicons } from "@expo/vector-icons";
import React from "react";

import HomeScreen from "./HomeScreen";
import OtherScreen from "./OtherScreen";
import User from "./UserPage";
const HomeBar = createAppContainer(
  createBottomTabNavigator(
    {
      Home: HomeScreen,
      Events: OtherScreen,
      User: User
    },
    {
      defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) => {
          const { routeName } = navigation.state;
          let iconName;
          if (routeName === "Home") {
            iconName = `ios-home`;
          } else if (routeName === "Events") {
            iconName = `ios-calendar`;
          } else if (routeName === "User") {
            iconName = `ios-contact`;
          }

          // You can return any component that you like here! We usually use an
          // icon component from react-native-vector-icons
          return <Ionicons name={iconName} size={25} color={tintColor} />;
        }
      }),
      tabBarComponent: TabBarBottom,
      tabBarPosition: "bottom",
      tabBarOptions: {
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: {
          backgroundColor: "#1B2737"
        }
      },
      animationEnabled: true,
      swipeEnabled: false
    }
  )
);

export default HomeBar;
