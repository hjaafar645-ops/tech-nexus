import React, { createContext, useState, useEffect } from "react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {

    /*===== savedToFavorite =====*/
    const [favorite, setFavorite] = useState(() => {
        const savedData = localStorage.getItem("favorite");
        if (savedData && savedData !== "undefined") {
            try {
                const parsed = JSON.parse(savedData)
                if (Array.isArray(parsed)) return parsed
            }
            catch (error) {
                localStorage.removeItem("favorite")
            }
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem("favorite", JSON.stringify(favorite))
    }, [favorite])


    /*===== AddCart =====*/
    const [cart, setCart] = useState(() => {
        const addData = localStorage.getItem("product");
        if (addData && addData !== "undefined") {
            try {
                const parsed = JSON.parse(addData)
                if (Array.isArray(parsed)) return parsed
            }
            catch (error) {
                localStorage.removeItem("product")
            }
        }
        return []
    })

    useEffect(() => {
        localStorage.setItem("product", JSON.stringify(cart))
    }, [cart])

    /*===== ToggleFavorite =====*/
    const handleToggleFavorite = (productItem) => {
        setFavorite((prev) => {
            const currentFavs = prev || [];
            const isExist = currentFavs.some((item) => item.id === productItem.id);
            if (isExist) {
                return currentFavs.filter((item) => item.id !== productItem.id);
            }
            return [...currentFavs, productItem];
        });
    };

    /*===== AddCart/oneTime =====*/
    const handleAddToCart = (productItem) => {
        setCart((prevCart) => {
            const currentCart = prevCart || [];
            const isExist = currentCart.find((item) => item.id === productItem.id);
            if (isExist) return currentCart;
            return [...currentCart, { ...productItem, quantity: 1 }];
        });
    };

    /*===== RemoveFromCart =====*/
    const handleRemoveFromCart = (id) => {
        setCart((prev) => {
            const currentCart = prev || [];
            return currentCart.filter((item) => item.id !== id);
        });
    };

    /*===== IncreaseQuantity/FotCart =====*/
    const handleIncreaseQuantity = (productId) => {
        setCart(
            cart.map((item) => {
                if (item.id === productId) {
                    return {
                        ...item,
                        quantity: item.quantity + 1
                    }
                }
                return item
            })
        )
    }

    /*===== DecreaseQuantity/ForCart =====*/
    const handleDecreaseQuantity = (productId) => {
        setCart(
            cart.map((item) => {
                if (item.id === productId) {
                    if (item.quantity > 1) {
                        return {
                            ...item,
                            quantity: item.quantity - 1
                        }
                    }
                    return item
                }
                return item
            })
        )
    }

    /*===== TotalPrice/ForCart =====*/
    const totalPrice = cart ? cart.reduce((sum, item) => {
        const price = Number(item.price) || 0;
        const quantity = Number(item.quantity) || 1;
        return sum + (price * quantity)
    }, 0) : 0


    return (
        <StoreContext.Provider value={{
            favorite, setFavorite, cart, setCart, handleRemoveFromCart, handleIncreaseQuantity
            , handleDecreaseQuantity, handleToggleFavorite, handleAddToCart, totalPrice
        }}>
            {children}
        </StoreContext.Provider>
    );
};
