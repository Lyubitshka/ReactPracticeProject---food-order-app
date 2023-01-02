import Input from '../../UI/Input';
import CartIcon from '../../Cart/CartIcon';
import classes from './MealItemForm.module.css';


const MealItemForm = props => {
    return (
        <form className={classes.form}>
            <Input
                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1'
                }}
            />
            <button>+ Add
            <span className={classes.icon}>
                <CartIcon />
            </span>
            </button>
        </form>
    )
};

export default MealItemForm;