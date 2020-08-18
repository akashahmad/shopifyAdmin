import React from 'react'

export default () => {
    return (
        <>
            <div className="container-fluid backg-sideNav has-height-100">
                <div className="columns flex-column">
                    {/* heading */}
                    <div className="column heading has-text-centered has-padding-top-40 has-padding-bottom-30">
                        <h4 class="title is-4 has-text-white-bis">Ni Dashboard</h4>
                    </div>
                    {/* navigations links*/}
                    <div>
                        <div className="has-padding-left-20">
                            {/* dashboard */}
                            <div className="flex-row has-padding-left-25 has-padding-top-20 has-padding-bottom-20 has-cursor-pointer">
                                <div>
                                    <img src={require("../../assets/images/dashboard.png")} width="30px" />
                                </div>
                                <div className="has-padding-left-10 has-padding-top-5">
                                    <h6 class="title is-6 has-text-grey-lighter">Dashboard</h6>
                                </div>
                            </div>
                            {/* user management */}
                            <div className=" flex-row has-padding-left-25 has-padding-top-20 has-padding-bottom-20  has-cursor-pointer">
                                <div>
                                    <img src={require("../../assets/images/admin.png")} width="23px" />
                                </div>
                                <div className="has-padding-left-15 has-padding-top-5">
                                    <h6 class="title is-6 has-text-grey-lighter">User Management</h6>
                                </div>
                            </div>
                            {/* Payment */}
                            <div className=" flex-row has-padding-left-25 has-padding-top-20 has-padding-bottom-20 has-cursor-pointer">
                                <div>
                                    <img src={require("../../assets/images/newsletter.png")} width="24px" />
                                </div>
                                <div className="has-padding-left-15 has-padding-top-5">
                                    <h6 class="title is-6 has-text-grey-lighter">Payment</h6>
                                </div>
                            </div>
                            {/* Setting */}
                            <div className=" flex-row has-padding-left-25 has-padding-top-20 has-padding-bottom-20 has-cursor-pointer">
                                <div>
                                    <img src={require("../../assets/images/Setting.png")} width="25px" />
                                </div>
                                <div className="has-padding-left-15 has-padding-top-5">
                                    <h6 class="title is-6 has-text-grey-lighter">Setting</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}