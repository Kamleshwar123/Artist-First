import cookie from "js-cookie";

function auth(update = false) {
  var email;
  var userName;
  var userId;

  if (typeof window !== "undefined") {
    email = localStorage.getItem("userEmailID");
    userName = localStorage.getItem("userName");
    userId = localStorage.getItem("userId");
  }

  return {
    token: cookie.get("aToken"),
    email: email,
    userName: userName,
    userId: userId,
  };
}
export default auth;
