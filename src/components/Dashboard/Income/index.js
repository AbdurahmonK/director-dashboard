import React from 'react'

export const Income = () => {
    return (
        <div className="income">
            <div className="income_top">
                <p>Umumiy tushum. <br/> Barcha tiplar bo'yicha</p>
                <div style={{display: 'flex', border: '2px solid #f9f9f9', padding: '10px', marginLeft: '250px'}}>
                    <p style={{fontSize: '16px', fontWeight: 600, margin: '0 10px 0 0'}}>Real pul turi</p>
                    <i class="fa fa-chevron-down"></i>
                </div>
                <div style={{display: 'flex'}}>
                        <p style={{fontSize: '16px', fontWeight: 500, margin: '10px 10px 0 0'}}>Sentabr.2020</p>
                    <div className="icon">
                        <i className="fa fa-calendar" style={{fontSize:'20px'}}></i>
                    </div>
                </div>
            </div>
            <div className="income_bottom">
                <div className="tab_bar">BARCHASI <span>REAL PUL</span> NO REAL PUL</div>
                <div className="total_price">
                    <h2>450.000.000 UZS</h2>
                    <p>This month: <span style={{color: '#00b533', fontSize: '16px'}}>+ 12.000.000</span></p>
                </div>
            </div>
        </div>
    )
}