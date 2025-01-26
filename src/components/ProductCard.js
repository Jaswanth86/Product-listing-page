const ProductCard = ({ product }) => {
    return (
      <div className="product-card" role="article" aria-labelledby={`product-title-${product.id}`}>
        <img src={product.image} alt={product.title} />
        <h2 id={`product-title-${product.id}`}>{product.title}</h2>
        <p>${product.price}</p>
        <style jsx>{`
          .product-card {
            border: 1px solid #ccc;
            border-radius: 5px;
            margin: 10px;
            padding: 10px;
            width: 200px;
            text-align: center;
            transition: transform 0.2s;
          }
          .product-card:hover {
            transform: scale(1.05);
          }
          img {
            max-width: 100%;
            height: auto;
          }
        `}</style>
      </div>
    );
  };
  
  export default ProductCard;