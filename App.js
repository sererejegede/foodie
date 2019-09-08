import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "./src/screens/SearchScreen";
import RestaurantScreen from "./src/screens/RestaurantScreen";

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: {
      screen: RestaurantScreen,
      navigationOptions: {
        headerTransparent: true,
        headerTitle: "",
        headerStyle: {
          paddingTop: 0,
          marginTop: 0
        }
      }
    }
  },
  {
    // initialRouteName: "Search",
    defaultNavigationOptions: {
      title: "Foodie"
    }
  }
);

export default createAppContainer(navigator);
