// userRecoil.js
import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

// Initialize Recoil Persist
const { persistAtom } = recoilPersist();

// const { persistAtom } = recoilPersist({
//     key: 'recoil-persist',
//     storage: sessionStorage, // Use sessionStorage for persistence
//   });

// Atom for managing the current user state
export const currentUserState = atom({
  key: 'currentUserState',
  default: null,
  effects_UNSTABLE: [persistAtom], // Persist current user state
});

// Atom for managing the fetching state
export const isFetchingState = atom({
  key: 'isFetchingState',
  default: false,
  effects_UNSTABLE: [persistAtom], // Persist fetching state
});

// Atom for managing the error state
export const errorState = atom({
  key: 'errorState',
  default: false,
  effects_UNSTABLE: [persistAtom], // Persist error state
});

// Selector to handle login start action
export const loginStart = selector({
  key: 'loginStart',
  get: ({ get }) => {
    get(isFetchingState);
    get(errorState);
    return null;
  },
  set: ({ set }) => {
    set(isFetchingState, true);
    set(errorState, false);
  },
});

// Selector to handle login success action
export const loginSuccess = selector({
  key: 'loginSuccess',
  get: ({ get }) => {
    get(currentUserState);
    return null;
  },
  set: ({ set }, newUser) => {
    set(isFetchingState, false);
    set(currentUserState, newUser);
    set(errorState, false);
  },
});

// Selector to handle login failure action
export const loginFailure = selector({
  key: 'loginFailure',
  get: ({ get }) => {
    get(errorState);
    return null;
  },
  set: ({ set }) => {
    set(isFetchingState, false);
    set(errorState, true);
  },
});
