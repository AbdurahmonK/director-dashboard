import React, { PureComponent } from 'react'
import { PieChart, Pie, Cell, Tooltip } from 'recharts'

export default class CircleChart extends PureComponent {

  render() {
    return (
      <PieChart width={350} height={180}>
        <Pie
          cx={180}
          cy={170}
          data={this.props.data}
          endAngle={0}
          nameKey="name"
          dataKey="value"
          startAngle={180}
          paddingAngle={0}
          innerRadius={100}
          outerRadius={150}
        >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={this.props.colors[index]} />)
          }
         </Pie>
        <Tooltip />
      </PieChart>
    )
  }
}

export const CircleChartComponent = ({text, data, number, description, textSize, colors, bTop, bLeft, pTop, pLeft}) => {
  return(
    <div className="circle_chart">
      <div className="name_icon">
        <p>{text}</p>
        <div className="icon">
          <i className="fa fa-calendar" style={{fontSize:'20px'}}></i>
        </div>
      </div>
      <CircleChart data={data} colors={colors}/>
      <b style={{fontSize:textSize, top: bTop, left: bLeft}}>{number}</b>
      <p style={{top: pTop, left: pLeft}}>{description}</p>
    </div>
  )
}