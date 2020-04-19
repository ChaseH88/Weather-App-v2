import { useContext } from "react";
import { State } from "state";
import { Modal } from "Types/interfaces";

const useModal = (): [boolean, Modal] => {

  // Grab the modal data and boolean
  const [ { app: { modal, modalData } }] = useContext(State);

  return [modal, modalData] as [boolean, Modal];
  
};

export { useModal };