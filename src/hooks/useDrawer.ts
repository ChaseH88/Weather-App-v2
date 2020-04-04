import { useContext } from "react";
import { State } from "state";
import { MENU_TOGGLE } from "state/types";

/**
 * The hook will give you the menu boolean and let you toggle it.
 * @returns {[boolean, Function]}
 */
const useDrawer = (): [boolean, Function] => {

  // Grab the menu boolean
  const [ { app: { menuOpen } }] = useContext(State);
  
  const menuToggle = (): void => {
    window.dispatch({
      type: MENU_TOGGLE,
      payload: !menuOpen
    })
  }

  return [menuOpen, menuToggle];
  
};

export { useDrawer };