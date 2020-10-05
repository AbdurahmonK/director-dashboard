import React from 'react'

export const Accordion = ({name}) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        <div className="accordion">
            <div className="accordion_title" onClick={() => setIsOpen(!isOpen)}>
                <p style={{fontWeight: 600}}>{name.first} {name.last}</p>
                <div className="student">
                    <p>300ta</p>
                    <p style={{fontSize: '12px', color: '#898989'}}>in this month <span style={{color: '#00b533'}}>+21</span></p>
                </div>
                <p>3 ta</p>
                <p>8,000,000</p>
                <p style={{color: '#00b533'}}>5,000,000</p>
                <p style={{color: '#DE1E3a'}}>3,000,000</p>
                {isOpen ? <i class="fa fa-times"></i> : <i className="fa fa-plus"></i>}
            </div>
            { isOpen && (
                <div className="accordion_content_out">
                    <div className="accordion_content">
                        <p>
                            Front-end Development <br/>
                            <span style={{color: '#898989'}}>5ta modul | 54ta dars</span>
                        </p>
                        <div className="student">
                            <p>120ta</p>
                            <p style={{fontSize: '12px', color: '#898989'}}>in this month <span style={{color: '#00b533'}}>+12</span></p>
                        </div>
                        <p></p>
                        <p>3,000,000</p>
                        <p style={{color: '#00b533'}}>2,000,000</p>
                        <p style={{color: '#DE1E3a'}}>1,000,000</p>
                        <i className="fa fa-plus" style={{visibility: 'hidden'}}></i>
                    </div>
                    <div className="accordion_content">
                        <p>
                            ReactJS <br/>
                            <span style={{color: '#898989'}}>3ta modul | 30ta dars</span>
                        </p>
                        <div className="student">
                            <p>80ta</p>
                            <p style={{fontSize: '12px', color: '#898989'}}>in this month <span style={{color: '#00b533'}}>+12</span></p>
                        </div>
                        <p></p>
                        <p>4,000,000</p>
                        <p style={{color: '#00b533'}}>2,000,000</p>
                        <p style={{color: '#DE1E3a'}}>2,000,000</p>
                        <i className="fa fa-plus" style={{visibility: 'hidden'}}></i>
                    </div>
                    <div className="accordion_content">
                        <p>
                            SaaS va Less     <br/>
                            <span style={{color: '#898989'}}>2ta modul | 24ta dars</span>
                        </p>
                        <div className="student">
                            <p>100ta</p>
                            <p style={{fontSize: '12px', color: '#898989'}}>in this month <span style={{color: '#00b533'}}>+12</span></p>
                        </div>
                        <p></p>
                        <p>1,000,000</p>
                        <p style={{color: '#00b533'}}>1,000,000</p>
                        <p style={{color: '#DE1E3a'}}>0</p>
                        <i className="fa fa-plus" style={{visibility: 'hidden'}}></i>
                    </div>
                </div>
            )}
        </div>
    )
}