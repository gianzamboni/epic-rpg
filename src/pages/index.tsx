import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Col, Container, Row } from 'react-bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import { ItemTypes, itemTypesAsArray } from '@/pages/types/ItemTypes'
import ItemComponent from '@/pages/components/Item'
import { useRef, useState } from 'react'
import { Item } from '@/pages/types/Item'
import { Items } from '@/pages/types/Items'

const initialInventory: Record<ItemTypes, Item> = itemTypesAsArray.reduce((final, item) => {
  return { ...final, [item]: new Items[item](0) };
}, {})

export default function Home() {
  const [inventory, setInventory] =
    useState<Record<ItemTypes, Item>>(initialInventory);

  const updateInventory = (item: Item) => {
    console.log(item.name, inventory[item.name].toHyperLogs().amount);
    setInventory({ ...inventory, [item.name]: item });
  }

  const hyperLogsQ = (Object.keys(inventory) as ItemTypes[]).reduce((total, itemName) => {
    return total + inventory[itemName].toHyperLogs().amount;
  }, 0);

  return (
    <>
      <Head>
        <title>Epic RPG Tools</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className={styles.title}>Epic RPG Tools</h1>
        <Container>
          <Row>
            <Col>
              <Row>
                <Col className="header">Item</Col>
                <Col className="header">Cantidad</Col>
              </Row>
              {itemTypesAsArray.map((name, index) => (
                <ItemComponent
                  key={`item-${index}`}
                  name={name}
                  onChange={updateInventory}
                />
              ))}
            </Col>
            <Col>
              <Container>
                <Row>
                  <span>Item:</span>
                  <p>El nombre del item</p>
                </Row>
                <Row>
                  <span>Cantdad:</span>
                  <p>La cantidad de ese item que tienen en el inventario</p>
                </Row>
                <Row>
                  <span>Guardar:</span>
                  <p>
                    La cantidad de ese item que no quieren convertir. Por ej, si
                    quieren convertir rubies en logs para hacer hyperlogs paro
                    necesitan quedarse con 4 rubies para alguna recete.{" "}
                  </p>
                </Row>
                <Row>
                  <h2>Conversiones</h2>
                  <Container>
                    <Row>
                      <Col>
                        <span>HyperLogs:</span> {hyperLogsQ}
                      </Col>
                    </Row>
                  </Container>
                </Row>
              </Container>
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}
