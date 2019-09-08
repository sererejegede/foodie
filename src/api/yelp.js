import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer -EfrqTULvBGL5MhLcttsSuL8GK2bnZvMYf6AMi-SjSIlBvjFlaq5qdqWJpj5tkTwyMUeG4n-kU7NlXFYQCZnYkEv7v-rn4L6zEwUz0w2H-L9Ri2rDlW9UEZ-ruVyXXYx"
  }
});
