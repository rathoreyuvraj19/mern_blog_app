import React from "react";
import { useRecoilState } from "recoil";
import { loadingState, currentUserState, errorState } from "../atoms/atoms.js";

export default function Dashboard() {
  const [loading, setLoading] = useRecoilState(loadingState);
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [errorMessage, setErrorMessage] = useRecoilState(errorState);
  return (
    <div>
      <button
        onClick={() => {
          console.log(currentUser);
        }}
      >
        Dashboard
      </button>
    </div>
  );
}
