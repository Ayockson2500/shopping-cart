import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { storeItems } from "./data/items";
import formatCurrency from "../utils/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};
const CartItem = ({ id, quantity }: CartItemProps) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item === null) return null;
  return (
    <Stack direction="horizontal" gap={2}>
      <img
        src={item?.imgUrl}
        alt={item?.name}
        width="125px"
        height="75px"
        style={{ objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item?.name}
          {""}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              X{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {/* The exclamation mark is the non-null assertion operator in TypeScript. */}
          {/* It removes undefined and null from a type without doing any explicit type checking. */}
          {formatCurrency(item?.price!)}
        </div>
      </div>
      <div>{formatCurrency(item?.price! * quantity)}</div>
      <Button variant="outline-danger" size="sm" onClick={() =>removeFromCart(item?.id!)}>&times;</Button>
    </Stack>
  );
};

export default CartItem;
