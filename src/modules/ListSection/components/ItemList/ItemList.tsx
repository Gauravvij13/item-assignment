import React, { useState } from "react";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";

import useApp from "context/AppContext";
import useVisibleState from "hooks/useVisibleStates";
import { ListItemType } from "typings/listItem";
import EditItemModal from "../EditItemModal";

export const ItemList = () => {
  const [selectedItem, setSelectedItem] = useState<ListItemType>({
    name: "",
    desc: "",
    price: "",
  });
  const {
    state: { list },
    actions: { deleteItem },
  } = useApp();
  const { visible, hide, show } = useVisibleState(false);

  const editHandler = (obj: ListItemType) => {
    setSelectedItem(obj);
    show();
  };

  return (
    <>
      <table className="min-w-full leading-normal">
        <thead>
          <tr>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Name
            </th>

            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Desc
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Price
            </th>
            <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="font-medium">
          {list?.length === 0 ? (
            <tr className="h-96">
              <td colSpan={5} className="text-center font-bold text-gray-500">
                No result
              </td>
            </tr>
          ) : (
            <>
              {list?.map((val: ListItemType) => (
                <tr key={val?.id}>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div>
                      <p className="capitalize text-gray-900 whitespace-no-wrap">
                        {val?.name}
                      </p>
                    </div>
                  </td>

                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div>
                      <p className="text-gray-900 whitespace-no-wrap">
                        {val?.desc}
                      </p>
                    </div>
                  </td>
                  <td className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
                    <div>
                      <p className="capitalize text-gray-900 whitespace-no-wrap">
                        {val?.price}
                      </p>
                    </div>
                  </td>

                  <td className="py-3 border-b border-gray-200 bg-white text-sm">
                    <div className="flex ">
                      <PencilIcon
                        className="ml-5 w-5 h-6 text-primary cursor-pointer shadow hover:shadow-corner"
                        onClick={() => editHandler(val)}
                      />
                      <TrashIcon
                        className="ml-5 w-5 h-6 text-primary cursor-pointer shadow hover:shadow-corner"
                        onClick={() => deleteItem(val?.id!)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
      {visible && <EditItemModal hide={hide} selectedItem={selectedItem} />}
    </>
  );
};
