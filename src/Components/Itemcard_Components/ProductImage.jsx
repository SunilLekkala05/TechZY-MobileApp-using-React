// 3rd Component - Product Image (Product image display area)
export default function ProductImage({ image, itemName }) {
  return (
    <div className="item_img">
      <img src={image} alt={itemName} />
    </div>
  );
}
