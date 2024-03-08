export interface PassageUserInfo {
  user: string;
  email: string;
}

export async function signOut() {
  try {
    await fetch("/oauth2/sign_out?rd=https%3A%2F%2Fexpensive-lightslategray-cat.withpassage.com%2Flogout");
  } catch (error) {
    console.log(error);
  }
}

export async function getCurrentUserInfo() {
  try {
    const response = await fetch("/oauth2/userinfo");

    if (response.status === 200) {
      const userInfo = await response.json();
      
      return {
        userInfo,
      };
    }
  } catch (error) {
    console.log(error);
  }
  return { userInfo: undefined };
}
