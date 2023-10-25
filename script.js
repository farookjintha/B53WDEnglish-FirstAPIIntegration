function gettingUsers() {
  //js logic
  // used to make api calls

  var http = new XMLHttpRequest(); //initializing XMLHttpRequest;

  http.open("GET", "https://jsonplaceholder.typicode.com/users"); // declaring the http method and url using open().

  http.send(); //sending the http request;

  http.onload = () => {
    //Status Code
    // 200, 201, 204 -> Success
    // 400, 401, 404 -> Client Side
    // 500, 502, 503 -> Server Side

    if (http.status === 200) {
      const response = http.response;
      console.log("Type of: ", typeof response); // string

      //converting string to object
      const resposeObj = JSON.parse(response);
      console.log("Type of responseObj: ", typeof resposeObj); // object

      // converting object to string
      const responseString = JSON.stringify(resposeObj);
      console.log("Type of responseString: ", typeof responseString); // string

      console.log("Response: ", resposeObj);
    } else {
      console.log("Error");
    }
  };
}
