import React from 'react';

import axios from 'axios';

export default class PersonList extends React.Component {
    state = {
        data: [],

    }

    componentDidMount() {

            res => {
                const data = res.data;
                this.setState({ data });
            }
    }

    render() {
        return (
            <ul>
                {this.state.data.map(data => <li> {data.name}</li>)}
            </ul>
        )
    }
}
