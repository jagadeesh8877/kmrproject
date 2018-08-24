import React from "react";
import ReactTable from "react-table";
import './styles/tableStyle.css';
import 'react-table/react-table.css';
class Table extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {  
        return(
            <div>
                <ReactTable data={this.props.rows} columns={[
                    {
                        Header: 'Request Time',
                        accessor: 'name',
                        style: { textAlign: "center" },
                        sortMethod: (a, b) => {
                            a = new Date(a).getTime();
                            b = new Date(b).getTime();
                               return b > a ? 1 : -1;
                            }
                    }, {
                        Header: 'User',
                        accessor: 'user',
                        style: { textAlign: "center" }
                    }, {
                        Header: 'Zid',
                        accessor: 'zid',
                        style: { textAlign: "center" }
                    }
                ]} defaultPageSize={20}  resizable= {false}/>
            </div>
        );
    }
}
export {Table}