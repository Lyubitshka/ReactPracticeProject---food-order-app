import { Fragment } from "react";

import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals"
import MealsDescription from "./MelasDescription";

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary />
            {/* <MealsDescription /> */}
            <AvailableMeals />
        </Fragment>
    )
};

export default Meals;