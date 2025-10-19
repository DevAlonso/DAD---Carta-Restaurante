import './MenuItem.css';

function MenuItem(props){
    return(
        <div className='cardContainer'>
            <img src={props.mealImg} alt={props.mealName} />
            <h4>{props.mealName}</h4>
            <p className='precio'>{props.precio}$</p>
        </div>
    )

}

export default MenuItem