import React from "react";

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state={
            openmenu: false
        }
    }
    clickfunction = (station) => {
        // console.log('Hi!');
        this.props.stationChange(station);
        this.clickopenmenu()        
    }


    clickopenmenu = () => {
        // console.log(this.state.openmenu);
        
        this.setState({
            openmenu: !this.state.openmenu
        })

    //    console.log(this.state.openmenu)
        
    }


    render() {
        return(
            <div>
                <p onClick={this.clickopenmenu}>&#9776;</p>
                {this.state.openmenu && this.props.stations.map(station => {
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