import ProductOverlay from './ProductOverlay';
const ItemSmall = ({ product }) => {
  return (
    <div className="relative font-semibold text-lg uppercase w-full hover:grayscale mb-12">
      <img
        src={product?.image}
        alt={product?.name}
        className="w-full h-full object-cover"
      />
      <h3 className="">{product?.name}</h3>
      <p>${product?.price} CAD</p>

      <ProductOverlay productID={product.id} />
    </div>
  );
};

export default ItemSmall;
