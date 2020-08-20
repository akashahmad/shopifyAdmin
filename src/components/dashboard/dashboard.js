import React, { useEffect, useState } from 'react'
import ZingChart from '../zingChart';
import LineChartBox from '../lineChartBox';
import CustomerAndOrder from '../customer&OrderCard';
import axios from 'axios'
import Config from '../../config'

export default () => {
    const [ordersCount, setOrdersCount] = useState();
    const [sales, setsales] = useState();
    const [earn, setEarn] = useState();
    const [customers, setCustomers] = useState([]);
    const [products, setProducts] = useState([]);
    const [lineChartData] = useState({ "2020-06-27": 1, "2020-06-26": 2, "2020-06-25": 3, "2020-06-24": 2 })

    useEffect(() => {
        axios.get(Config.baseUrl)
            .then(res => {
                let allOrders = res.data.orders
                let initinalSale = 0;
                let initinalEarn = 0;
                let initialOrdersCount = 0
                let initialcustomer = []
                let initialProducts = []
                allOrders.forEach(order => {
                    initinalSale = parseFloat(order.total_price) + parseFloat(initinalSale);
                    initinalEarn = parseFloat(order.subtotal_price) + parseFloat(initinalEarn);
                    initialOrdersCount = initialOrdersCount + 1;
                    initialcustomer.push({
                        id: order.customer.id,
                        name: order.customer.first_name,
                        city: order.customer.default_address.city
                    })
                    initialProducts.push({
                        id: order.line_items[0].id,
                        title: order.line_items[0].title,
                        quatity: order.line_items[0].quantity,
                        price: order.line_items[0].price
                    })
                });
                let uniqueCustomer = distinct(initialcustomer, "id")
                setProducts(initialProducts)
                setCustomers(uniqueCustomer)
                setsales(initinalSale)
                setEarn(initinalEarn)
                setOrdersCount(initialOrdersCount)
            })
    }, []);
    const distinct = (array, key) => {
        let flags = [], output = [], l = array.length, i;
        for (i = 0; i < l; i++) {
            if (flags[array[i][key]] + "" !== "undefined") {
                output[flags[array[i][key]]] = array[i];
                continue;
            }
            output.push(array[i]);
            flags[array[i][key]] = output.length - 1;
        }
        return output
    };


    return (
        <div className="container-fluid has-background-grey-lighter has-padding-left-5">
            <div className="has-padding-top-20 has-padding-bottom-20">
                {/* heading */}
                <div className="has-padding-left-30 has-padding-right-20">
                    <div >
                        <h3 className="title is-3">Dashboard</h3>
                    </div>
                    {/* graphs main Div */}
                    <div className="has-padding-top-20 has-padding-bottom-20 flex-row  columns is-multiline is-mobile is-desktop">
                        <div className="column is-one-third">
                            <LineChartBox title={"Sales"} displayValue={`$${sales ? sales.toFixed(2) : 0}`}
                                data={lineChartData} />
                        </div>
                        <div className="column is-one-third">
                            <LineChartBox title={"Earn Money"} displayValue={`$${earn ? earn.toFixed(2) : 0}`}
                                data={lineChartData} />
                        </div>
                        <div className="column is-one-third">
                            <LineChartBox title={"Orders"} displayValue={`${ordersCount ? ordersCount : 0}`}
                                data={lineChartData} />
                        </div>
                    </div>
                    {/* below charts */}
                    <div className="columns flex-row ">
                        <div className="column has-padding-left-15 has-half-width">
                            {/* list of peoples */}
                            <div className="box">
                                {/* heading */}
                                <div>
                                    <h5 className="title is-5">Customers</h5>
                                </div>
                                {customers && customers.map((sin, index) => <CustomerAndOrder type="customer" key={index} name={sin.name}
                                    value={sin.city} />)}
                            </div>
                        </div>
                        {/* right side  */}
                        <div className="column has-padding-left-15 has-half-width">
                            {/* list of peoples */}
                            <div className="box">
                                {/* heading */}
                                <div>
                                    <h5 className="title is-5">Orders</h5>
                                </div>
                                {products && products.map((sin, index) => <CustomerAndOrder type="order" key={index} name={sin.title}
                                    value={sin.price} />)}
                            </div>
                        </div>
                    </div>
                    {/* ZingChart */}
                    <ZingChart />
                </div>
            </div>
        </div>
    );
}