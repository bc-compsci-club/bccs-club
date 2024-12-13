'use client'
import { Provider } from "react-redux"
import { makeStore, AppStore } from "../lib/redux/store"
import { useMemo } from "react"
export default function StoreProvider({ children }: { children: React.ReactNode }) {
  const store = useMemo<AppStore>(() => makeStore(), [])
  return <Provider store={store}>{children}</Provider>
}