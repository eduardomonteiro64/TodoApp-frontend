
import React from "react";

import { Row, Col } from 'antd';
import {
    AppstoreAddOutlined,
    SearchOutlined,
    CloseOutlined,
} from '@ant-design/icons';

export default function todoForm(props) {
    const keyHandler = e => {
        if (e.key === "Enter") {
            e.shiftKey ? props.handleSearch() : props.handleAdd();
        } else if (e.key === "Escape") {
            props.handleClear();
        }
    };

    return (
        <div>
            <Row>
                <Col >
                    <input
                        id="description"
                        className="form-control"
                        placeholder="Adicione uma tarefa"
                        onChange={props.handleChange}
                        onKeyUp={(e) => keyHandler(e)}
                        value={props.description}
                    ></input>
                </Col>
            </Row>

            <Row>
                <Col>
                    <AppstoreAddOutlined onClick={props.handleAdd} />
                    <SearchOutlined onClick={props.handleSearch} />
                    <CloseOutlined onClick={props.handleClear} />
                </Col>
            </Row>
        </div>
    );
};