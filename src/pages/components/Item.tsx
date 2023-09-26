import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { Items } from '@/pages/types/Items/index';
import { Item as ItemModel } from "@/pages/types/Item";
import { ItemTypes } from "@/pages/types/ItemTypes";

type ItemProps = {
  item: ItemModel;
  onChange: (item: ItemModel) => void;
}

export default function Item(props: ItemProps) {
  const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    props.onChange(new Items[props.item.name](value));
  }
  
  return (
    <Row style={{
      marginBottom: '10px'
    }}>
      <Col>{props.item.name}</Col>
      <Col>
        <Form.Control type="number" placeholder="0" min={0} value={props.item.amount} onChange={changeQuantity} />
      </Col>
    </Row>
  );
}