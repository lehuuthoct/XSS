import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Content from './layout/Content';
import Footer from './layout/Footer';
import Header from './layout/Header';
import Timer from './Pomodoro/Timer';

class App extends Component {

    constructor(props) {
        super(props);
        this.testES6Features = this.testES6Features.bind(this);
    }

    testES6Features() {
        console.log('testES6Features');
        // async await
        this.testAsyncAwait();
        // Promises 
        // classes [Component]
        this.testObjectAssign();
        this.testMap();
        this.testTemplateLiterals();
        this.testArrowFunctions();
        this.testDestructing();
        this.testSpreadOperators();
        this.testVariables();
        this.testConstants();
        this.testObjects();
    }

    testAsyncAwait() {
        const getReq = async () => {
            const url = 'https://api.coinmarketcap.com/v1/ticker/';
            const res = await axios.get(url);
            return { coins: res.data };
        }
        getReq().then(data => {
            console.log('data', data);
        });
    }

    testObjectAssign() {
        const state = {
            person: { name: 'William' }
        };
        /*{
            auth: {isLoggined: true}
            person: {name: "William", address: "900 dandenong road"}
          } */
        const employee = Object.assign({}, state, {
            person: { ...state.person, address: '900 dandenong road' },
            auth: { isLoggined: true }
        });
        console.log(employee);
    }

    testMap() {
        const tasks = [
            { name: 'Learn React' },
            { name: 'Learn Redux' }
        ];
        let s = '';
        tasks.map((task, index) => {
            s += `<li key={${index}}> ${task.name} </li>`
        });
        // <li key={0}> Learn React </li>
        // <li key={1}> Learn Redux </li>
        console.log(s);
    }

    testTemplateLiterals() {
        const props = { theme: 'dark' };
        const { theme } = props;
        // base darkMode
        const className = `base ${theme === 'dark' ? 'darkMode' : 'lightMode'}`;
        console.log('className', className);
    }

    testArrowFunctions() {
        const add = (num1, num2) => num1 + num2;
        console.log(add(1, 2)); // 3
    }

    testDestructing() {
        const props = { name: 'William', salary: 90 };
        const { name, salary } = props;
        console.log(name, salary); //William 90
        // ( {name, salary} ) => ...
    }

    testSpreadOperators() {
        // array spread operators
        const items = [1]; // [1]        
        const updatedItems = [...items, 2]; // [1, 2]
        const updateAddObjList = [...updatedItems, { name: 'William' }];
        console.log(updateAddObjList); //[1, 2, {name: "William"}]

        // object spread operators
        const person = {};
        person.name = 'John';
        const updatedEmployee = { ...person, address: '11 Collins Street' }; // {name: "John", address: "11 Collins Street"}
        console.log('updatedEmployee', updatedEmployee);
        // <Employee {...updatedEmployee} />

        // functions use case
        const f = (a, b, ...c) => {
            const d = [a, b, c];
            return d;
        }
        console.log('func', f(1, 2, 3, 4)); //  [1, 2, Array(2)] 
    };

    testObjects() {
        const employee = {
            name: 'John'
        }
        // {name: "John", address: "900 Dandenong Road"}
        employee.address = '900 Dandenong Road';

        // removing an attribute
        delete employee.address;  // {name: "John"}      

        console.log(employee);
    }

    testVariables() {
        // var vs let - scope
        for (let i = 0; i < 1; i++)
            console.log(i);
        console.log(i); // undefined

        for (var i = 0; i < 1; i++)
            console.log(i);
        console.log(i); // i = 1    
    }

    testConstants() {
        // array elements can be modified
        const arr = ['a', 'b', 'c'];
        arr.push('d'); // ["a", "b", "c", "d"]
        arr.shift(); // remove first element ["b", "c", "d"]
        arr[0] = 'e'; // ["e", "c", "d"] 
        console.log(arr);

        // constant value cant be changed
        const c = 1;
        // c = 2; // Syntax error: "c" is read-only
    }

    render() {
        // this.testES6Features();  

        const headerInfo = {
            title: 'Testing React Redux ',
            url: 'http://localhost:3000'
        };

        return (
            <div className="App">

                <ErrorBoundary>
                    <Header { ...headerInfo } />

                    <Content>
                        {/* <Home /> */ }
                        {/* <Todo /> */ }
                        <Timer />

                    </Content>

                    <Footer />

                </ErrorBoundary>


            </div>
        );
    }
}

export default App;
