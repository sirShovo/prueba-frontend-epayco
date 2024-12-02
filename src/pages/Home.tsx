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
    <main className="container m-auto bg-stone-100">
      <section className="p-4 mt-10 max-w-lg m-auto">
        <h1 className="p-4 bg-cyan-600 text-white text-3xl text-center rounded-t-md">Add New Item</h1>
        <AddItemForm onSubmit={handleAddItem} />
      </section>
      <h2 className="text-center text-2xl font-bold my-8">Items List</h2>
      {items && <ItemList items={items} />}
    </main>
  );
};