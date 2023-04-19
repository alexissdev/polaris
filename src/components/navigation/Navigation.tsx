import config from "@/libs/config/config";

import useNavigationOpen from "@/hooks/useNavigationOpen";
import CartProductRepository from "@/libs/product/cart.product.repository";
import Cart from "@/components/cart/Cart";

export default function Navigation({
  cart,
  viewCart,
  toggleCart,
}: {
  cart: CartProductRepository[];
  viewCart: boolean;
  toggleCart: () => void;
}) {
  const { isOpen, toggleOpen } = useNavigationOpen();

  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-primary p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          {/* <svg> Add the icon in svg. </svg> */}
          <span className="font-semibold text-xl tracking-tight">
            {config.information.companyName}
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
          <div className="text-white text-sm lg:flex-grow">
            <a
              href="/"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4"
            >
              Inicio
            </a>
          </div>
          <div>
            <Cart cart={cart} viewCart={viewCart} toggleCart={toggleCart} />
          </div>
        </div>
      </nav>
    </div>
  );
}
