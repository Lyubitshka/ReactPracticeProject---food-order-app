import React , { Fragment } from "react";

import classes from './Header.module.css';
import headerImg from '../../assets/header_img.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>FoodOrderApp</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className={classes['main-image']}>
                <img src={headerImg} alt="Food order app"/>
            </div>
        </Fragment>
         
    )
};

export default Header;