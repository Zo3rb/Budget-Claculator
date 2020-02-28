import React, { Fragment } from 'react';

const ItemComp = ({ expense, editItem, deleteItem }) => {
    const { id, charge, amount } = expense
    return (
        <Fragment>
            <ul className="list-unstyled">
                <li className="d-flex justify-content-between font-weight-bold pl-5 border-bottom pb-2">
                    <div className="align-self-start">
                        {charge} <span className="text-success">${amount}</span>
                    </div>
                    <div className="align-self-end pr-5">
                        <button onClick={() => editItem(id)} className="btn btn-success mr-2"><i className="fas fa-pen"></i></button>
                        <button onClick={() => deleteItem(id)} className="btn btn-danger"><i className="fas fa-backspace"></i></button>
                    </div>
                </li>
            </ul>
        </Fragment>
    );
}

export default ItemComp;
