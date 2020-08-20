import React from 'react';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
// EXPLICITLY IMPORT MODULE
import 'zingchart-react/dist/modules/zingchart-depth.min.js';
export default () => {
    let config = {
        "backgroundColor": "transparent",
        type: 'bar',
        series: [
            {
                values: [
                    20,
                    40,
                    25,
                    50,
                    15,
                    45,
                    33,
                    34
                ]
            }, {
                values: [
                    5,
                    30,
                    21,
                    18,
                    59,
                    50,
                    28,
                    33
                ]
            }, {
                values: [
                    30,
                    5,
                    18,
                    21,
                    33,
                    41,
                    29,
                    15
                ]
            }
        ],
        'scale-y': {
            visible: false
        },
        'scale-x': {
            visible: false
        },
        tooltip: {
            text: 'value: %v'
        }
    };
    return <div className="box">
        <ZingChart data={config}/>
    </div>
}