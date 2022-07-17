import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <a href="/">raynertjx</a>
            <ul>
                <li><a className={classes['fancy-link']} href="">About</a></li>
                <li><a className={classes['fancy-link']} href="">Experience</a></li>
                <li><a className={classes['fancy-link']} href="">Projects</a></li>
                <li><a className={classes['fancy-link']} href="">Contact</a></li>
            </ul>
        </nav>
    )
};

export default Navbar;
