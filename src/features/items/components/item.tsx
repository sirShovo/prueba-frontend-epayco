import React from "react";

interface ItemProps {
  item: { id: number; title: string; body: string };
}

export const Item: React.FC<ItemProps> = ({ item }) => (
  <div>
    <h3>{item.title}</h3>
    <p>{item.body}</p>
  </div>
);
