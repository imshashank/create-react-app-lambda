import React from "react";
import {Link} from "next/link";

function NavBarItems(props) {
    if (props) {
        let i = 0;
        let data = Array.from(props.categories);
        const listItems = data.map((category, index) =>
            <li className="active" key={index}>
                <a href={`/category/${category}`} className="nav-link text-left">{category}</a>
            </li>
        );
        return (
            <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                <li>
                    <a href="/" className="nav-link text-left">Home</a>
                </li>

                {listItems}
            </ul>
        );
    }
    return (
        <p>Loading ...</p>
    );

}
const NavBar = props => (
    <div className="header-top">
        <div className="container">
            <div className="row align-items-center">
                <div className="col-12 col-lg-6 d-flex">
                    <a href="/" className="site-logo">
                        Meranda
                    </a>
                    <a href="#"
                       className="ml-auto d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black"><span
                        className="icon-menu h3"/></a>
                </div>
                <div className="col-12 col-lg-6 ml-auto d-flex">
                    <div className="ml-md-auto top-social d-none d-lg-inline-block">
                        <a href="#" className="d-inline-block p-3"><span className="icon-facebook"/></a>
                        <a href="#" className="d-inline-block p-3"><span className="icon-twitter"/></a>
                        <a href="#" className="d-inline-block p-3"><span className="icon-instagram"/></a>
                    </div>
                    <form action="#" className="search-form d-inline-block">
                        <div className="d-flex">
                            <input type="email" className="form-control" placeholder="Search..."/>
                            <button type="submit" className="btn btn-secondary"><span
                                className="icon-search"/>
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-6 d-block d-lg-none text-right">
                </div>
            </div>
        </div>
        <div className="site-navbar py-2 js-sticky-header site-navbar-target d-none pl-0 d-lg-block" role="banner">
            <div className="container">
                <div className="d-flex align-items-center">
                    <div className="mr-auto">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                            <ul className="site-menu main-menu js-clone-nav mr-auto d-none pl-0 d-lg-block">
                                <NavBarItems categories={props.categories}/>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default NavBar;