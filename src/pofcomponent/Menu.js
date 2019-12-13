import React from "react";

class Menu extends React.Component {
    clickfunction = (station) => {
        console.log('Hi!');
        this.props.stationChange(station);
    }

    render() {
        return(
            <div>
                <p>&#9776;</p>
                {this.props.stations.map(station => {
                    return(
                        <p onClick={() => this.clickfunction(station)} key={station}>
                            {station}
                        </p>
                    )
                })}
            </div>
        )
    }
}
export default Menu;