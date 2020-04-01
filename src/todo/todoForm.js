import React from "react";

import { Row, Col, Input, Button, Space } from "antd";
import { SearchOutlined } from "@ant-design/icons";

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
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col span={12}>
          <Input
            placeholder="Adicione uma tarefa"
            onChange={props.handleChange}
            onKeyUp={e => keyHandler(e)}
            value={props.description}
          />
        </Col>
        <Col span={6}>
          <Space>
            <Button type="primary" onClick={props.handleAdd}>
              Adicionar
            </Button>
            <Button
              type="primary"
              icon={<SearchOutlined />}
              onClick={props.handleSearch}
            >
              Procurar
            </Button>
            <Button type="primary" onClick={props.handleClear}>
              Limpar
            </Button>
          </Space>
        </Col>
      </Row>
    </div>
  );
}
