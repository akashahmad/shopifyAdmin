import React ,{useState}from 'react'
import Header from '../../components/header/header'
import Sidenav from '../../components/sidenav/sidenav'

export default (props) => {

    const [toggle,setToggle]=useState(true);

    return (
        <>
            <div className="columns is-flex ">
              {toggle&&<div className="column padding-0 is-one-fifth backg-sideNav animate"  >
                    <Sidenav />
                </div>}
                <div className="is-full-width">
                    <Header setToggle={setToggle} toggle={toggle} />
                    {props.children}
                </div>
            </div>
        </>
    );
}