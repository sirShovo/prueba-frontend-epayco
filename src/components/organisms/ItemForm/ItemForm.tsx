import { useState } from "react";
import { Item } from "../../../domain/models/Item";
import { FormField } from "../../molecules/FormField/FormField";
import { ButtonWrapper } from "../../molecules/ButtonWrapper/ButtonWrapper";
import styles from "./ItemForm.module.css";
import { Title } from "../../atoms/Title/Title";

type ItemFormProps = {
  onAddItem: (item: Item) => void;
};

export const ItemForm: React.FC<ItemFormProps> = ({ onAddItem }) => {
  const [title, setTitle] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación de los datos
    if (!title.trim() || !body.trim()) {
      setError("Both fields are required.");
      return;
    }

    // Crear un nuevo ítem
    const newItem: Item = {
      id: crypto.randomUUID(),
      title,
      body,
    };

    // Enviar el ítem al callback
    onAddItem(newItem);

    // Limpiar el formulario
    setTitle("");
    setBody("");
    setError("");
  };

  return (
    <section className={styles.form_container}>
      <Title
        text="Add new item"
        className={styles.form_title}
      />
      <form className={styles.form_contend} onSubmit={handleSubmit}>
        <FormField
          label={{ text: "Title", htmlFor: "title" }}
          input={{
            type: "text",
            value: title,
            onChange: (e) => setTitle(e.target.value),
            placeholder: "Enter item title",
            name: "title",
            id: "title",
          }}
          errorMessage={error && !title.trim() ? error : undefined}
        />
        <FormField
          label={{ text: "Body", htmlFor: "body" }}
          input={{
            type: "text",
            value: body,
            onChange: (e) => setBody(e.target.value),
            placeholder: "Enter item body",
            name: "body",
            id: "body",
          }}
          errorMessage={error && !body.trim() ? error : undefined}
        />
        <div className={styles.form_actions}>
          <ButtonWrapper buttonText="Add Item" onClick={() => {}} />
        </div>
      </form>
    </section>
  );
};
