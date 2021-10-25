import { useEffect, useState} from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  
  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch('https://react-http-3249d-default-rtdb.firebaseio.com/meals.json');
      const responsData = await response.json();
      const loadedMeals = [];
      for (const key in responsData) {
        loadedMeals.push({
          id: key,
          name: responsData[key].name,
          description: responsData[key].description,
          price: responsData[key].price,
        });
      }
      
      setMeals(loadedMeals);
    }

  fetchMeals();
  }, [])

  const mealsList = meals.map((meal) => (


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
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
