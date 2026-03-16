// Auth-actions
import { getCurrentUser } from "../auth-actions/auth-actions";
// Actions
import { getCartDataAction } from "../httpServices/clientActions";
// Components
import CartTable from "../_components/CartTable/CartTable";
// lucide-react Icons
import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const Cart = async () => {
  // current user
  const { id } = await getCurrentUser();
  // get cart data
  const cartData = await getCartDataAction(id);

  if (!cartData || cartData?.items?.length === 0)
    return (
      <div className="my-8 text-center flex flex-col justify-center items-center gap-3">
        <div className="p-9 bg-gray-600 rounded-full">
          <ShoppingBag size={130} />
        </div>
        <h3 className="text-4xl">Your Cart is Empty</h3>
        <p className="text-lg max-w-xl mx-auto">
          Looks like you hasn't added anything to your cart yet. Go ahead and
          explore our top categories!
        </p>
        <Link
          href={"/"}
          className="mt-3 px-6 py-4 text-lg text-black bg-slate-500 border-2 border-slate-500 rounded-full hover:text-white hover:bg-transparent hover:shadow-2xl hover:shadow-slate-500 transition-all duration-300">
          Start Shopping
        </Link>
      </div>
    );

  return (
    <div>
      <div className="cart-title-desc my-8 flex flex-col justify-center items-center gap-3">
        <h1 className="text-5xl">Shopping Cart</h1>
        <p className="text-center text-xl">
          Total {cartData?.items?.length || 0}
          {cartData?.items?.length > 1 ? " Products" : " Product"} In Your Cart
        </p>
      </div>
      <div className="cart-table my-5 px-10">
        <CartTable cartData={cartData} />
      </div>
    </div>
  );
};

export default Cart;
