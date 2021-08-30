import React from "react";

import { Modal } from "atoms/Modal";
import { XIcon } from "@heroicons/react/solid";

import useApp from "context/AppContext";
import { ItemForm } from "organisms/ItemForm";
import { ListItemType } from "typings/listItem";

type EditItemModalProps = {
  hide: () => void;
  selectedItem: ListItemType;
};

export default function EditItemModal({
  hide,
  selectedItem,
}: EditItemModalProps) {
  const {
    actions: { editItem },
  } = useApp();

  // To Edit any existing item
  const onSubmit = async (values: ListItemType) => {
    editItem(values);
    hide();
  };

  return (
    <Modal isOpen={true} onClose={hide}>
      <XIcon
        className="ml-2 w-5 h-6 text-primary cursor-pointer absolute right-8 top-4"
        onClick={hide}
      />
      <div className="font-bold mb-4">Edit Item</div>
      <div className="p-6 py-2">
        <ItemForm initialValues={selectedItem} onSubmit={onSubmit} />
      </div>
    </Modal>
  );
}
