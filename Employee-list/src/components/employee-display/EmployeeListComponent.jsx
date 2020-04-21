import React, { Component } from 'react';



class EmployeesListComponent extends Component {


    constructor(props) {
        super(props)
        this.state = {
            todos: [
                { id: 1, name: 'Charlie', job: 'Janitor' },
                { id: 2, name: 'Mac', job: 'Bouncer' },
                { id: 3, name: 'Dee', job: 'Aspiring Actress' },
                { id: 4, name: 'Dennis', job: 'Bartender' }

            ]
        }
    }

    render() {
        return (
            <div>
                <h1>Employees List</h1>
                <div class="container">
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Job</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.id}</td>
                                            <td>{todo.name}</td>
                                            <td>{todo.job}</td>
                                        </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default EmployeesListComponent;