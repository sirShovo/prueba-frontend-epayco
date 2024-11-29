import React from "react";
import { useForm } from "react-hook-form";
import { InputField } from '../../../components/molecules/InputField/InputField';

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
      <InputField
        label="Title"
        id="title"
        type="text"
        placeholder="Enter title"
        {...register("title")}
      />
      <InputField
        label="Body"
        id="body"
        type="text"
        placeholder="Enter body"
        {...register("body")}
      />
      <button type="submit">Add Item</button>
    </form>
  );
};
