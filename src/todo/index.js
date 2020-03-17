import React from "react";
import axios from "axios";

import { PageHeader } from "antd";
import TodoForm from "./todoForm";
import TodoList from "./todoList";

const URL = "http://localhost:3003/api/todos";

export default function Todo() {

    const [state, setState] = React.useState({
        description: '',
        list: []
    })
    const refresh = (description) => {
        const search = description ? `&description__regex=/${description}/` : "";
        axios
            .get(`${URL}?sort=createdAt${search}`)
            .then(resp =>
                setState({ ...state, description, list: resp.data })
            );
    }

    const handleChange = (e) => {
        setState({ ...state, description: e.target.value });
    }

    const handleSearch = () => {
        refresh(state.description);
    }

    const handleAdd = () => {
        const description = state.description;
        axios.post(URL, { description }).then(resp => refresh());
    }

    const handleMarkAsDone = (todo) => {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => refresh(state.description));
    }

    const handleMarkAsPending = (todo) => {
        axios
            .put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => refresh(state.description));
    }

    const handleRemove = (todo) => {
        axios
            .delete(`${URL}/${todo._id}`)
            .then(resp => refresh(state.description));
    }

    const handleClear = () => {
        refresh();
    }

    return (
        <div>
            <PageHeader title="Tarefas" subTitle="Cadastro" />
            <TodoForm
                description={state.description}
                handleChange={handleChange}
                handleAdd={handleAdd}
                handleSearch={handleSearch}
                handleClear={handleClear}
            />
            <TodoList
                list={state.list}
                handleRemove={handleRemove}
                handleMarkAsDone={handleMarkAsDone}
                handleMarkAsPending={handleMarkAsPending}
            />
        </div>
    );
}
