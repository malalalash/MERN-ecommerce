import { useEffect } from "react";

export const useClickOutside = (
  isOpen: boolean,
  setIsOpen: (isOpen: boolean) => void,
  classOrId: string
) => {
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest(classOrId)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
};
