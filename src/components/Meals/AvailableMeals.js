import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Paw Bhaji',
    description: 'Finest veggies and soft paw',
    price: 50.99,
  },
  {
    id: 'm2',
    name: 'Masala Dosa',
    description: 'An South-Indian specialty!',
    price: 40.5,
  },
  {
    id: 'm3',
    name: 'Aaloo Paratha',
    description: 'Potato wheat bun recipie',
    price: 60.99,
  },
  {
    id: 'm4',
    name: 'Palak Paneer',
    description: 'Healthy...and green...',
    price: 50.00,
  },
  {
    id: 'm5',
    name: 'Chole Bhature',
    description: 'Oily...and testy...',
    price: 90.99,
  },
  {
    id: 'm6',
    name: 'Plaw',
    description: 'Full of vegitables and healthy food',
    price: 100.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
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
