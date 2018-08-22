import React from "react";
class TableRows extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.course}</td>
                    <td>{this.props.studentid}</td>
                    <td>{this.props.recordedtime}</td>
                    <td>{this.props.status}</td>
                </tr>
    );
}
}
export {TableRows}