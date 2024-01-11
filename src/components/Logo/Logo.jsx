import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.svg"

const Logo = ({className}) => {
  return (
    <div className={className}>
        <Image 
            src={logo}
            alt="app logo"
        />
        <h2>Col-23</h2>
    </div>
  )
}

export default Logo