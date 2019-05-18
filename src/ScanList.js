import React from 'react';
import './ScanList.css'
import SortOptions from "./scanComponent/sortOptions";
import CreateScan from "./scanComponent/createScan";
import * as Boot from "react-bootstrap";
import ContentEditable from "react-contenteditable";

class ScanList extends React.Component {

    constructor(props) {
        super(props);

        this.state ={
            scanList: props.scans,
            userList: props.users,
            direction: props.direction
        }

        this.addNewScan = this.addNewScan.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.sortBy = this.sortBy.bind(this);

    }

    addNewScan = (scans) => {
        let stateCopy = Object.assign({}, this.state);
        stateCopy.scanList.push(scans);
        this.setState({
            stateCopy
        });
    };

    handleChange = (id, e) => {
        const index = this.state.scanList.findIndex((scan) => {
            return scan.id === id
        });

        const scan = Object.assign({}, this.state.scanList[index]);
        scan.name = e.currentTarget.innerText;

        const scanList = Object.assign([], this.state.scanList);
        scanList[index] = scan;

        this.setState({scanList: scanList});
    };

    sortBy(key) {
        let scans = this.state.scanList;
        let users = this.state.userList;
        let direction = this.state.direction;

        scans = this.enrichWithUserName(scans, users);

        this.setState({
            scanList: scans.sort((a, b) => {
                if (direction[key] === 'asc') {
                    if (a[key] > b[key]) return 1;
                    if (b[key] > a[key]) return -1;
                } else {
                    if (a[key] > b[key]) return -1;
                    if (b[key] > a[key]) return 1;
                }
                return 0;
            }),
            direction: {
                [key]: direction[key] === 'asc'
                    ? 'desc'
                    : 'asc'
            }

        });
    }

    enrichWithUserName(scans, users) {
        return scans.map(scan => {
            scan.userName = users.find(user => user.id === scan.scannedByUserId);
            return scan;
        });
    }

    render() {
        return (
            <div>
                <div className="Header">
                    Scans:
                </div>
                <Boot.Container>
                    <CreateScan addNewScan={this.addNewScan}/>
                    <SortOptions scanProps={this.props} sortBy={this.sortBy}/>
                </Boot.Container>

                <br/>
                <div className="ScanList">
                    {this.state.scanList.map((scan) => {
                        const user = this.props.users.find(u => u.id === scan.scannedByUserId);
                        return (
                            <div>
                                <ContentEditable
                                    html={scan.name}
                                    disabled={false}
                                    key={scan.id}
                                    onBlur={this.handleChange.bind(this, scan.id)}
                                />
                                <div className="UserName"
                                     key={user.id}>
                                        by {user.name}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ScanList;
