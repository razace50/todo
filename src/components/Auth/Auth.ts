import PocketBase from "pocketbase";

// Initialization of PocketBase client
const pb = new PocketBase("http://127.0.0.1:8090/api/");

export const signUp = async (
  fullname: string,
  email: string,
  password: string
) => {
  try {
    const user = await pb.collection("users").create({
      fullname,
      email,
      password,
    });
    return user;
  } catch (error) {
    console.error("Sign-up error:", error);
    throw error;
  }
};

export const logIn = async (email: string, password: string) => {
  try {
    const authData = await pb
      .collection("users")
      .authWithPassword(email, password);
    return authData;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logOut = () => {
  pb.authStore.clear();
};
