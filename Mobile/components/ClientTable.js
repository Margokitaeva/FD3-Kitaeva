import React from 'react';

import './ClientTable.css';
import Client from './Client';
import { bankEvents } from './events';

class ClientTable extends React.PureComponent {

    state = {
        clients: [...this.props.clients],
        clientsVisible: [...this.props.clients].map(c => String(c.code)),
    }

    componentDidMount = () => {
        bankEvents.addListener('EAllClientsShow', this.allClientsShow);
        bankEvents.addListener('EActiveClientsShow', this.activeClientsShow);
        bankEvents.addListener('EBlockedClientsShow', this.blockedClientsShow);
        bankEvents.addListener('EDeleteClient', this.deleteClient);
        bankEvents.addListener('ESaveClientChanges', this.saveClientChanges);
    }
    
    componentWillUnmount = () => {
        bankEvents.removeListener('EAllClientsShow', this.allClientsShow);
        bankEvents.removeListener('EActiveClientsShow', this.activeClientsShow);
        bankEvents.removeListener('EBlockedClientsShow', this.blockedClientsShow);
        bankEvents.removeListener('EDeleteClient', this.deleteClient);
        bankEvents.removeListener('ESaveClientChanges', this.saveClientChanges);
    }

    allClientsShow = () => {
        this.setState({clientsVisible: [...this.state.clients].map(c => c.code)});
    }

    activeClientsShow = () => {
        this.setState({clientsVisible: this.state.clients.filter(c => c.balance >= 0).map(c => c.code)});
    }

    blockedClientsShow = () => {
        this.setState({clientsVisible: this.state.clients.filter(c => c.balance < 0).map(c => c.code)});
    }

    deleteClient = deleteCode => {
        console.log("deleting client with code " + deleteCode);
        this.setState(prev => ({clients: prev.clients.filter(c => String(c.code) !== String(deleteCode)),
                                clientsVisible: prev.clientsVisible.filter(code => String(code) !== String(deleteCode))
        }))
    }

    saveClientChanges = clientObj => {
        this.setState(prev => ({
            clients: prev.clients.map(client => client.code === String(clientObj.code) ? {...clientObj} : client)
        }))
    }

    addNewClientButtonClicked = () => {
        let newCode = String(this.state.clients.length + 1);
        this.setState(prev => ({clients: [...prev.clients, 
                                        { 
                                            code: `${newCode}`, 
                                            surname: "Фамилия", 
                                            firstName: "Имя", 
                                            lastName: "Отчество", 
                                            balance: "0"
                                        }],
                                clientsVisible: [...prev.clientsVisible, newCode]}), 
                                () => bankEvents.emit('EChangeNewClient', newCode));
    }


    render() {
        console.log("render: client table");

        return (
            <div>
                <table border={1} style={{borderCollapse: "collapse", width: "90%", textAlign: "left"}}> 
                    <tbody>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th style={{width: "80px"}}>Баланс</th>
                            <th style={{width: "80px"}}>Статус</th>
                            <th style={{width: "155px"}}>Редактировать</th>
                            <th style={{width: "65px"}}>Удалить</th>
                        </tr>
                        {this.state.clients.map(client => (
                            this.state.clientsVisible.includes(String(client.code)) && (
                                <Client key={client.code} clientInfo={client} />
                            )
                        ))}
                    </tbody>
                </table>
                <hr />
                <input type="button" value="Добавить клиента" onClick={this.addNewClientButtonClicked} />
            </div>
            
        );
    }
}

export default ClientTable;