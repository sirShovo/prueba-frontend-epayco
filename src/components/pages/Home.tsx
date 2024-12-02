import React from "react";
import { ItemList } from "../organisms/ItemList/ItemList";
import { ItemForm } from "../organisms/ItemForm/ItemForm";
import { Item } from "../../domain/models/Item";
import { useItems } from "../../hooks/useItems";
import { Loading } from "../atoms/Loading/Loading";
import { MessageError } from "../atoms/Error/Error";

export const Home: React.FC = () => {
  const handleAddItem = (newItem: Item) => {
    console.log('estoy aqui');
    items?.unshift(newItem);
  };

  const { data: items, error, isLoading } = useItems();

  if (isLoading) return <Loading />;
  if (error instanceof Error)
    return <MessageError message={error.message} name={error.name} />;

  return (
    <main className="container m-auto px-4">
      <ItemForm onAddItem={handleAddItem} />

      {items && <ItemList items={items} />}
    </main>
  );
};
