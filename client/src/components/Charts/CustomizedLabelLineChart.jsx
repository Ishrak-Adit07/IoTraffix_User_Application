/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Khilgaon',
        pv: 24,
        amt: 60,
        'time(s)': 45, // Example average signal time in seconds
    },
    {
        name: 'Rajarbag',
        pv: 22,
        amt: 60,
        'time(s)': 50, // Example average signal time in seconds
    },
    {
        name: 'Polton',
        pv: 32,
        amt: 60,
        'time(s)': 40, // Example average signal time in seconds
    },
    {
        name: 'Kakrail',
        pv: 39,
        amt: 60,
        'time(s)': 55, // Example average signal time in seconds
    },
    {
        name: 'Ramna',
        pv: 48,
        amt: 60,
        'time(s)': 60, // Example average signal time in seconds
    },
    {
        name: 'Shahbagh',
        pv: 38,
        amt: 60,
        'time(s)': 35, // Example average signal time in seconds
    },
    {
        name: 'TSC',
        pv: 43,
        amt: 60,
        'time(s)': 47, // Example average signal time in seconds
    },
];

class CustomizedLabel extends PureComponent {
    render() {
        const { x, y, stroke, value } = this.props;

        return (
            <text x={x} y={y} dy={-4} fill={stroke} fontSize={10} textAnchor="middle">
                {value}
            </text>
        );
    }
}

class CustomizedAxisTick extends PureComponent {
    render() {
        const { x, y, stroke, payload } = this.props;

        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={16} textAnchor="end" fill="#666" transform="rotate(-35)">
                    {payload.value}
                </text>
            </g>
        );
    }
}

function CustomizedLabelLineChart({ headerText }) {
    return (
        <div
            style={{ width: "100%", height: 400 }}
            className="flex flex-wrap justify-center items-center my-10"
        >
            <h1 className="text-2xl mb-10 text-slate-500">{headerText}</h1>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" height={60} tick={<CustomizedAxisTick />} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="time(s)" stroke="#a83234" label={<CustomizedLabel />} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CustomizedLabelLineChart;