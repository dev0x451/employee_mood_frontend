import { useCallback, useEffect } from "react";

const MOUSE_UP = "mouseup";

export const useOutsideClick = (handleClose: () => void, ref: any) => {
  const handleClick = useCallback(
    (event: MouseEvent) => {
      if (ref?.current?.contains && !ref.current.contains(event.target)) {
        handleClose();
      }
    },
    [handleClose, ref]
  );

  useEffect(() => {
    document.addEventListener(MOUSE_UP, handleClick);

    return () => {
      document.removeEventListener(MOUSE_UP, handleClick);
    };
  }, [handleClick]);
};
