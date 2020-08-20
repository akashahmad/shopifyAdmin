import React from 'react';
import { LineChart } from 'react-chartkick'
import 'chart.js'
export default (props) => {
    let { title, displayValue, data } = props;
    return <div className="box ">
        <div className="level">
            <div className="level-left">
                <h5 className="title is-5">{title}</h5>
            </div>
            <div className="level-right">
                <h6 className="title is-6 has-text-grey-light">View</h6>
            </div>
        </div>
        <div>
            <h3 className="title is-3">{displayValue}</h3>
        </div>
        <div className="has-padding-top-20 columns is-multiline is-mobile is-desktop" >
            <div className="column is-10-desktop ">
                <LineChart data={data} />
            </div>
        </div>
    </div>
}