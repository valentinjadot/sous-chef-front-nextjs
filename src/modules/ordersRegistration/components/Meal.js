import React from 'react';
import _ from 'lodash';
import MealOrdersEditTable from './MealOrdersEditTable';
import MealOrdersViewTable from './MealOrdersViewTable';
import { JessicaContext } from '../../../pages/jessica';

export default function Meal({ mealOrders, meal, date }) {
  const sortedMealOrders = _.sortBy(mealOrders, ['userName']);

  const isJessica = React.useContext(JessicaContext);

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
