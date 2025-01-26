import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import FilterSection from '../components/FilterSection';
import axios from 'axios';
import '../styles/globals.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Head>
        <title>Product Listing Page</title>
        <meta name="description" content="Browse our collection of amazing products." />
        <meta name="keywords" content="products, shopping, ecommerce" />
        <link rel="canonical" href="https://yourwebsite.com/" />
      </Head>
      <Header />
     
      
      <main>
        <div className="heading">
        <h1>DISCOVER OUR PRODUCTS</h1>
        <p>At mettā muse, we are dedicated to providing a curated selection of unique and beautiful products that celebrate
         craftsmanship and creativity. Discover a world of ethically sourced artisan goods, handcrafted home decor, 
         and one-of-a-kind finds that will bring joy and inspiration to your life. Browse our collection and find the
          perfect piece to express your individual style and support talented artisans around the world.</p>
        </div>
        <hr/>
        <FilterSection />
        <hr/>
        <div className="product-list" role="region" aria-labelledby="product-list">
          {products.map(product => <ProductCard key={product.id} product={product} />)}
        </div>
      </main>
      <Footer />
      <style jsx>{`
        main {
          padding: 20px;
          background-color: #f4f4f4;
        }
        .product-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
        }
        .heading{
          text-align:center;
          padding: 40px;
          margin:10px
          }
          hr{
          border:1px solid #ccc;
          
          }

      `}</style>
    </>
  );
};

export default Home;