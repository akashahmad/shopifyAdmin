import React from 'react';
export default (props) => {
    let {name, city} = props;
    return <div>
        <div className="level has-padding-top-5 has-padding-bottom-5 flex-row">
            {/* left */}
            <div className="level-left">
                <div>
                    <img src={require("../../assets/images/bitmap.png")} alt=""/>
                </div>
                <div className=" has-padding-left-10 ">
                    <h5 className="title is-5 has-margin-0">{name}</h5>
                    <h6>City {city}</h6>
                </div>
            </div>
            {/* right */}
            <div className="level-right ">
                <div className="has-padding-right-20">
                    <h6 className="title is-6 has-text-info has-cursor-pointer"><u>View
                        Profile</u></h6>
                </div>
            </div>
        </div>
        <hr></hr>
    </div>
}