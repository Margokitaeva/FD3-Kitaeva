import React from 'react';

import './Bank.css';
import ClientTable from './ClientTable';
import { bankEvents } from './events';

class Bank extends React.PureComponent {

    state = {
        clients: this.props.clients.slice(),
    }

    allButtonClicked = eo => {
        console.log("------- all clients button pressed");
        bankEvents.emit('EAllClientsShow');
    }

    activeButtonClicked = eo => {
        console.log("------- active clients button pressed");
        bankEvents.emit('EActiveClientsShow');
    }

    blockedButtonClicked = eo => {
        console.log("------- blocked clients button pressed");
        bankEvents.emit('EBlockedClientsShow');
    }

    render() {
        console.log("render: bank component");
        return (
            <div>
                <input type="button" value="Все" onClick={this.allButtonClicked} />
                <input type="button" value="Активные" onClick={this.activeButtonClicked} />
                <input type="button" value="Заблокированные" onClick={this.blockedButtonClicked} />
                <hr />
                <ClientTable clients={this.props.clients}/>
            </div>
            
            
        );
    }
}

export default Bank;

