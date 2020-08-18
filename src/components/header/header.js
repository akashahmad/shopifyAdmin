import React from 'react'

export default () => {
    return (
        <>
            <div className="container-fluid has-padding-top-15">
                <div className="has-background-white box">
                    <div className="level">
                        {/* hamburger */}
                        <div className="level-left">
                            <img src={require("../../assets/images/hamburger.png")} width="25px" />
                        </div>
                        <div className="level-right">
                            {/* input */}
                            <div>
                                <input class="input is-rounded" type="text" placeholder="Search" />
                            </div>
                            {/* setting */}
                            <div className="has-padding-left-10 has-padding-right-10">
                                <img src={require("../../assets/images/Setting.png")} width="35px" />
                            </div>
                            <div>
                                <img src={require("../../assets/images/bell.png")} width="30px" />
                            </div>
                            <div className="has-padding-left-10 has-padding-right-10">
                                <img src={require("../../assets/images/bitmap.png")} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}