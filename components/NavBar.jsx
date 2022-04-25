import Link from "next/link";

const NavBar = () => {
        
    const openNav = () =>{
        var a = document.getElementById("headerSectionTwo");
        a.style.height = "500px";
    }
    const closeNav = () =>{
        var a = document.getElementById("headerSectionTwo");
        a.style.height = "0";
    }

    return ( 
        <div id="headerNavigation">
            <header className="navbar container-fluid navbar-expand-lg justify-content-center">
                    <section className="col text-white  headerSectionOne">
                        <div className="font-weight-bolder">
                            <img src="/headerlogo.svg" alt="" />
                        </div>
                    </section>
                    <section id="headerSectionTwo" className="col headerSectionTwo font-size-large">
                        <nav>
                            <div class="container-fluid">
                                <ul class="navbar-nav font-size-larger font-weight-lighter">
                                    <li id="closeNavigation" onClick={closeNav}>
                                        &times;
                                    </li>
                                    <li class="nav-item">
                                        <Link href="#">
                                            <a className="nav-link display-6">About</a>
                                        </Link>
                                    </li>     
                                    <li class="nav-item">
                                        <Link href="#">
                                            <a className="nav-link display-6">Popular</a>
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link href="#">
                                            <a className="nav-link display-6">Blog</a>
                                        </Link>
                                    </li>
                                    <div className="additionalDivision">
                                        <li>
                                            <Link   href="#" >
                                                <a className="nav-link display-6">Read stories</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link   href="#" >
                                                <a className="nav-link display-6">Emotional</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" >
                                                <a className="nav-link display-6">Browse</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" >
                                                <a className="nav-link display-6">Basics</a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="#" >
                                                <a className="nav-link display-6">Introduction</a>
                                            </Link>
                                        </li>
                                    </div>
                                    <li class="nav-item">
                                        <Link href="#">
                                            <a className="nav-link joinUsMain">Join us</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </section>
                    <section className="menuIcon col-lg-2" onClick={openNav}>
                        &#9776;
                    </section>
            </header>
        </div>
     );
}
 
export default NavBar;