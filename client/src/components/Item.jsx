import ProductOverlay from './ProductOverlay';

const Item = ({ item }) => {
  return (
    <article className="hover:grayscale relative w-full lg:hover:scale-105 transition-transform duration-300 cursor-pointer">
      <div>
        <img
          src={item.image}
          alt={item.name}
          className="w-full aspect-square object-cover"
        />
      </div>
      <div className="font-semibold py-5 ">
        <h1>{item.name.toUpperCase()}</h1>
        <p>${item.price} CAD</p>
      </div>
      <ProductOverlay productID={item.id} />
    </article>
  );
};

export default Item;
