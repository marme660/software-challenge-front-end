import React from 'react';
import * as Boot from 'react-bootstrap';

export default function sortOptions(props) {
    return (
        <div>
            <div className="d-flex flex-column">
                <Boot.ButtonGroup toggle className="mt-3">
                    <Boot.ToggleButton onChange={() => props.sortBy('name')}
                                       id="name" type="radio" name="radio" defaultChecked
                                       value="return-radio">
                        Name
                    </Boot.ToggleButton>
                    <Boot.ToggleButton onChange={() => props.sortBy('scannedByUserId')}
                                       id="username" type="radio" name="radio" value="oneWay-radio">
                        Username
                    </Boot.ToggleButton>
                    <Boot.ToggleButton onChange={() => props.sortBy('elevationMax')}
                                       id="elevation" type="radio" name="radio" value="multi-radio">
                        Elevation
                    </Boot.ToggleButton>
                </Boot.ButtonGroup>
                <br/>
            </div>
        </div>
    )
}
