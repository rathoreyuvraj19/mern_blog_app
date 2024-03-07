// atoms.js
import { atom, useRecoilCallback } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const loadingState = atom({
  key: "loadingState",
  default: false,
});

export const currentUserState = atom({
  key: "currentUserState",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const errorState = atom({
  key: "errorState",
  default: null,
});
