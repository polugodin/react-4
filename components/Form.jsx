import React, { Component } from 'react';

import { createUser } from '../sources/users';


class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangeTel = this.onChangeTel.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();

        const { state } = this;
        const user = {};

        for (const prop in state){
            if (state[prop]) user[prop] = state[prop];}

        createUser(user).then(res => {
            console.log('res: ', res.status);
            this.props.updateUserList();
        });
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }

    onChangeTel(e) {
        this.setState({
            tel: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <label>
                    Имя <small>(required)</small>
                    <input onChange={this.onChangeFirstName} type="text" required />
                </label>
                <label>
                    Фамилия
                    <input onChange={this.onChangeLastName} type="text" />
                </label>
                <label>
                    Телефон
                    <input onChange={this.onChangeTel} type="tel" />
                </label>
                <label>
                    Email
                    <input onChange={this.onChangeEmail} type="email" />
                </label>
                <label>
                    Возраст
                    <input onChange={this.onChangeAge} type="number" />
                </label>
                <button>Сохранить</button>
            </form>
        )
    }
}

export default Form;
