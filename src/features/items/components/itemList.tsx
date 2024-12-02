import React from "react";
import { Item } from "./Item";

interface ItemListProps {
  items: { id: number; title: string; body: string }[];
}

export const ItemList: React.FC<ItemListProps> = ({ items }) => (
  <section className="my-8 sm:my-10 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4 p-6">
    {items.map((item) => (
      <Item key={item.id} item={item} />
    ))}
  </section>
);
