"use client"

import React, { useState } from 'react'
import Logo from '../Logo'
import NavItems from '../NavItems';
import styles from "./navbar.module.css";
import Link from 'next/link';
import SearchBar from '../SearchComponent';

const Navbar = () => {

    const [show, setShow] = useState(false)
    const [openSearch, setOpenSearch] = useState(false)

    //toggle search function
    const toggleSearch = () => {
        setOpenSearch(!openSearch)
    }

    //open dropdown
    const openDropdown = () => {
        setShow(!show)
    }

    return (
        <nav className="relative">
            <div className="flex relative bg-[#0B0415] px-4 py-10 sm:px-32 sm:py-6 justify-between items-center ">
                <Link href={"/"}><Logo className="sm:flex w-[10rem] gap-2 items-center text-2xl font-medium text-[#EBEBEB] " /></Link>

                <div className={show ? `${styles.hamburger} ${styles.active} `: styles.hamburger} onClick={openDropdown}>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                    <div className={styles.bar}></div>
                </div>

                {
                    <NavItems 
                        classname={show ? `absolute w-full left-0 top-32 ${styles.navitem} ${styles.expanded} `: styles.navitem} 
                        toggleSearch={toggleSearch}
                    />
                }
            </div>

            {openSearch && <SearchBar />}
        </nav>
    )
}

export default Navbar