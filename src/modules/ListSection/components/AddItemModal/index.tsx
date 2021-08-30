import React from "react";

import { Modal } from "atoms/Modal";
import { XIcon } from "@heroicons/react/solid";
import { useId } from "react-id-generator";
import useApp from "context/AppContext";
import { ItemForm } from "organisms/ItemForm";
import { ListItemType } from "typings/listItem";

type AddItemModalProps = {
  hide: () => void;
};

export default function AddItemModal({ hide }: AddItemModalProps) {
  const {
    actions: { addList },
  } = useApp();
  const [id] = useId();

  // To add new item
  const onSubmit = async (values: ListItemType) => {
    addList({ ...values, id: id });
    hide();
  };
  const defaultValues = {
    name: "",
    desc: "",
    price: "",
  };
  return (
    <Modal isOpen={true} onClose={hide}>
      <XIcon
        className="ml-2 w-5 h-6 text-primary cursor-pointer absolute right-8 top-4"
        onClick={hide}
      />
      <div className="font-bold mb-4"> Add New</div>
      <div className="p-6 py-2">
        <ItemForm initialValues={defaultValues} onSubmit={onSubmit} />
      </div>
    </Modal>
  );
}
