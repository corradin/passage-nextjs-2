"use client";
import { useRouter } from "next/navigation";
import { FC } from "react";
// import { Passage } from "@passageidentity/passage-js";
import { signOut } from "@/actions/getCurrentUserInfo";

interface LogoutButtonProps {}

const LogoutButton: FC<LogoutButtonProps> = ({}) => {
  const router = useRouter();
  // const passage = new Passage(process.env.NEXT_PUBLIC_PASSAGE_APP_ID!);
  // const session = passage.getCurrentSession();
  const handleLogout = () => {
    // session.signOut();
    signOut();
    router.push("/");
  };

  return (
    <>
      <button
        onClick={handleLogout}
        className="mt-5 bg-red-800 w-fit px-5 py-3 rounded-xl text-neutral-200 cursor-pointer"
      >
        Logout
      </button>
    </>
  );
};

export default LogoutButton;
