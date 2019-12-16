import React, {useState} from "react";
import {Table, Input} from "semantic-ui-react";

const data = [{
    "username": "richard",
    "email": "richard@sample.com",
    "age": 20
},
    {
        "username": "michael",
        "email": "michael@sample.com",
        "age": 23
    },
    {
        "username": "diego",
        "email": "diego@sample.com",
        "age": 24
    },
    {
        "username": "rene",
        "email": "rene@sample.com",
        "age": 22
    },
    {
        "username": "agustin",
        "email": "agustin@sample.com",
        "age": 32
    }
];

const createBody = (data)=> {
    return data.map(d => {
        return (
            <Table.Row>
                <Table.Cell>
                    {d.username}
                </Table.Cell>
                <Table.Cell>{d.email}</Table.Cell>
                <Table.Cell>{d.age}</Table.Cell>
            </Table.Row>
        )
    });
};

const TableComponent = ()=> {
    const [query, setQuery] = useState("");
    const [main, setStore] = useState(data);

    const store = data.filter(d => d.username.includes(query) || d.age.toString().includes(query) || d.email.includes(query));
    const current = (store.length < main.length)?store: main;
    const onChange =(event)=> {
        setQuery(event.target.value);
    };

    const sortbyUserName = () => {
        store.sort((a, b)=> a.username.toLowerCase() < b.username.toLowerCase()? -1 : (a.username < b.username) ? 1 : 0 );
        setStore([...store])
    };
    const sortbyEmail = () => {
        store.sort((a, b)=> a.email.toLowerCase() < b.email.toLowerCase()? -1 : (a.email < b.email) ? 1 : 0 );
        setStore([...store]);
    };
    const sortbyAge = () => {
        store.sort((a, b)=> parseInt(a.age)< parseInt(b.age)? -1 : (parseInt(a.age) < parseInt(b.age)) ? 1 : 0 );

        setStore([...store]);
    };

    return (
        <>
            <Input focus placeholder='Search...' onChange={event => onChange(event)}/>
            <Table celled sortable>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell> <span onClick={sortbyUserName}>Username</span></Table.HeaderCell>
                        <Table.HeaderCell onClick={sortbyEmail}>Email</Table.HeaderCell>
                        <Table.HeaderCell onClick={sortbyAge}>Age</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {createBody(current)}
                </Table.Body>
            </Table>
        </>
    )
};

export default TableComponent;