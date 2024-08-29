import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist'; // For state persistence

const { persistAtom } = recoilPersist(); // Initialize Recoil Persist

// Define atom for user state
export const userState = atom({
  key: 'userState', // Unique ID for this atom
  default: {
    id: null,
    name: '',
    email: '',
  },
  effects_UNSTABLE: [persistAtom], // Persist user state
});
