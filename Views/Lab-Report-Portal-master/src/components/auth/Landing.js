import React, { Component } from "react";
import { Link } from "react-router-dom";

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {},
            login: true,
        };

    }
    onChange = e => {
        this.setState({ [e.target.id]: e.target.value, login: true });
    };
    onSubmit = e => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        console.log(userData);



    };

    render() {
        const { errors } = this.state;

        return (
            <div>
                <div className="row" style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
                    <div className="col s12 center-align">
                        <h4><b>Lab Report Portal</b></h4>
                        <p className="flow-text grey-text text-darken-1">Access all your lab reports from one place.</p>
                        <br />
                        <div className="col s3">
                        </div>

                    </div>
                </div>
                <div className="container" style={{ backgroundColor: 'white', borderRadius: 10, width: '40vw', }}>
                    <div className="row s7" >
                        <div className="col s10" >
                            <form noValidate onSubmit={this.onSubmit}>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.email}
                                        error={errors.email}
                                        id="email"
                                        type="email"
                                    />
                                    <label htmlFor="email">Email</label>
                                </div>
                                <div className="input-field col s12">
                                    <input
                                        onChange={this.onChange}
                                        value={this.state.password}
                                        error={errors.password}
                                        id="password"
                                        type="password"
                                    />
                                    <label htmlFor="password">Password</label>
                                </div>
                                <div className="col " style={{ paddingBottom: "5vh" }}>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='col s12 center-align'>
                    <div><Link to="/home" >
                        <button
                            style={{
                                alignSelf: 'center',
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Sign In
                                </button>
                    </Link>
                    </div>
                    <div><Link to="/admin" >
                        <button
                            style={{
                                alignSelf: 'center',
                                width: "150px",
                                borderRadius: "3px",
                                letterSpacing: "1.5px",
                                marginTop: "1rem"
                            }}
                            type="submit"
                            className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                            Admin Sign In
                                </button>
                    </Link>
                    </div>

                </div>
            </div>
        );
    }
}
export default Login;