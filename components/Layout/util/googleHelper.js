import login from "./login";

const googleHelper = async (googleResponse) => {
  alert("reac");
  console.log(googleResponse);
  // fetch(
  //   "https://admin.artistfirst.in/api/connect/google/callback?access_token=" +
  //     googleResponse.access_token
  // )

      fetch(
    `https://admin.artistfirst.in/api/connect/google/callback?access_token=${googleResponse.access_token}`
  ).then((res) => {
      console.log("data_result", res.data);
      //   login(); call when we get a response
      return true;
      //   getToken(res.data.result.id);
    })
    .catch((error) => {
      alert(error);
      return false;
    });
  return false;
};

export default googleHelper;
