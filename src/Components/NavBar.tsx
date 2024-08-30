
interface NavBarProps {
    selector : (value: "Home"|"Cryptos") => void;
}

const NavBar = ({selector}: NavBarProps) => 
{
    return (
        <div className="navbar">
            <div className="navbar-content">
                <span className="hover-hand" onClick={()=>selector("Home")}>Home</span>
                <span className="hover-hand" onClick={()=>selector("Cryptos")}>Cryptos</span>
            </div>
        </div>
    )
}

export default NavBar;