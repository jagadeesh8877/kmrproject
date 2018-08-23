import React from "react";
import './styles/tablestyle.css';
class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  
        return(
            <div>
                <table id="table">
                    <thead>
                        <tr>
                            <th>Request Time</th>
                            <th>User</th>
                            <th>Zid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.rows}
                    </tbody>
                </table>
            </div>
        );
    }
}
export {Table}