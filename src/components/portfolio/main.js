import React, {Component} from 'react';
import {InputGroup, InputGroupAddon, Input} from 'reactstrap';
import TableRow from '../common/table-row';
import Pagination from '../common/pagination';
import {Table} from 'reactstrap';
import ModalExample from './newproject-model';

import {Row, Col} from 'reactstrap';

class main extends Component {

    projDetails = [];

    constructor(props) {
        super(props);
        this
            .projDetails
            .push({intakeID: 'CAL1804054472', OPNumber: 'OP170641', ProjName: 'BOH-CCT-18-029-N-Softphone'});

        this
            .projDetails
            .push({intakeID: 'DEP1802164472', OPNumber: 'OP180169', ProjName: 'BOH-CCT-VISA Debit April 2018 Mandate'});

        this
            .projDetails
            .push({intakeID: 'DARH2723456', OPNumber: 'OP170641', ProjName: 'BOH-CMS-19-003'});

        this.state = {
            intakeIDClicked: '',
            showPopup: false
        };

        this.onIntakeIDClick = this
            .onIntakeIDClick
            .bind(this);

            this.closePopup = this
            .closePopup
            .bind(this);
    }

    onIntakeIDClick = function (intakeID) {
        this.setState({intakeIDClicked: intakeID, showPopup: !this.state.showPopup});
    }

    handleChange = function (event, elementid) {
        console.log(event.target.value)
    }

    closePopup = function() {
        this.setState({intakeIDClicked: '', showPopup: !this.state.showPopup});
    }

    render() {

        console.log("Render Called", this.state.intakeIDClicked);
        var ModelPopup = '';

        if (this.state.showPopup) {
            ModelPopup = <ModalExample onClose={this.closePopup} intakeID={this.state.intakeIDClicked}/>
        }

        var table = this
            .projDetails
            .map(proj => {
                return <TableRow
                    key={proj.intakeID}
                    proj={proj}
                    onIntakeIDClick={this.onIntakeIDClick}/>
            });

        return (
            <div>
                {ModelPopup}

                <div className="searchpanel">

                    <Row>
                        <Col>
                            <InputGroup className="inputGroup">
                                <InputGroupAddon addonType="prepend">Intake ID</InputGroupAddon>
                                <Input onChange={(event) => this.handleChange(event, 'intakeid')}/>
                            </InputGroup>

                        </Col>

                        <Col>
                            <InputGroup className="inputGroup">
                                <InputGroupAddon addonType="prepend">OP Number</InputGroupAddon>
                                <Input onChange={(event) => this.handleChange(event, 'opnumber')}/>
                            </InputGroup>

                        </Col>

                        <Col>
                            <InputGroup className="inputGroup">
                                <InputGroupAddon addonType="prepend">Project Name</InputGroupAddon>
                                <Input onChange={(event) => this.handleChange(event, 'projectname')}/>
                            </InputGroup>
                        </Col>
                    </Row>

                </div>

                <Table borderless striped>
                    <thead>
                        <tr>
                            <th>Intake ID</th>
                            <th>OP Number</th>
                            <th>Project Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </Table>

                <div className="rightAlign">
                    <Pagination/>
                </div>

            </div>
        )
    }
}

export default main