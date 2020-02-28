import React from 'react';
import ItemComp from './ItemComp';

const ListComp = ({ expenses, editItem, deleteItem, clearListHandler }) => {
    const expenseList = expenses.map(expense => {
        return <ItemComp key={expense.id}
            expense={expense}
            editItem={editItem}
            deleteItem={deleteItem} />
    })
    return (
        <div className="col-sm-12 col-md-8 offset-md-2 text-center border border-gray p-2">
            {expenses.length ? expenseList : "You Don't Have Thing to Calculate"}
            {expenses.length && <button
                onClick={clearListHandler}
                className="btn btn-danger btn-block">Clear <i className="fas fa-trash-alt"></i></button>}
        </div>
    );
}

export default ListComp;
