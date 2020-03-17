import React from 'react'

import {
    FileDoneOutlined,
    UndoOutlined,
    DeleteOutlined,
} from '@ant-design/icons';

export default function todoList(props) {
    const renderRows = () => {
        const list = props.list || [];
        return list.map(todo => (
            <tr key={todo.id}>
                <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
                <td>
                    <FileDoneOutlined hide={todo.done}
                        onClick={() => props.handleMarkAsDone(todo)} />
                    <UndoOutlined hide={!todo.done}
                        onClick={() => props.handleMarkAsPending(todo)} />
                    <DeleteOutlined hide={!todo.done}
                        onClick={() => props.handleRemove(todo)} />
                </td>
            </tr >
        ));
    };

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className="tableActions">Ações</th>
                </tr>
            </thead>
            <tbody>{renderRows()}</tbody>
        </table>
    );
}
