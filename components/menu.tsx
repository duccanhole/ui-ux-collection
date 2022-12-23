import { Button } from "@nextui-org/react";
import IProductItem from "../model/product-item";

const product: IProductItem[] = [];

export default function Menu({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Button color="error" onPress={onClose}>
        Close
      </Button>
    </>
  );
}
