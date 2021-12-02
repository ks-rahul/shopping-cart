import authActions from "./auth.actions";
import cartActions from "./cart.actions";
import productActions from "./product.actions";

export default { ...authActions, ...cartActions, ...productActions };
