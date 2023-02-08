import { useSelector } from "react-redux";
import styles from "./Table.module.css";
import { Link } from "react-router-dom";

export default function Table({ meal }) {
  const foodItems = useSelector((data) => {
    switch (meal) {
      case "Breakfast":
        return data.Breakfast;
      case "Lunch":
        return data.Lunch;
      case "Dinner":
        return data.Dinner;
      case "Snacks":
        return data.Snacks;
    }
  });
  console.log(foodItems);

  return (
    <table className={styles.Table}>
      <thead>
        <tr>
          <th>{meal}</th>
          <th>
            Calories <br /> kcal
          </th>
          <th>
            Carbs <br /> g
          </th>
          <th>
            Fat <br /> g
          </th>
          <th>
            Protein <br /> g
          </th>
          <th>
            Sodium <br /> mg
          </th>
          <th>
            Sugar <br /> g
          </th>
        </tr>
      </thead>
      <tbody>
        {
          // food items will be added here
          foodItems.map((el) => {
            return (
              <tr key={el.id} className={styles.itemRow}>
                <td>{el.item}</td>
                <td>{el.calories}</td>
                <td>{el.carbs}</td>
                <td>{el.fat}</td>
                <td>{el.protein}</td>
                <td>{el.sodium}</td>
                <td>{el.sugar}</td>
              </tr>
            );
          })
        }
        <tr className={styles.mealTotalRow}>
          <td>
            <Link to={`/add_food?meal=${meal}`}>Add Food</Link> | Quick Tools
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.calories;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.carbs;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.fat;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.protein;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.sodium;
            }, 0)}
          </td>
          <td>
            {foodItems.reduce((acc, el) => {
              return acc + el.sugar;
            }, 0)}
          </td>
        </tr>
      </tbody>
    </table>
  );
}
