export default function MealsGrid({meals}){
return(
    <ul className={classes.meals}>
        {meals.map((meal)=>{
            return <li key={meal.id}>

            </li>
        })}
    </ul>
)
}