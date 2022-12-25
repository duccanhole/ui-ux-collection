import { Button, Grid, Modal } from "@nextui-org/react";
import IProductItem from "../models/product-item";

// const product: IProductItem[][] = [
//   [
//     {
//       title: "app1",
//       iconSrc:
//         "https://img.icons8.com/fluency/48/null/speech-bubble-with-dots--v1.png",
//       path: "",
//     },
//   ],
// ];

const product: IProductItem[] = new Array(15).fill({
  title: "app test",
  iconSrc:
    "https://img.icons8.com/fluency/48/null/speech-bubble-with-dots--v1.png",
  path: "",
});
export default function Menu({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Modal.Body className="scroll-y-auto" style={{ padding: "5%" }}>
        <Grid.Container gap={2}>
          {product.map((item, index) => (
            <Grid xs={3}>
              <div key={index} className="text-center my-4 mx-auto">
                <img className="rounded-lg bg-white-200 bg-white shadow-xl" width={50} src={item.iconSrc} />
                <p className="text-white text-xs">{item.title}</p>
              </div>
            </Grid>
          ))}
        </Grid.Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          size="sm"
          className="mx-auto bg-red-400 shadow-xl"
          onPress={onClose}
        >
          close
        </Button>
      </Modal.Footer>
    </>
  );
}
