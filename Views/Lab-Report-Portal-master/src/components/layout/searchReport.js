import React, { Component } from "react";
import { Link } from "react-router-dom";


class SearchR extends React.Component {
    state = {
        query: "",
        data: [],
        filteredData: []
    };

    handleInputChange = event => {
        const query = event.target.value;

        this.setState(prevState => {
            const filteredData = prevState.data.filter(element => {
                return element.name.toLowerCase().includes(query.toLowerCase());
            });

            return {
                query,
                filteredData
            };
        });
    };

    getData = () => {
        fetch(`http://localhost:4000/restaurants`)
            .then(response => response.json())
            .then(data => {
                const { query } = this.state;
                const filteredData = data.filter(element => {
                    return element.name.toLowerCase().includes(query.toLowerCase());
                });

                this.setState({
                    data,
                    filteredData
                });
            });
    };

    componentWillMount() {
        this.getData();
    }

    render() {
        return (
            <div
                style={{
                    width: '100vw',
                    height: '100vh',
                    backgroundImage: "url('https://c7.uihere.com/files/489/607/701/medical-background-vector.jpg')",
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>

                <div style={{
                    width: '100vw',
                    height: '30vh',
                    position: 'relative',
                    backgroundImage: 'url(https://mares-med.com/profiles/recruiter/themes/cloudy/images/search-container-img.jpg)',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}>
                </div>
                <div className="searchForm">
                    <form>
                        <input
                            placeholder="Search for..."
                            value={this.state.query}
                            onChange={this.handleInputChange}
                        />
                    </form>
                    <div>{this.state.filteredData.map(i => <p>{i.name}</p>)}</div>
                </div>
            </div>

        );
    }
}
export default SearchR;