import cookie from "js-cookie";
import eventBus from "../../../util/eventBus";
const login = async (jwt, userName, email, userId) => {
  cookie.remove("aToken");
  cookie.set("aToken", jwt, { expires: 2 });
  localStorage.setItem("userId", userId);
  localStorage.setItem("userName", userName);
  localStorage.setItem("userEmailID", email);
  localStorage.setItem("aToken", jwt);

  eventBus.dispatch("userLoggedIn", {
    jwt,
    userName,
    email,
    userId,
  });
};
export default login;
