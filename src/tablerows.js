import React from "react";
class TableRows extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
                <tr>
                    <td>{this.props.name}</td>
                    <td>{this.props.user}</td>
                    <td>{this.props.zid}</td>
                </tr>
    );
}
}
export {TableRows}