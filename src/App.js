import React, { Component } from 'react';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "CRUD table",
            act: 0,
            index: '',
            datas: [{id:1, name: 'Name', username:'Username',phone:'2222',city:'Ny'}, {}],
            repos: null

        }
    }
    fAdd = (e) => {

        e.preventDefault();
        console.log('try');

        let datas = this.state.datas;
        let name = this.refs.name.value;
        let username = this.refs.username.value;
        let phone = this.refs.phone.value;
        let city = this.refs.city.value;

        if (this.state.act === 0) {
            let data = JSON.stringify(datas.push( {
                name, username, phone, city
            }))
            //datas.push(data);
        }
        else {
            let index = this.state.index;
            datas[index].name = name;
            datas[index].username = username;
            datas[index].phone = phone;
            datas[index].city = city;


        }



        this.setState({
            datas: datas,
            act: 0
        });
        this.refs.Form.reset();
        this.refs.name.focus();

    }
    fRemove = (i) => {
        let datas = this.state.datas;

        datas.splice(i, 1);
        this.setState({
            datas: datas
        });
        this.refs.Form.reset();
    }
    fEdit = (i) => {
        let data = this.state.datas[i];
        this.refs.name.value = data.name;
        this.refs.username.value = data.username;
        this.refs.phone.value = data.phone;
        this.refs.city.value = data.city;

        this.setState({
            act: 1,
            index: i
        });

        this.refs.name.focus();
    }




    render() {

        let datas = this.state.datas;
        return (
            <div>
                <h1>{this.state.title}</h1>
                <form ref="Form">
                    <input type="text" ref="name" placeholder="Your name" className="formField" />
                    <input type="text" ref="username" placeholder="Your username" className="formfield" />
                    <input type="text" ref="phone" placeholder="Your phone" className="formfield" />
                    <input type="text" ref="city" placeholder="Your city " className="formField" />
                    <button onClick={(e) => this.fAdd(e)} className="Button">Add user</button>
                </form>
                <pre>
                    {datas.map((data, i) =>
                        <ul key={i} className="myList">
                            <li> {i + 1}. {data.name},{data.username}, {data.phone},{data.city}</li>
                            <button onClick={() => this.fRemove(i)} className="Button">Delete</button>
                           <button onClick={() => this.fEdit(i)} className="Button">Edit</button>
                        </ul>
                    )}
                </pre>
            </div>
        );
    }
}

export default App
