import React from 'react';

const FormComp = ({ chargeHandler, amountHandler, submitHandler, charge, amount, edit }) => {
    return (
        <div className="col-sm-12 col-md-8 offset-md-2 text-center my-5">
            <form onSubmit={submitHandler}>
                <div className="form-row align-items-center">
                    <div className="col-sm-12 col-md-6 my-1">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Charge (e.g.. rent)"
                            name="charge"
                            value={charge}
                            onChange={chargeHandler} />
                    </div>
                    <div className="col-sm-12 col-md-6 my-1">
                        <input
                            type="number"
                            className="form-control"
                            placeholder="Amount (e.g.. 300)"
                            name="amount"
                            value={amount}
                            onChange={amountHandler} />
                    </div>
                    <div className="col-sm-12">
                        <button type="submit" className={`btn btn-block ${edit ? 'btn-warning' : 'btn-primary'}`}>{edit ? "Edit" : "Add"}</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default FormComp;
