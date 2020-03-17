import React from 'react'
import { Menu } from 'antd';

export default function MenuSelect() {

    const [state, setState] = React.useState({
        current: '',
    });

    const handleClick = e => {
        setState({ ...state, current: e.key });
    };

    return (
        <div>
            <Menu onClick={() => handleClick} selectedKeys={[state.current]} mode="horizontal" theme="dark">
                <Menu.Item key="todo">
                    <a href="/todo">
                        Inserir Todo
                    </a>
                </Menu.Item>
                <Menu.Item key="about">
                    <a href="/about">
                        Sobre Nós
                    </a>
                </Menu.Item>
            </Menu>
        </div>
    )
}