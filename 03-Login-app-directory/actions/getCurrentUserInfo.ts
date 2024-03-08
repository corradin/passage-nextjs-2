// import { Passage } from "@passageidentity/passage-js";

export interface PassageUserInfo {
  user: string;
  email: string;
}

export async function getCurrentUserInfo() {
  
  // const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  try {
    const response = await fetch("/oauth2/userinfo");

    if (response.status === 200) {
      const userInfo = await response.json();
      
      return {
        userInfo,
      };
    }

    

    // const user = passage.getCurrentUser();
    // const userInfo = await user.userInfo();
    // return {
    //   userInfo,
    // };
  } catch (error) {
    console.log(error);
  }
  return { userInfo: undefined };
}
