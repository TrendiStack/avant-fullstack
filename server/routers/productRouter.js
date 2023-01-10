const router = require('express').Router();
const axios = require('axios');

router.get('/:id', (req, res) => {
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `${process.env.BACKEND_URL}/api/products`
      );

      const product = data.products.filter(
        product => product.id === parseInt(req.params.id)
      );
      res.json(product);
    } catch (error) {
      console.error(error);
    }
  };
  fetchProducts();
});

module.exports = router;
