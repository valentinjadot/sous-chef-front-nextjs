import React from 'react';
import _ from 'lodash';
import MealOrdersEditTable from './MealOrdersEditTable';
import MealOrdersViewTable from './MealOrdersViewTable';

export default function Meal({ mealOrders, meal, date, isJessica }) {
  const sortedMealOrders = _.sortBy(mealOrders, ['userName']);

  const tableComponents = {
    view: MealOrdersViewTable,
    edit: MealOrdersEditTable
  };
  const tableType = isJessica ? 'view' : 'edit';
  const SpecificTableComponent = tableComponents[tableType];

  return (
    <>
      <h3>{meal === 'lunch' ? 'Almuerzo' : 'Cena'}</h3>
      <SpecificTableComponent orders={sortedMealOrders} date={date} meal={meal} />
      <br />
      <br />
    </>
  );
}
