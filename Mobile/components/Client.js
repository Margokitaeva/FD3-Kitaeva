import React from 'react';

import "./Client.css";
import { bankEvents } from './events';

class Client extends React.PureComponent {

    state = {
        code: this.props.clientInfo.code,
        surname: this.props.clientInfo.surname,
        firstName: this.props.clientInfo.firstName,
        lastName: this.props.clientInfo.lastName,
        balance: this.props.clientInfo.balance,
        // status: this.props.clientInfo.balance >= 0,
        mode: 1, // 1 - view, 2 - edit
    }

    refSurname = React.createRef();
    refFirstName = React.createRef();
    refLastName = React.createRef();
    refBalance = React.createRef();

    componentDidMount = () => {
        bankEvents.addListener('EChangeNewClient', this.changeModeIfMe);
    }
    
    componentWillUnmount = () => {
        bankEvents.removeListener('EChangeNewClient', this.changeModeIfMe);
    }

    changeModeIfMe = (codeNewClient) => {
        console.log(this.state.code)
        console.log(codeNewClient);
        if (this.state.code === codeNewClient) {
            this.setState({mode: 2});
        }
    }

    editButtonPressed = eo => {
        this.setState({mode: 2});
        console.log("client " + this.state.firstName + "switched to mode 2: edit");
    }

    deleteButtonPressed = eo => {
        if (confirm(`Вы действительно хотите удалить клиента ${this.state.surname} ${this.state.firstName} ${this.state.lastName}?`)) {
            console.log("Client " + this.state.firstName + " will be deleted");
            bankEvents.emit("EDeleteClient", this.state.code);
        }
    }

    cancelButtonPressed = eo => {
        this.setState({mode: 1});
        console.log("client " +this.state.firstName + " switched to mode 1: view, - because user pressed cancel");
    }

    saveButtonPressed = eo => {
        console.log("Client" + this.state.firstName + " is going to be changed. Save the changes!");
        if (this.refSurname.current && this.refFirstName.current && this.refLastName.current && this.refBalance.current) {
            let newSurname = this.refSurname.current.value;
            let newFirstName = this.refFirstName.current.value;
            let newLastName = this.refLastName.current.value;
            let newBalance = this.refBalance.current.value;
            this.setState({ surname:    newSurname,
                            firstName:  newFirstName,
                            lastName:   newLastName,
                            balance:    newBalance,
                            mode:       1,
                        },
                    () => bankEvents.emit("ESaveClientChanges", {...this.props.clientInfo, 
                                                                    surname:    newSurname,
                                                                    firstName:  newFirstName,
                                                                    lastName:   newLastName,
                                                                    balance:    newBalance,
                                                                }));
            // alert("Изменения успешно сохранены");
        }
    }


    render() {
        console.log("render: Client " + this.state.firstName);
        if (this.state.mode === 1) {
            return (
                <tr>
                    <td>{this.state.surname}</td>
                    <td>{this.state.firstName}</td>
                    <td>{this.state.lastName}</td>
                    <td>{this.state.balance}</td>
                    <td style={{backgroundColor: this.state.balance >= 0 ? "green":"red"}}>{this.state.balance >=0 ? "active" : "blocked"}</td>
                    <td><input type="button" value="Редактировать" onClick={this.editButtonPressed}/></td>
                    <td><input type="button" value="Удалить" onClick={this.deleteButtonPressed}/></td>
                </tr>
            );
        } else {
            return (
                <tr>
                    <td><input className="TextInput" type="text" defaultValue={this.state.surname} ref={this.refSurname} /></td>
                    <td><input className="TextInput" type="text" defaultValue={this.state.firstName} ref={this.refFirstName} /></td>
                    <td><input className="TextInput" type="text" defaultValue={this.state.lastName} ref={this.refLastName} /></td>
                    <td><input className="BalanceInput" type="text" defaultValue={this.state.balance} ref={this.refBalance} /></td>
                    <td style={{backgroundColor: this.state.balance >= 0 ? "green":"red"}}>{this.state.balance >=0 ? "active" : "blocked"}</td>
                    <td>
                        <input type="button" value="Отмена" onClick={this.cancelButtonPressed} style={{marginRight: "10px"}}/>
                        <input type="button" value="Сохранить" onClick={this.saveButtonPressed}/>
                    </td>
                    <td><input type="button" value="Удалить" onClick={this.deleteButtonPressed}/></td>
                </tr>
            );
        }
        
    }
}

export default Client;