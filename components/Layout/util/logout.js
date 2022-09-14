import cookie from "js-cookie";

export default function logout() {
  if (typeof window !== "undefined") {
    localStorage.removeItem("userEmailID");
    localStorage.removeItem("userNumber");
    localStorage.removeItem("userName");
    localStorage.removeItem("userId");
    localStorage.removeItem("aToken");
    cookie.remove("aToken");
    return true;
  }
  return false;
}
