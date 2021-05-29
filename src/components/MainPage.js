import React, { Component } from 'react'
import Header from "./Header";
import Stats from "./Stats";
import Books from "./Books";
import Authors from "./Authors";

class MainPage extends Component {
    render() {
        return (
            <div>
                <Header/>
                <Stats/>
                <Books/>
                <Authors/>
            </div>
        )
    }
}

export default MainPage;