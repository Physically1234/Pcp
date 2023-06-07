"use client"
import { store } from "@/store";
import "../styles/globals.css"
import { Provider } from "react-redux"


interface props {
    children: React.ReactNode
}

export default function Providers({ children }: props) {
    return (
        <Provider store={store}>{children}</Provider>
    );
}