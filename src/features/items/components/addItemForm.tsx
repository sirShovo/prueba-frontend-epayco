import React from "react";
import { useForm } from "react-hook-form";

interface AddItemFormProps {
  onSubmit: (data: any) => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <input {...register("title")} placeholder="Title" required />
      <textarea {...register("body")} placeholder="Body" required />
      <button type="submit">Add Item</button>
    </form>
  );
};