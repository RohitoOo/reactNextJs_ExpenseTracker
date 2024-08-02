import {SignInButton,SignIn, SignOutButton,UserButton, SignedOut, SignedIn } from '@clerk/nextjs'
import {checkUser} from '@/lib/checkUser.js'


const Header = async () => {
    const user = await checkUser();
    console.log(":::::", user) 
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