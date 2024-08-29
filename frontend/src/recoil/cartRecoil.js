import { atom, useRecoilState , selector} from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist(); // Initialize Recoil Persist

// Atom for managing the list of products in the cart
export const cartProducts = atom({
  key: 'cartProducts',
  default: [],
  effects_UNSTABLE: [persistAtom], // Persist cart products state
});

// Atom for managing the total quantity of items in the cart
export const cartQuantity = atom({
  key: 'cartQuantity',
  default: 0,
  effects_UNSTABLE: [persistAtom], // Persist cart quantity state
});

// Atom for managing the total cost of items in the cart
export const cartTotal = atom({
  key: 'cartTotal',
  default: 0,
  effects_UNSTABLE: [persistAtom], // Persist cart total state
});

export const totalCostSelector = selector({
    key: 'totalCostSelector',
    get: ({ get }) => {
      const products = get(cartProducts);
      return products.reduce((total, product) => total + product.price * product.quantity, 0);
    },
  });





// Custom hook for cart actions
export const useCartActions = () => {
  const [products, setProducts] = useRecoilState(cartProducts);
  const [quantity, setQuantity] = useRecoilState(cartQuantity);
  const [total, setTotal] = useRecoilState(cartTotal);

  // Function to add a product to the cart
  const addProduct = (product) => {
    setProducts((currentProducts) => [...currentProducts, product]); // Add product to cart
    setQuantity((currentQuantity) => currentQuantity + product.quantity); // Increment total quantity
    setTotal((currentTotal) => currentTotal + product.price * product.quantity); // Update total price
  };

  return {
    addProduct,
  };
};

const logEffect = ({ onSet }) => {
    onSet(newValue => {
      console.log('New value:', newValue);
    });
  };


