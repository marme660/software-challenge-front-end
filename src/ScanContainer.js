import React from 'react';
import ScanList from './ScanList';
import {createScanData, createUserData} from './data';
import UniqueId from 'react-html-id';

class ScanContainer extends React.Component {

    constructor(props) {
        super(props);
        UniqueId.enableUniqueIds(this);

        this.state = {
            scans: createScanData().map(scan => {
                scan.id = this.nextUniqueId();
                return scan
            }),
            users: createUserData(),
            direction: {
                name: 'asc'
            }
        }
    }

    render() {
        return (
            <div>
                <ScanList
                    scans={this.state.scans}
                    users={this.state.users}
                    direction={this.state.direction}
                />
            </div>
        );
    }
}

export default ScanContainer;
