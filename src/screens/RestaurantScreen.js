import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  ScrollView,
  Dimensions
} from "react-native";
import { Image, Card, Icon, colors } from "react-native-elements";
import yelp from "../api/yelp";
// import { ScrollView } from "react-native-gesture-handler";
import Bullet from "../components/Bullet";

const RestaurantScreen = ({ navigation }) => {
  const [restaurant, setRestaurant] = useState(null);
  const { height, width } = Dimensions.get("window");

  const getRestaurant = () => {
    yelp
      .get(`/${navigation.getParam("id")}`)
      .then(res => {
        // console.log(res.data);
        setRestaurant(res.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => getRestaurant(), []);

  return (
    <>
      {restaurant ? (
        <ScrollView>
          <ScrollView
            horizontal
            scrollEnabled
            pagingEnabled
            scrollEventThrottle={16}
            decelerationRate={0}
            showsHorizontalScrollIndicator={false}
            snapToAlignment="center"
          >
            {restaurant.photos.length
              ? restaurant.photos.map((photo, index) => (
                  <Image
                    source={{ uri: photo }}
                    key={`img-${index}`}
                    style={{ width: width, height: height / 3 }}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                ))
              : null}
          </ScrollView>
          <View style={styles.container}>
            <Text style={styles.restaurantDetails}>
              {restaurant.name} - {restaurant.location.address1}
            </Text>
            <View style={styles.ratingContainer}>
              <Icon name="star" color="#D4AF37" size={24} />
              <Text style={styles.ratingText}>{restaurant.rating}</Text>
              {/* <Bullet size={5} /> */}
              <Icon
                containerStyle={{ marginLeft: 10 }}
                name="phone"
                type="Feather"
                size={14}
              />
              <Text>{restaurant.display_phone}</Text>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5
  },
  image: {
    width: "100%",
    height: 300
  },
  restaurantDetails: {
    fontSize: 16,
    fontWeight: "500",
    color: "#030303",
    marginLeft: 10
  },
  ratingContainer: {
    color: "#D4AF37",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "center",
    marginLeft: 5
  },
  ratingText: {
    fontWeight: "200",
    fontSize: 14,
    marginLeft: 2
    // alignSelf: "center"
  }
});

export default RestaurantScreen;
