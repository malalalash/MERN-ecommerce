import { createContext, useState, useContext } from "react";

interface IMenuContext {
  isMenuOpen: boolean;
  handleMenu: () => void;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuContext = createContext<IMenuContext | null>(null);

const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <MenuContext.Provider value={{ isMenuOpen, handleMenu, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
};

const useMenu = () => {
  const context = useContext(MenuContext);
  if (context === null) {
    throw new Error("useMenu must be used within a MenuProvider");
  }
  return context;
};

export { MenuProvider, useMenu };
