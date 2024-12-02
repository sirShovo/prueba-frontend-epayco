import React, { useState } from "react";
import { FormField } from "../../../components/molecules/FormField/FormField";
import { ButtonWrapper } from "../../../components/molecules/ButtonWrapper/ButtonWrapper";

interface AddItemFormProps {
  onSubmit: (data: any) => void;
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    title: "",
    body: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // lógica de envío
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 shadow">
      <FormField
        label={{ text: "Title", htmlFor: "title" }}
        input={{
          type: "text",
          value: formData.title,
          onChange: handleChange,
          placeholder: "Enter the title",
          name: "title",
        }}
        // errorMessage="Title is required"
      />
      <FormField
        label={{ text: "Body", htmlFor: "body" }}
        input={{
          type: "text",
          value: formData.body,
          onChange: handleChange,
          placeholder: "Enter the body",
          name: "body",        
        }}
        // errorMessage="Body is required"
      />
      <ButtonWrapper buttonText="Submit" onClick={handleSubmit} />
    </form>
  );
};
