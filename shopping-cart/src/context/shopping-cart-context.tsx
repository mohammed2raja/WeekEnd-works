import { useContext, createContext, ReactNode, useState } from "react"
import { ShoppingCart } from "../components/shopping-cart"
import { useLocalStorage } from "../hooks/useLocalStorage"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type CartItem = {
  id: number
  quantity: number
}

type ShoppingCartContext = {
  openCart: () => void
  closeCart: () => void
  getItemQuantity: (id: number) => number
  increaseItemQuantity: (id: number) => void
  decreaseItemQuantity: (id: number) => void
  removeFromCart: (id: number) => void
  cartQuantity: number
  cartItems: CartItem[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("shopping-cart",[])

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  const cartQuantity = cartItems.reduce((quantity, item) => item.quantity + quantity, 0)

  function getItemQuantity(id: number): number {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function increaseItemQuantity(id: number) {
    setCartItems(currItems => {
      if(currItems.find(item => item.id === id) == null) {
        return [...currItems, {id, quantity: 1}]
      } else {
        return currItems.map( item => {
          if(item.id === id) {
            return {...item, quantity: item.quantity + 1}
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: number) {
    setCartItems(currItems => {
      if (currItems.find(item => item.id === id)?.quantity === 1) {
        return currItems.filter(item => item.id !== id)
      } else {
        return currItems.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromCart(id: number) {
    setCartItems(currItems => {
      return currItems.filter(item => item.id !== id)
    })
  }

  return <ShoppingCartContext.Provider
            value={{
              getItemQuantity,
              increaseItemQuantity,
              decreaseItemQuantity,
              removeFromCart,
              openCart,
              closeCart,
              cartItems,
              cartQuantity
            }}>
    {children}
    <ShoppingCart isOpen={isOpen} />
  </ShoppingCartContext.Provider>
}