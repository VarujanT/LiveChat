import axios from "axios";

// Make a request for a user with a given ID
export const createMessage = () => {
  axios
    .post("/")
    .then(function(response) {
      // handle success
      console.log(response, "messs");
    })
    .catch(function(error) {
      // handle error
      console.log(error, "this is error");
    })
    .finally(function() {
      // always executed
    });
};
