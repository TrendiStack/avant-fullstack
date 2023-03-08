const router = require('express').Router();
const Product = require('../models/Product');

// const productsArr = [
//   {
//     id: 1,
//     name: 'Black Skeleton Peace Sign T-Shirt',
//     description:
//       "This shirt features a cool black skeleton hand making a peace sign. Made from a soft and comfortable cotton material, it's perfect for everyday wear.",
//     image:
//       'https://images.unsplash.com/photo-1503341504253-dff4815485f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Shirts',
//   },
//   {
//     id: 2,
//     name: 'Black Collared Patterned Shirt',
//     description:
//       "This stylish black shirt has a collared neckline and a trendy pattern throughout. Made from a lightweight and breathable material, it's perfect for dressing up or down.",
//     image:
//       'https://images.unsplash.com/photo-1618979507950-8b87ee54de19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80',
//     price: 10.99,
//     category: 'Shirts',
//   },
//   {
//     id: 3,
//     name: 'White Collared Dress Shirt',
//     description:
//       "This classic white dress shirt has a collared neckline and a sleek, formal look. Made from a high-quality cotton blend, it's perfect for the office or a formal event.",
//     image:
//       'https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Shirts',
//   },
//   {
//     id: 4,
//     name: 'Leopard Print Short Sleeve Shirt',
//     description:
//       "This bold leopard print shirt will add some wild flair to your wardrobe. Made from a soft and stretchy material, it's perfect for a night out on the town.",
//     image:
//       'https://images.unsplash.com/photo-1536766820879-059fec98ec0a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Shirts',
//   },
//   {
//     id: 5,
//     name: 'White T-Shirt',
//     description:
//       "This simple yet versatile white t-shirt is a wardrobe staple. Made from a soft and comfortable cotton material, it's perfect for everyday wear.",
//     image:
//       'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//     price: 10.99,
//     category: 'Shirts',
//   },

//   {
//     id: 6,
//     name: 'Coat 1',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Coats & Jackets',
//   },
//   {
//     id: 7,
//     name: 'Coat 2',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1520975916090-3105956dac38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Coats & Jackets',
//   },
//   {
//     id: 8,
//     name: 'Coat 3',
//     description: 'Description 3',
//     image:
//       'https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//     price: 10.99,
//     category: 'Coats & Jackets',
//   },
//   {
//     id: 9,
//     name: 'Coat 4',
//     description: 'Description 4',
//     image:
//       'https://images.unsplash.com/photo-1635205383450-e0fee6fe73c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
//     price: 10.99,
//     category: 'Coats & Jackets',
//   },
//   {
//     id: 10,
//     name: 'Coat 5',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1641943632372-013fdd603f03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
//     price: 10.99,
//     category: 'Coats & Jackets',
//   },

//   {
//     id: 11,
//     name: 'Dark Washed Minor Distressed Tapered Denim',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1511196044526-5cb3bcb7071b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
//     price: 10.99,
//     category: 'Jeans & Trousers',
//   },
//   {
//     id: 12,
//     name: 'Light Washed Tapared Fit Denim',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1511105043137-7e66f28270e3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
//     price: 10.99,
//     category: 'Jeans & Trousers',
//   },
//   {
//     id: 13,
//     name: 'Dark Green Tapered Trousers',
//     description: 'Description 3',
//     image:
//       'https://images.unsplash.com/photo-1514311548104-ae305aac4688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
//     price: 10.99,
//     category: 'Jeans & Trousers',
//   },
//   {
//     id: 14,
//     name: 'Dark Washed Tapered Fit Denim',
//     description: 'Description 4',
//     image:
//       'https://images.unsplash.com/photo-1511105612320-2e62a04dd044?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
//     price: 10.99,
//     category: 'Jeans & Trousers',
//   },
//   {
//     id: 15,
//     name: 'Black Distressed Tapered Fit Denim',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1530092618047-513e0b7ba873?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Jeans & Trousers',
//   },

//   {
//     id: 16,
//     name: 'Black and Red Tracksuit',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1541102396743-74c128e1133e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
//     price: 10.99,
//     category: 'Loungewear & Nightwear',
//   },
//   {
//     id: 17,
//     name: 'Red Silk Pajaamas',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1612975828131-845f5bdb8676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
//     price: 10.99,
//     category: 'Loungewear & Nightwear',
//   },
//   {
//     id: 18,
//     name: 'White Cotton Lounge Suit',
//     description: 'Description 3',
//     image:
//       'https://images.unsplash.com/photo-1569444742735-5103ddd540b3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Loungewear & Nightwear',
//   },
//   {
//     id: 19,
//     name: 'Earth Green Loungesuit',
//     description: 'Description 4',
//     image:
//       'https://media.gq-magazine.co.uk/photos/602a741b0a67c8553755dec2/master/w_1920%2Cc_limit/Loungewear%2520brands_0002_Hamilton%2520and%2520hare.jpg',
//     price: 10.99,
//     category: 'Loungewear & Nightwear',
//   },
//   {
//     id: 20,
//     name: 'Beigh Short Sleeve Loungesuit',
//     description: 'Description 5',
//     image:
//       'https://media.gq-magazine.co.uk/photos/602a737da29397b3791c6e07/master/w_1920%2Cc_limit/Loungewear%2520brands_0003_Desmond%2520and%2520dempsey.jpg',
//     price: 10.99,
//     category: 'Loungewear & Nightwear',
//   },

//   {
//     id: 21,
//     name: 'Brown Embroidered Hoodie',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1643402438164-172c93c3ae72?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Sweatshirts & Hoodies',
//   },
//   {
//     id: 22,
//     name: 'Black Graphic Hoodie',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1637185766875-b64f2c6fff57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Sweatshirts & Hoodies',
//   },
//   {
//     id: 23,
//     name: 'Black Crew Neck Sweatshirt',
//     description: 'Description 3',
//     image:
//       'https://images.unsplash.com/flagged/photo-1574876162325-d4c95b4c01bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Sweatshirts & Hoodies',
//   },
//   {
//     id: 24,
//     name: 'White Cotton Crew Neck sweatshirt',
//     description: 'Description 4',
//     image:
//       'https://images.unsplash.com/photo-1619622376461-28732c2b88c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=763&q=80',
//     price: 10.99,
//     category: 'Sweatshirts & Hoodies',
//   },

//   {
//     id: 25,
//     name: 'White Cotton Hoodie',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Sweatshirts & Hoodies',
//   },

//   {
//     id: 26,
//     name: 'Brown Dress Shoes',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1472591651607-70e2d88ae3c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80',
//     price: 10.99,
//     category: 'Footwear',
//   },
//   {
//     id: 27,
//     name: 'White Running Shoes',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1542327821-87a5f0fb3c9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
//     price: 10.99,
//     category: 'Footwear',
//   },
//   {
//     id: 28,
//     name: 'Red and Grey Low-cut Retro Sneakers',
//     description: 'Description 3',

//     image:
//       'https://images.unsplash.com/photo-1612015670817-0127d21628d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     price: 10.99,
//     category: 'Footwear',
//   },
//   {
//     id: 29,
//     name: 'White Chuck Taylors',
//     description: 'Description 4',
//     image:
//       'https://images.unsplash.com/photo-1555363947-31b65ce0ffc1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Footwear',
//   },
//   {
//     id: 30,
//     name: 'Leather Work Boots',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
//     price: 10.99,
//     category: 'Footwear',
//   },

//   {
//     id: 31,
//     name: 'Brown Leather Wallet',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1637168943285-a8f9ea0dc3f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
//     price: 10.99,
//     category: 'Bags & Accessories',
//   },
//   {
//     id: 32,
//     name: '4 Piece Ring Set',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1575863438848-e058621afa9b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Bags & Accessories',
//   },
//   {
//     id: 33,
//     name: 'Thin Frame Black Sunglasses',
//     description: 'Description 3',
//     image:
//       'https://images.unsplash.com/photo-1642886512785-b5fee9faad7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
//     price: 10.99,
//     category: 'Bags & Accessories',
//   },
//   {
//     id: 34,
//     name: 'Brown Duffel Bag',
//     description: 'Description 4',
//     image:
//       'https://images.unsplash.com/photo-1589270216117-7972b3082c7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Bags & Accessories',
//   },
//   {
//     id: 35,
//     name: 'Orange Nylon Utility Backpack',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1599033769082-95726e3c7900?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//     price: 10.99,
//     category: 'Bags & Accessories',
//   },
// ];

router.get('/', async (req, res) => {
  // productsArr.forEach(product => {
  //   const productModel = new Product(product);
  //   productModel.save();
  // });
  const products = await Product.find();
  res.json(products);
});

router.get('/shirts', async (req, res) => {
  const shirts = await Product.find({ category: 'Shirts' });
  res.json(shirts);
});

router.get('/coats', async (req, res) => {
  const coats = await Product.find({ category: 'Coats & Jackets' });
  res.json(coats);
});

router.get('/jeans', async (req, res) => {
  const jeans = await Product.find({ category: 'Jeans' });
  res.json(jeans);
});

router.get('/loungewear', async (req, res) => {
  const loungewear = await Product.find({ category: 'Loungewear & Nightwear' });
  res.json(loungewear);
});

router.get('/sweatshirts', async (req, res) => {
  const sweatshirts = await Product.find({ category: 'Sweatshirts & Hoodies' });
  res.json(sweatshirts);
});

router.get('/shoes', async (req, res) => {
  const shoes = await Product.find({ category: 'Footwear' });
  res.json(shoes);
});

router.get('/accessories', async (req, res) => {
  const accessories = await Product.find({ category: 'Bags & Accessories' });
  res.json(accessories);
});

module.exports = router;
