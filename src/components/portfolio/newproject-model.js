import React from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    InputGroup,
    InputGroupAddon,
    Input,
    Row,
    Col
} from 'reactstrap';

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: true
        };

        this.toggle = this
            .toggle
            .bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });

        this
            .props
            .onClose();
    }

    render() {
        return (
            <div className="modelPopup">
                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader>{this.props.intakeID}</ModalHeader>
                    <ModalBody>

                        <Row className="popupRowStyle">
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">CGI Employee ID</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Resource Name</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="popupRowStyle">
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">MSA Rate</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">BOH Rate</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </Col>
                        </Row>

                        <Row className="popupRowStyle">
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Estimated Hours</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">Actual Hours</InputGroupAddon>
                                    <Input/>
                                </InputGroup>
                            </Col>
                        </Row>

                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;