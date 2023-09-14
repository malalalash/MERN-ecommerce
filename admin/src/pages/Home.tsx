import { BellIcon, MoonIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { useMenu } from "../context/menuContext";
const Home = () => {
  const { handleMenu } = useMenu();

  return (
    <section>
      <header className="border-b h-20">
        <div className="flex w-full h-full items-center justify-between max-w-7xl mx-auto px-3">
          <div className="flex items-center">
            <button onClick={handleMenu} className="sm:hidden">
              <Bars3Icon className="w-7 h-7" />
            </button>
            <h1 className="capitalize text-2xl md:text-3xl lg:text-4xl font-bold p-2 m-2">
              Dashboard
            </h1>
          </div>
          <div className="flex gap-2">
            <div className="items-center gap-2 justify-center pr-2 hidden md:flex">
              <span className="border rounded-full p-2">
                <MoonIcon className="w-[24px] h-[24px]" />
              </span>
              <span className="border rounded-full p-2">
                <BellIcon className="w-[24px] h-[24px]" />
              </span>
            </div>

            <div className="md:border-l px-4 flex items-center gap-1">
              <img
                className="rounded-full w-12 h-12 object-center object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                alt="profile image"
              />
              <button>
                <ChevronDownIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </section>
  );
};

export default Home;