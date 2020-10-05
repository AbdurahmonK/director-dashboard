import React from 'react'

export const Card = ({cardName, cardNumber, spanNumber, numberColor, spanNamuberColor}) => {
    return (
        <div className="card">
            <div className="top">
                <p>{cardName}</p>
                <div className="icon">
                    <i className="fa fa-calendar" style={{fontSize:'20px'}}></i>
                </div>
            </div>
            <div className="bottom">
                <h1 style={{color: numberColor}}>{cardNumber}</h1>
                <p style={{margin: '0 0', fontSize: '14px', color: '#898989'}}>
                    <span style={{color: spanNamuberColor, fontSize: '16px'}}>{'+' + spanNumber + 'ta'}</span>
                    <br /> in this month
                </p>
            </div>
        </div>
    )
}