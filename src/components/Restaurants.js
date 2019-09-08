import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from "react-native";
import { withNavigation } from "react-navigation";
import { Text, Image } from "react-native-elements";

const Restaurants = ({ restaurantList, category, navigation }) => {
  return (
    <>
      {restaurantList.length ? (
        <View style={styles.container}>
          <Text style={styles.category}>{category}</Text>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={restaurantList}
            keyExtractor={restaurant => restaurant.id}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Restaurant", { id: item.id })
                  }
                >
                  <View style={styles.restaurant}>
                    <Image
                      source={{
                        uri: item.image_url
                      }}
                      style={{ width: 300, height: 200 }}
                      PlaceholderContent={<ActivityIndicator />}
                    />
                    <Text h5 style={styles.title}>
                      {item.name}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          ></FlatList>
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderBottomColor: "#F9F9F9",
    borderBottomWidth: 1
  },
  title: {
    marginTop: 3,
    fontSize: 16
  },
  restaurant: {
    paddingBottom: 10,
    marginHorizontal: 3
  },
  category: {
    color: "#959595",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 2
  }
});

export default withNavigation(Restaurants);
