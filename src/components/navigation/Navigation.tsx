import useNavigationOpen from "@/hooks/useNavigationOpen";

export default function Navigation() {
  const { isOpen, toggleOpen } = useNavigationOpen();

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-gray-700 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* <svg> Add the icon in svg. </svg> */}
          <span className="font-semibold text-xl tracking-tight">
            Viniferous Store
          </span>
        </div>
        <div className="block lg:hidden">
          <button
            className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400 hover:border-gray-400"
            onClick={toggleOpen}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`text-left w-full flex-grow lg:flex lg:items-center lg:w-auto lg:text-right ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Inicio
            </a>
          </div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-400 hover:bg-white mt-4 lg:mt-0"
            >
              Contactame
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
