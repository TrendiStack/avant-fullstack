import { createContext } from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const MockDataContext = createContext({
  categories: [],
  collections: [],
  product: {},
  products: [],
  reviews: [],
  fetchProduct: () => {},
  setProduct: () => {},
  setProductNumber: () => {},
});

const MockDataProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState({});
  const [collections, setCollections] = useState([]);
  const [reviews, setReviews] = useState([]);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/products`
      );
      // add size and quantity to each product
      const newArr = data.map(product => ({
        ...product,
        size: '',
        quantity: 1,
      }));
      setProducts(newArr);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCategories = async () => {
    try {
      //Fetch Data from API
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/categories`
      );
      // Set Data to state variable
      setCategories(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchCollections = async () => {
    try {
      //Fetch Data from API
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/collections`
      );
      // Set Data to state variable
      setCollections(data);
    } catch (err) {
      console.log(err);
    }
  };

  const fetchReviews = async () => {
    try {
      //Fetch Data from API
      const { data } = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/api/reviews`
      );
      // Set Data to state variable
      setReviews(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchReviews();
  }, []);

  useEffect(() => {
    fetchCollections();
    fetchProducts();
  }, [categories]);

  const value = {
    categories,
    collections,
    product,
    products,
    reviews,
    setProduct,
  };
  return (
    <MockDataContext.Provider value={value}>
      {children}
    </MockDataContext.Provider>
  );
};

export default MockDataProvider;
