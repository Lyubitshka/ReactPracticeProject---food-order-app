import { useEffect , useState} from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';


const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://food-order-837ce-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
      const resData = await response.json();

      const loadedMeals = [];

      for (const key in resData) {
        loadedMeals.push({
          id: key,
          name: resData[key].name,
          description: resData[key].description,
          price: resData[key].price
        });
      };
      setMeals(loadedMeals);
    };
    fetchMeals();
  }, []);


  const mealsList = meals.map(meal => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));


  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList}
        </ul>
      </Card>
    </section>
  )
};

export default AvailableMeals;