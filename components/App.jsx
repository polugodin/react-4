import React, {Component} from 'react';

import Form from './Form';

import { getUsers } from '../sources/users';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.updateUserList = this.updateUserList.bind(this);
    }

    updateUserList() {
        getUsers().then(res => {
            this.setState({
                users: res.data
            });
        });
    }

    componentDidMount() {
        this.updateUserList();
    }

    render() {
        const { users } = this.state;
        
        return (
            <div>
                <Form updateUserList={this.updateUserList} />

                <h2>User List</h2>
                {
                users.length === 0 ? (<div>Нет данных</div>) :
                (<ul>
                    {users.map((item, index) =>
                        <li key={index}>
                            {Object.keys(item).map(key => 
                                `${key}: ${item[key]} `).join('')}
                        </li> )}
                </ul>)
                }
            </div>
        );
    }
}

export default App;
