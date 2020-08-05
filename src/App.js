import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from './pruebas/helloWorld.js';
import HelloArroy from './pruebas/helloWorldArroyFunction.js';
import HelloComponent from './pruebas/helloWorldClassComponent.js';
import AppTwoTexts from './pruebas/helloWorldTwoTexts';
import HelloJSX from './pruebasJSX/HelloJSX.jsx';
import MyComponent from './pruebasJSX/HelloStyleJSX.jsx';
import HelloProps from './propsAndState/props1.jsx';
import HelloChangeState from './propsAndState/propsChangeState.jsx';
import HelloChangeStateMultipleValues from './propsAndState/propsChangeStateMultipleValues.jsx';
import MyTitle from './propsAndState/myTitle.jsx';
import MyTitleWithInnerComponent from './propsAndState/myTitleWithInnerComponent.jsx';
import HelloLifeCicle from './ComponentLifeCycleMethods/HelloLifeCicle.jsx'
import HeaderText from './statelessComponents/statelessComponents.jsx';
import HeaderTextMemo from './statelessComponents/statelessComponentsMemo.jsx';
import CounterReactHooks from './reactHooks/counterReactHooks.jsx';
import CounterUseEffectsReactHooks from './reactHooks/counterUseEffectsReactHooks.jsx';
import MyList from './HandlingLists/handlingList.jsx';
import MyTable from './HandlingLists/handlingTable.jsx';
import HandlingEvents from './handlingEvents/handlingEvents.jsx';
import HandlingEventsPreventDefault from './handlingEvents/handlingEventsPreventDefault.jsx';
import HandlingForms from './handlingForms/handlingForms.jsx';
import HandlingComplexForm from './handlingForms/handlingComplexForm.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Hello></Hello>
        <HelloArroy></HelloArroy>
        <HelloComponent></HelloComponent>
        <AppTwoTexts></AppTwoTexts>
        <HelloJSX count={2+2}></HelloJSX>
        <MyComponent></MyComponent>
        <HelloProps user="John"/>
        <HelloChangeState user="Juan Manuel"/>
        <HelloChangeStateMultipleValues user="Juan Manuel" firstName="López" age="26" />
        <MyTitle text="El principio de mi vida" />
        <MyTitleWithInnerComponent otherTitle="Otro titulo" />
        <HelloLifeCicle user="Juan Manuel" />
        <HeaderText text="Hola, esto es un stateless component"/>
        <HeaderTextMemo text="Hola, esto es stateless con memo"/>
        <CounterReactHooks></CounterReactHooks>
        <CounterUseEffectsReactHooks></CounterUseEffectsReactHooks>
        <MyList />
        <MyTable />
        <HandlingEvents />
        <HandlingEventsPreventDefault />
        <HandlingForms />
        <HandlingComplexForm />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
