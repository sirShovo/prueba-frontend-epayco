import React from "react";
import { useItems } from "../features/items/hooks/useItems";
import { useAddItem } from "../features/items/hooks/useAddItem";
import { ItemList } from "../features/items/components/ItemList";
import { AddItemForm } from "../features/items/components/addItemForm";


export const Home: React.FC = () => {
  const { data: items, error, isLoading } = useItems();
  const mutation = useAddItem();

  const handleAddItem = (data: any) => {
    mutation.mutate(data);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error instanceof Error) return <div>Error: {error.message}</div>;

  return (
    <main className="container m-auto">
      <h1>Add New Item</h1>
      <AddItemForm onSubmit={handleAddItem} />
      <h2 className="text-center text-2xl font-bold my-8">Items List</h2>
      {items && <ItemList items={items} />}
    </main>
  );
};