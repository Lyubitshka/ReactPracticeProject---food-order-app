import React from "react";
import classes from './MealsDescription.module.css'


const MealsDescription = () => {
    return (
        <section className={classes.summary}>
            <p>
                Choose your favorite meal from our broad selection of available meals
                and enjoy a delicious lunch or dinner at home.
            </p>
            <p>
                All our meals are cooked with high-quality ingredients, just-in-time and
                of course by experienced chefs!

            </p>
        </section>
    )
}

export default MealsDescription;