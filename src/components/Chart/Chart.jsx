import './Chart.css'

import ChartBar from './ChartBar'

const Chart = (props) => {
    const valueArr = props.dataPoints.map(num => num.value)
    const totalMax = Math.max(...valueArr)


    return <div className='chart'>
        {props.dataPoints.map(data => 
        <ChartBar 
        value={data.value} 
        maxValue={totalMax} 
        label={data.label} 
        key={data.label}
        />)}
    </div>
}

export default Chart