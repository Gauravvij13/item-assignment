import React, { useEffect } from "react";

import useApp from "context/AppContext";
import useVisibleState from "hooks/useVisibleStates";
import { ItemList } from "./components/ItemList/ItemList";
import AddItemModal from "./components/AddItemModal";

export const ListSection = () => {
  const {
    actions: { getAllItemList },
  } = useApp();
  const { visible, hide, show } = useVisibleState(false);

  useEffect(() => {
    getAllItemList();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className="md:m-28 px-4 sm:px-1 pb-4 pt-3 overflow-x-auto relative">
        <>
          {visible && <AddItemModal hide={hide} />}
          <div className="flex flex-wrap justify-between items-center font-bold my-3 w-full">
            Item List
            <button
              onClick={show}
              className="flex justify-center items-center  text-xs font-medium rounded shadow-sm  hover:border-primary border-2 font-bold px-4  py-2  rounded-md  focus:outline-none md:text-sm px-4 px-16  py-3 font-bold  bg-primary text-white  "
            >
              Add New Item
            </button>
          </div>

          <div className="inline-block min-w-full shadow rounded-lg overflow-hidden ">
            <ItemList />
          </div>
        </>
      </div>
    </>
  );
};
