import React, { PureComponent } from 'react'
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip} from 'recharts'

class LineChart1 extends PureComponent {

  render() {
    return (
      <LineChart
        width={1100}
        height={this.props.height}
        data={this.props.data}
      >
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="linear" dataKey="pv" legendType='none' activeDot={{ r: 10 }} stroke="#00b533" />
        <Line type="linear" dataKey="uv" legendType='none' activeDot={{ r: 10 }} stroke="#ffb436" />
      </LineChart>
    )
  }
}

export const LineChartComponent = ({text, data, Lheight, cHeight, greenText, greenTextSpan, orangeText, orangeTextSpan}) => {
  return (
    <div className="income_category" style={{height: cHeight}}>
      <div className="income_top">
        <p>{text}</p>
        <div className="real_money">
          <div></div>
          <p>{greenText}<br/>{greenTextSpan && <span>{greenTextSpan}</span>}</p>
        </div>
        <div className="unreal_money">
          <div></div>
          <p>{orangeText} <br/>{orangeTextSpan && <span>{orangeTextSpan}</span>}</p>
        </div>
        <div style={{display: 'flex'}}>
          <p style={{fontSize: '16px', fontWeight: 500, margin: '10px 10px 0 0'}}>Sentabr.2020</p>
          <div className="icon">
            <i className="fa fa-calendar" style={{fontSize:'20px'}}></i>
          </div>
        </div>
      </div>
      <div style={{width: '100vh', overflowX: 'scroll'}}>
        <LineChart1 data={data} height={Lheight}/>
      </div>
    </div>
  )
}