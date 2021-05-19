import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export default class Profile extends Component {
    render() {
        return (
            <div>
                <h1>Halaman Profile</h1>
                <Link to="/">
                    <p>Halaman Home</p>
                </Link>
            </div>
        )
    }
}
