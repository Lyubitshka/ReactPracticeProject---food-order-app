import React , { Fragment } from "react";

import classes from './Header.module.css';
import headerImg from '../../assets/header_img.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Order your fav Food never was so simple!</h1>
                <HeaderCartButton />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImg} alt="Food order app"/>
            </div>
        </Fragment>
         
    )
};

export default Header;