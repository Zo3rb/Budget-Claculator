import React from 'react';

const AlertComp = ({ type, text }) => {
    return (
        <div className="col-sm-12 col-md-8 offset-md-2 text-center">
            <div className={`alert alert-${type}`} role="alert">
                <h5>{text}</h5>
            </div>
        </div>
    );
}

export default AlertComp;
