import { useEffect, useState} from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';



const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState();

  useEffect(() => {
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch('https://react-http-3249d-default-rtdb.firebaseio.com/meals');
      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

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
      setIsLoading(false);
    }

    fetchMeals().catch(error => {
      setIsLoading(false);
      setHttpError(error.message);
    })
  
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

  if (isLoading) {
    return (
      <section className={classes.MealsLoading}>
        Loading...
      </section>
    )
  }

  if (httpError) {
    return (
         <section className={classes.MealsError}>Failed to fetch</section>
       )
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
