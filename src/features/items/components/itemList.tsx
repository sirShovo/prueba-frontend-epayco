import React from "react";
import { Item } from "./item";

interface ItemListProps {
  items: { id: number; title: string; body: string }[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => (
  <div>
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </div>
);
