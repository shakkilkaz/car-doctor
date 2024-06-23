// import { Rating } from '@smastrom/react-rating'

const ProductCart = ({product}) => {
    const {image,title,price} = product;
  return (
    <div className="card w-96 h-[500px] bg-base-100 shadow-xl">
    <figure className="px-10 pt-10">
      <img src={image} />
    </figure>
   
    <div className="card-body items-center text-center">
    {/* <Rating
      style={{ maxWidth: 180 }}
      value={3}
      readOnly
    /> */}
      <h2 className="card-title">{title}</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <p>${price}</p>
    </div>
  </div>
   
  );
};

export default ProductCart;

