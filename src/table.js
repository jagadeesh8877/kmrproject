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
                        accessor: 'time',
                        style: { textAlign: "center" },
                        Cell: (props) => {
                            return <span>{props.original.name}</span>;
                          },
                    }, {
                        Header: 'User',
                        accessor: 'user',
                        style: { textAlign: "center" },
                    }, {
                        Header: 'Zid',
                        accessor: 'zid',
                        style: { textAlign: "center" }
                    }, {
                        Header: 'Time',
                        accessor: 'time',
                        style: {textAlign: "center"},
                        show: false
                    }
                ]} defaultPageSize={20}  resizable= {false}/>
            </div>
        );
    }
}
export {Table}