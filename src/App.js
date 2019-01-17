import React, { Component } from 'react';
import './App.scss';
import './styles/styles.scss';
import data from './assets/data.json';
import Description from './components/Description/Description.js';
import Header from './components/Header/Header.js';
import List from './components/List/List.js';
import { AppProvider, AppConsumer } from './AppContext.js';

class App extends Component {

  render() {
    return (
      <AppProvider value={data} >
        <AppConsumer>
         {context =>
           <div className="app">
             <Header title={context.title} payments_total_count={context.payments_total_count}/>
             <div className="container main-container">
               <div className="row">
                 <div className="col-lg-8">
                   <Description description={context.description}/>
                   <List payments={context.payments}/>
                 </div>
               </div>
             </div>
           </div>
         }
        </AppConsumer>
      </AppProvider>
    );
  }
}

export default App;
