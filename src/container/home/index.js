import React from 'react'
import Header from '../../components/header/header'
import Sidenav from '../../components/sidenav/sidenav'
import Dashboard from '../../components/dashboard/dashboard'

export default () => {
    return (
        <>
            <div className="columns is-flex ">
                <div className="column padding-0 is-one-fifth backg-sideNav">
                    <Sidenav />
                </div>
                <div className="is-full-width">
                    <Header />
                    <Dashboard/>
                </div>
            </div>
        </>
    );
}