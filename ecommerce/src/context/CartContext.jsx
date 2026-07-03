// import {
//   createContext,
//   useState,
//   useEffect,
// } from "react";

// export const CartContext = createContext();


// const CartProvider = ({ children }) => {

//   const [cartItems, setCartItems] = useState(() => {
//     const savedCart = localStorage.getItem("cart");

//     return savedCart
//       ? JSON.parse(savedCart)
//       : [];
//   });

// const addToCart = (product) => {
//   const exists = cartItems.find(
//     (item) => item.id === product.id
//   );

//   if (exists) {
//     const updatedCart = cartItems.map((item) =>
//       item.id === product.id
//         ? {
//             ...item,
//             quantity: item.quantity + 1,
//           }
//         : item
//     );

//     setCartItems(updatedCart);
//   } else {
//     setCartItems([
//       ...cartItems,
//       {
//         ...product,
//         quantity: 1,
//       },
//     ]);
//   }
// };

// const increaseQuantity = (id) => {
//   const updatedCart = cartItems.map((item) =>
//     item.id === id
//       ? {
//           ...item,
//           quantity: item.quantity + 1,
//         }
//       : item
//   );

//   setCartItems(updatedCart);
// };

// const decreaseQuantity = (id) => {
//   const updatedCart = cartItems
//     .map((item) =>
//       item.id === id
//         ? {
//             ...item,
//             quantity: item.quantity - 1,
//           }
//         : item
//     )
//     .filter((item) => item.quantity > 0);

//   setCartItems(updatedCart);
// };

//   const removeFromCart = (id) => {
//     const updatedCart = cartItems.filter(
//       (item) => item.id !== id
//     );

//     setCartItems(updatedCart);
//   };

//   useEffect(() => {
//     localStorage.setItem(
//       "cart",
//       JSON.stringify(cartItems)
//     );
//   }, [cartItems]);

//   return (
//     <CartContext.Provider
//       value={{
//         cartItems,
//         addToCart,
//         removeFromCart,
//         increaseQuantity,
//         decreaseQuantity
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// export default CartProvider;


import {
  createContext,
  useState,
  useEffect
} from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cart");

    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems]);

  const addToCart = (product) => {
    const exists = cartItems.find(
      (item) => item._id === product._id
    );

    if (exists) {
      const updatedCart = cartItems.map((item) =>
        item._id === product._id
          ? {
            ...item,
            quantity: item.quantity + 1,
          }
          : item
      );

      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  const increaseQuantity = (id) => {
    const updatedCart = cartItems.map((item) =>
      item._id === id
        ? {
          ...item,
          quantity: item.quantity + 1,
        }
        : item
    );

    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = cartItems
      .map((item) =>
        item._id === id
          ? {
            ...item,
            quantity: item.quantity - 1,
          }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  const removeFromCart = (id) => {
    const updatedCart = cartItems.filter(
      (item) => item._id !== id
    );

    setCartItems(updatedCart);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;