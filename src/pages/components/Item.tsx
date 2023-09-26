import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import { Items } from '@/pages/types/Items/index';
import { Item as ItemModel } from "@/pages/types/Item";
import { ItemTypes } from "@/pages/types/ItemTypes";

type ItemProps = {
  name: ItemTypes;
  onChange: (item: ItemModel) => void;
}

export default function Item(props: ItemProps) {
  const [quantity, setQuantity] = useState(0);
  const [keep, setKeep] = useState(0);
  
  const changeQuantity = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(event.target.value) || 0;
    setQuantity(value);
    props.onChange(new Items[props.name](value));
  }
  
  return (
    <Row style={{
      marginBottom: '10px'
    }}>
      <Col>{props.name}</Col>
      <Col>
        <Form.Control type="number" placeholder="0" min={0} value={quantity} onChange={changeQuantity} />
      </Col>
    </Row>
  );
}