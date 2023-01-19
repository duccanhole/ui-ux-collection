import { Button, Grid, Modal } from "@nextui-org/react";
import { useRouter } from "next/router";
import IProductItem from "../models/product-item";

const product: IProductItem[] = [
  {
    title: "Home",
    iconSrc: "/icon/icons8-home-icon.png",
    path: "/",
  },
  {
    title: "app test",
    iconSrc: "/icon/icons8-chat-icon.png",
    path: "/chat",
  },
];
export default function Menu({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const onAppClick = (item: IProductItem) => {
    router.push(item.path);
    onClose();
  };
  return (
    <>
      <Modal.Body className="scroll-y-auto" style={{ padding: "5%" }}>
        <Grid.Container gap={2}>
          {product.map((item, index) => (
            <Grid xs={3}>
              <div
                key={index}
                className="text-center my-4 mx-auto"
                onClick={() => onAppClick(item)}
              >
                <img
                  className="rounded-lg bg-white-200 bg-white shadow-xl"
                  width={50}
                  src={item.iconSrc}
                />
                <p className="text-white text-xs">{item.title}</p>
              </div>
            </Grid>
          ))}
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          size="sm"
          className="mx-auto bg-red-500 shadow-xl"
          onPress={onClose}
        >
          close
        </Button>
      </Modal.Footer>
    </>
  );
}
