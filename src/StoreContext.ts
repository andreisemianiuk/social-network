import { createContext } from 'react'
import { StoreType } from './App'
import store from './redux/redux-store'

export const StoreContext = createContext<StoreType>(store)