import React from "react";
import {TableRows} from './tablerows';
const getstudentname = id => `http://localhost:8089/data/${id}`

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {tableRows: ''};
        this.fetchdata = this.fetchdata.bind(this);
        this.fetchdata();
    }
    componentWillReceiveProps() {
        this.fetchdata();
    }
    fetchdata() {
        this.rows = [];
        fetch(getstudentname(this.props.studentID)).then(d => d.json()).then(d => {
            d.forEach(function(row) {
                 this.rows.push(<TableRows name={row.RequestTime} user={row.User} zid={row.Zid} />);
            }.bind(this));
         this.setState({tableRows: this.rows});
         }).catch((err)=>{console.log(err)});
    }
    render() {    
        return(
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Request Time</th>
                            <th>User</th>
                            <th>Zid</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableRows}
                    </tbody>
                </table>
            </div>
        );
    }
}
export {Table}