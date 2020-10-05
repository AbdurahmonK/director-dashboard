import React from 'react'
import {Card} from './Card'
import { Table } from './Table'
import { Income } from './Income'
import {LineChartComponent} from './LineChart'
import { CircleChartComponent } from './CircleChart'
import {data1, data2, data3, colors1, colors2, Ldata1, Ldata2} from '../../data'

export const Dashboard = () => {
    return (
        <div className="all_data">
            <h2>DIREKTOR DASHBOARD</h2>
            <div className="cards">
                        <Card cardName="Ro'yhatdan o'tgan talabalar soni" cardNumber='620' spanNumber='5' numberColor='#000000' spanNamuberColor='#00b533' />
                        <Card cardName="Aktiv talabalar soni" cardNumber='120' spanNumber='34' numberColor='#00b533' spanNamuberColor='#00b533' />
                        <Card cardName="Bitirgan talabalar soni" cardNumber='120' spanNumber='34' numberColor='#ffb436' spanNamuberColor='#ffb436'/>
                        <Card cardName="To'xtab qolgan talabalar soni" cardNumber='20' spanNumber='14' numberColor='#de1e3a' spanNamuberColor='#de1e3a'/>
            </div>
            <div className="data">
                <div className="line_charts">
                    <Income />
                    <LineChartComponent 
                                    Lheight={300}
                                    data={Ldata1}
                                    cHeight="350px"
                                    greenText="Real Pul"
                                    orangeText="No Real Pul"
                                    greenTextSpan="Payme, Yandex"
                                    orangeTextSpan="Vaucher, Cashback"
                                    text="Tushumlar kategoriyalar bo'yicha"
                    />
                    <LineChartComponent 
                                    Lheight={200}
                                    data={Ldata2}
                                    cHeight="255px"
                                    greenText="Sotib olgan"
                                    orangeText="Registered"
                                    text="Sotib olgan va ro'yhatdan o'tganlar"
                    />
                </div>
                <div className="circle_charts">
                    <CircleChartComponent 
                                bTop="-70px" 
                                pTop="-70px"
                                data={data1}
                                bLeft="140px"
                                pLeft="120px"
                                number="1400"
                                textSize="38px"
                                colors={colors1}
                                description="Umumiy userlar soni"
                                text="Sotib olgan va ro'yhatdan o'tganlar nisbati"
                    />
                    <CircleChartComponent 
                                bTop="-45px" 
                                pTop="-45px"
                                data={data2}
                                bLeft="120px"
                                pLeft="120px"
                                textSize="18px"
                                colors={colors2}
                                number="500.000.000 UZS"
                                description="Umumiy summa"
                                text="Pullar kurslar kesimida"
                    />
                    <CircleChartComponent 
                                bTop="-80px" 
                                pTop="-80px"
                                number="620"
                                data={data3}
                                pLeft="130px"
                                bLeft="140px"
                                textSize="48px"
                                colors={colors2}
                                description="Umumiy talabalar"
                                text="Talabalar kurslar kesimida"
                    />
                </div>
            </div>
            <div className="table">
                <Table />
            </div>
        </div>
    )
}