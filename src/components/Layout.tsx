import React from "react";
import { Header } from "./Header";
import styles from './Layout.module.css'

interface LayoutProps {
    children: React.ReactNode;
}

export function Layout({children}:LayoutProps) {
    return (
        <main className={styles.container}>
            <Header />
            {children}
        </main>
    )
}