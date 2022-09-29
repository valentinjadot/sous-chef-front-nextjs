import React from 'react';
import dayjs from 'dayjs';
import 'dayjs/locale/es';
import _ from 'lodash';
import Meal from './Meal';
import deadlinesUtil from '../utils/deadlinesUtil';

export default function DayOrders({ date, dayOrders, isJessica }) {
  const isClosed = (meal) => deadlinesUtil({ date, meal }).isRegistrationClosed;

  const formattedDate = dayjs(date).locale('es').format('dddd, MMMM D');

  const ordersGroupedByMeal = _.groupBy(dayOrders, (order) => order.meal);
  const meals = Object.keys(ordersGroupedByMeal).sort().reverse();

  const shouldShow = (meal) => (isJessica ? isClosed(meal) : true);
  const mealsToShow = meals.filter(shouldShow);

  return (
    <>
      <h2>{formattedDate}</h2>

      {ordersGroupedByMeal &&
        mealsToShow.map((meal) => (
          <Meal
            mealOrders={ordersGroupedByMeal[meal]}
            meal={meal}
            key={meal}
            date={date}
            isJessica={isJessica}
          />
        ))}
      <br />
      <br />
    </>
  );
}
