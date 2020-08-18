import React from 'react'
import 'zingchart/es6';
import ZingChart from 'zingchart-react';
// EXPLICITLY IMPORT MODULE
import 'zingchart-react/dist/modules/zingchart-depth.min.js';
import { LineChart, PieChart } from 'react-chartkick'
import 'chart.js'

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
    }

    return (
        <div className="container-fluid has-background-grey-lighter">
            <div className="has-padding-top-20 has-padding-bottom-20 ">
                {/* heading */}
                <div className="has-padding-left-30 has-padding-right-30">
                    <div >
                        <h3 className="title is-3">Dashboard</h3>
                    </div>
                    {/* graphs main Div */}
                    <div className="has-padding-top-20 has-padding-bottom-20 flex-row">
                        {/* box 1 */}
                            <div className="box ">
                                <div className="level">
                                    <div className="level-left">
                                        <h5 className="title is-5">Sales</h5>
                                    </div>
                                    <div className="level-right">
                                        <h6 className="title is-6 has-text-grey-light">View</h6>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="title is-3">$5023</h3>
                                </div>
                                <div className="has-padding-top-20">
                                    <LineChart data={{ "2017-05-13": 6, "2017-05-14": 1 }} />
                                </div>
                            </div>
                        {/* box 2 */}
                        <div className="has-padding-left-10 ">
                            <div className="box">
                                <div className="level">
                                    <div className="level-left">
                                        <h5 className="title is-5">Sales</h5>
                                    </div>
                                    <div className="level-right">
                                        <h6 className="title is-6 has-text-grey-light">View</h6>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="title is-3">$5023</h3>
                                </div>
                                <div className="has-padding-top-20">
                                    <LineChart data={{ "2017-05-13": 2, "2017-05-14": 5 }} />
                                </div>
                            </div>
                        </div>
                        {/* box 3 */}
                        <div className="has-padding-left-10 ">
                            <div className="box">
                                <div className="level">
                                    <div className="level-left">
                                        <h5 className="title is-5">Sales</h5>
                                    </div>
                                    <div className="level-right">
                                        <h6 className="title is-6 has-text-grey-light">View</h6>
                                    </div>
                                </div>
                                <div>
                                    <h3 className="title is-3">$5023</h3>
                                </div>
                                <div className="has-padding-top-20">
                                    <LineChart data={{ "2017-05-13": 4, "2017-05-14": 9 }} />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* below charts */}
                    <div className="columns flex-row ">
                        <div className="column has-padding-left-15 has-half-width">
                            {/* list of peoples */}
                            <div className="box">
                                {/* heading */}
                                <div>
                                    <h5 className="title is-5">Best Seller</h5>
                                </div>
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>

                                {/* 2nd one */}
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                {/* 3rd */}
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                {/* 4th */}
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* right side  */}
                        <div className="column has-padding-left-15 has-half-width">
                            {/* list of peoples */}
                            <div className="box">
                                {/* heading */}
                                <div>
                                    <h5 className="title is-5">Best Seller</h5>
                                </div>
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>

                                {/* 2nd one */}
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                {/* 3rd */}
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>
                                <hr></hr>
                                {/* 4th */}
                                <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
                                    {/* left */}
                                    <div className="level-left">
                                        <div>
                                            <img src={require("../../assets/images/bitmap.png")} />
                                        </div>
                                        <div className=" has-padding-left-10 ">
                                            <h5 className="title is-5 has-margin-0">Liam wan</h5>
                                            <h6>Earn $2100</h6>
                                        </div>
                                    </div>
                                    {/* right */}
                                    <div className="level-right ">
                                        <div className="has-padding-right-20">
                                            <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View Profile</u></h6>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* below data */}
                    <div className="box">
                        <ZingChart data={config} />
                    </div>

                </div>
            </div>
        </div>
    );
}