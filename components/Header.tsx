import {SignInButton,SignIn, SignOutButton,UserButton, SignedOut, SignedIn } from '@clerk/nextjs'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h2>Expense Tracker</h2>
                <div>
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton/>
                        <SignOutButton/>
                    </SignedIn>
                </div>
            </div>
        </nav>
    )
}

export default Header; 