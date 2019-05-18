import React, {Component} from 'react';
import * as Boot from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';

class createScan extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scan: {
                name: '',
                elevationMax: '',
                elevationMin: '',
                scannedByUserId: 0
            }
        };
    }

    render() {
        return (
            <div>
                <Accordion defaultActiveKey="0">
                    <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1" style={{color: 'black'}}>
                            Add Scan
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1" style={{justifyContent: 'center'}}>
                            <Card.Body class="border-primary">
                                <Boot.Row>
                                    <Boot.Col>
                                        <div className="child">
                                            <input placeholder="Scan" type="text" value={this.props.children}
                                                   onChange={e => {
                                                       const scan = {...this.state.scan};
                                                       scan.name = e.target.value;
                                                       this.setState({scan});
                                                   }}/>
                                        </div>
                                    </Boot.Col>
                                    <Boot.Col>
                                        <div className="child">
                                            <input placeholder="elevationMax" type="text" value={this.props.children}
                                                   onChange={e => {
                                                       const scan = {...this.state.scan};
                                                       scan.elevationMax = e.target.value;
                                                       this.setState({scan});
                                                   }}/>
                                        </div>
                                    </Boot.Col>
                                    <Boot.Col>
                                        <div className="child">
                                            <input placeholder="elevationMin" type="text" value={this.props.children}
                                                   onChange={e => {
                                                       const scan = {...this.state.scan};
                                                       scan.elevationMin = e.target.value;
                                                       this.setState({scan});
                                                   }}/>
                                        </div>
                                    </Boot.Col>
                                </Boot.Row>
                                <Boot.ButtonGroup toggle className="mt-3">
                                    <Boot.ToggleButton onChange={this.props.addNewScan.bind(this, this.state.scan)}
                                                       id="add" type="radio" name="add"
                                                       value="return-radio">
                                        Add
                                    </Boot.ToggleButton>
                                </Boot.ButtonGroup>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
        )
    }
}

export default createScan;