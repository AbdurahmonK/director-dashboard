import React from 'react'
import { Accordion } from './Accordion'

export const Table = () => {
    const [ users, setUsers] = React.useState([])
    
    const getUsers = () => {
        fetch('https://randomuser.me/api/?results=50&gender=male&seed=foobar')
            .then(res => res.json()).then(res => setUsers(res.results))
            .catch(err => console.log(err))
    }

    React.useEffect(() => getUsers())

    return (
        <>
            <div className="income_top">
                <p>Mentor <br/> ishlab topgan pul</p>
                <div style={{display: 'flex'}}>
                    <p style={{fontSize: '16px', fontWeight: 500, margin: '10px 10px 0 0'}}>Sentabr.2020</p>
                        <div className="icon">
                            <i className="fa fa-calendar" style={{fontSize:'20px'}}></i>
                        </div>
                </div>
            </div>

            <div className="table_head">
                <p>MENTOR ISMI</p>
                <p>O'QUVCHI</p>
                <p>KURSLARI</p>
                <p>DAROMAD</p>
                <p>BERILDI</p>
                <p>QOLDI</p>
                <i className="fa fa-plus" style={{visibility: 'hidden'}}></i>
            </div>
            <div className="accordion_out">
                {users.length ? users.map((user, index) => (
                    <Accordion key={index} name={user.name}/>
                )): 'Kuting!'}
            </div>
            <div className="table_foot">
                <p>JAMI SUMMA:</p>
                <p>620</p>
                <p>6</p>
                <p>14,600,000</p>
                <p style={{color: '#00b533'}}>5,300,000</p>
                <p style={{color: '#DE1E3a'}}>3,000,000</p>
                <i className="fa fa-plus" style={{visibility: 'hidden'}}></i>
            </div>
        </>
    )
}