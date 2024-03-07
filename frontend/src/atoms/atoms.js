// atoms.js
import { atom } from "recoil";

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
});

export const errorState = atom({
  key: "errorState",
  default: null,
});
