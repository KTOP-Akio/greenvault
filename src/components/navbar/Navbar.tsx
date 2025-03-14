import React from 'react'
import AddCardButton from './AddCardButton'
import ConnectWalletButton from './CoonectWalletButton'

const Navbar = () => {
    return (
        <nav className="flex justify-end items-center gap-4 pt-[30px] pr-[55px] pb-[20px]">
            <AddCardButton />
            <ConnectWalletButton />
        </nav>
    )
}

export default Navbar 