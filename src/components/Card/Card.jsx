import React, { useState } from 'react'
import { motion, AnimateSharedLayout } from 'framer-motion'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import './Card.css'
import {UilTimes} from '@iconscout/react-unicons'
import Chart from 'react-apexcharts'

const Card = (props) => {

    const [expanded, setExpanded] = useState(false)

    return (
        <AnimateSharedLayout>
            {
                expanded ?
                    <ExpandedCard param={props} setExpanded={() => setExpanded(false)} /> :
                    <CompactCard param={props} setExpanded={() => setExpanded(true)} />
            }
        </AnimateSharedLayout>
    )
}


//Compact Card Structure
function CompactCard({ param, setExpanded }) {
    const Png = param.png
    return (
        <motion.div className="CompactCard"
            style={{
                background: param.color.background,
                boxShadow: param.color.boxShadow
            }}
            onClick={setExpanded}
            layoutId='expandableCard'
        >
            <div className="radialBar">
                <CircularProgressbar
                    value={param.barValue}
                    text={`${param.barValue}%`}
                />
                <span>{param.title}</span>
            </div>
            <div className="detail">
                <Png />
                <span>₹{param.value}</span>
                <span>last 24 Hours</span>
            </div>
        </motion.div>
    )
}

//Expanded Card Structure
function ExpandedCard({ param, setExpanded }) {

    const data={
        options:{
            chart:{
                type:"area",
                height:"auto",
            },

            dropShadow:{
                enabled: false,
                enabledOnSeries: undefined,
                top: 0,
                left: 0,
                blue: 3, 
                color: "#000",
                opacity: 0.35,
            },

            fill: {
                colors: ["#fff"],
                type: "gradient",
            },
            dataLabels:{
                enabled: false,
            },
            stroke:{
                curve: "smooth",
                colors: ["white"],
            },
            tooltip:{
                x:{
                    format: "dd/MM/yy HH:mm",
                },
            },
            grid: {
                show:true,
            },
            xaxis: {
                type: "datetime",
                categories:[
                    "2022-01-01T00:00:00.000Z",
                    "2022-01-01T01:00:00.000Z",
                    "2022-01-01T02:00:00.000Z",
                    "2022-01-01T03:00:00.000Z",
                    "2022-01-01T04:00:00.000Z",
                    "2022-01-01T05:00:00.000Z",
                    "2022-01-01T06:00:00.000Z",
                ],
            },
        },
    };

    return (
        <motion.div className="ExpandedCard"
            style={{
                background: param.color.background,
                boxShadow: param.color.boxShadow,
            }}
            layoutId = 'expandableCard'
        >
            <div style={{alignSelf: 'flex-end', cursor:'pointer', color:'white'}}>
                <UilTimes onClick={setExpanded}/>
            </div>
            <span>{param.title}</span>
            <div className="chartContainer">
                <Chart series={param.series} type='area' options={data.options}/>
            </div>
            <span>Last 24 Hours</span>
        </motion.div>
    )
}





export default Card



