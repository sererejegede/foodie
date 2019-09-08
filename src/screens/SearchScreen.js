import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Input, Icon, Text } from "react-native-elements";
import yelp from "../api/yelp";
import Restaurants from "../components/Restaurants";
import { ScrollView } from "react-native-gesture-handler";

const SearchScreen = () => {
  const filterRestaurants = price => {
    return restaurants.filter(restaurant => restaurant.price === price);
  };

  const getRestaurants = () => {
    setIsLoading(true);
    yelp
      .get("/search", {
        params: {
          term,
          location: "washington dc",
          limit: 10
        }
      })
      .then(res => {
        // console.log(res);
        setIsLoading(false);
        setRestaurants(res.data.businesses);
      })
      .catch(e => {
        setIsLoading(false);
        console.log(e);
      });
  };

  const [restaurants, setRestaurants] = useState([]);
  const [term, setTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => getRestaurants(), []);

  return (
    <ScrollView style={styles.container}>
      <Input
        autoCapitalize="none"
        placeholder="Search restaurant"
        placeholderTextColor="#959595"
        leftIconContainerStyle={{ paddingRight: 10 }}
        inputContainerStyle={styles.searchInputContainer}
        onChangeText={value => setTerm(value)}
        onEndEditing={getRestaurants}
        leftIcon={<Icon name="search" size={24} color="black" />}
      />
      {isLoading ? (
        <View style={styles.loading}>
          <Text>Loading...</Text>
        </View>
      ) : null}

      <View style={styles.resultsContainer}>
        {/* <Text h5>We've found {restaurants.length} results!</Text> */}
        <Restaurants
          category="Economic"
          restaurantList={filterRestaurants("$")}
        />
        <Restaurants
          category="Balanced Diet"
          restaurantList={filterRestaurants("$$")}
        />
        <Restaurants
          category="Classy"
          restaurantList={filterRestaurants("$$$")}
        />
        <Restaurants
          category="Big Spender"
          restaurantList={filterRestaurants("$$$$")}
        />
        {/* <Button
          title="Go to Restaurants Screen"
          onPress={() => navigation.navigate("Restaurants")}
        /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FEFEFE"
    // marginHorizontal: 7
  },
  searchInputContainer: {
    backgroundColor: "#EDEDED",
    marginVertical: 10,
    marginHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 5,
    borderBottomWidth: 0
  },
  resultsContainer: {
    marginHorizontal: 17
  },
  loading: {
    flex: 1,
    width: "100%",
    alignItems: "center"
  }
});

export default SearchScreen;
