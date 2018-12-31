import React, {Component} from 'react';
import {Button} from "reactstrap";

class TableRow extends Component {
    render() {
        return (
            <tr>
                <td>
                    <Button color="primary" onClick={() => this.props.onIntakeIDClick(this.props.proj.intakeID)}>{this.props.proj.intakeID}</Button>
                </td>
                <td>{this.props.proj.OPNumber}</td>
                <td>{this.props.proj.ProjName}</td>
            </tr>
        );
    }
}
export default TableRow;