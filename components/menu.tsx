import { Button, Modal } from "@nextui-org/react";
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

const product: IProductItem[][] = new Array(4).fill(
  new Array(6).fill({
    title: "app test",
    iconSrc:
      "https://img.icons8.com/fluency/48/null/speech-bubble-with-dots--v1.png",
    path: "",
  })
);

export default function Menu({ onClose }: { onClose: () => void }) {
  return (
    <>
      <Modal.Body
        className="flex flex-col justify-between scroll-y-auto"
        style={{ padding: "5%" }}
      >
        {product.map((row, i1) => (
          <div key={i1} className="flex flex-row justify-between">
            {row.map((col, i2) => (
              <div
                key={"row" + i1 + "col" + i2}
                className="text-center flex flex-col items-center"
              >
                <div>
                  <img className="rounded-lg" src={col.iconSrc} />
                </div>
                <div className="text-white text-lg font-bold">{col.title}</div>
              </div>
            ))}
          </div>
        ))}
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
