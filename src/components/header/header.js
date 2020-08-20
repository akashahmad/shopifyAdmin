import React from 'react'

export default (props) => {
    let { setToggle, toggle } = props
    return (
        <>
            <div className="container-fluid has-padding-top-15">
                <div className="has-background-white box">
                    <div className="level">
                        {/* hamburger */}
                        <div className="level-left" onClick={()=>setToggle(!toggle)}>
                            <img src={require("../../assets/images/hamburger.png")} width="25px" alt="" />
                        </div>
                        <div className="level-right">
                            {/* input */}
                            <div>
                                <input className="input is-rounded" type="text" placeholder="Search" />
                            </div>
                            {/* setting */}
                            <div className="has-padding-left-10 has-padding-right-10">
                                <img src={require("../../assets/images/Setting.png")} width="35px" alt="" />
                            </div>
                            <div>
                                <img src={require("../../assets/images/bell.png")} width="30px" alt="" />
                            </div>
                            <div className="has-padding-left-10 has-padding-right-10">
                                <img src={require("../../assets/images/bitmap.png")} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}