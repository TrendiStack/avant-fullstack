const router = require('express').Router();
const Category = require('../models/Category');

// const categoriesArr = [
//   {
//     id: 1,
//     name: 'Shirts',
//     description: 'Description 1',
//     image:
//       'https://images.unsplash.com/photo-1591357037205-166318b51afd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//   },
//   {
//     id: 2,
//     name: 'Coats & Jackets',
//     description: 'Description 2',
//     image:
//       'https://images.unsplash.com/photo-1576526625665-849fbc418224?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//   },
//   {
//     id: 3,
//     name: 'Jeans & Trousers',
//     description: 'Description 3',
//     image:
//       'https://images.unsplash.com/photo-1510867759970-3d2ca293be77?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//   },
//   {
//     id: 4,
//     name: 'Loungewear & Nightwear',
//     description: 'Description 4',
//     image:
//       'https://images.unsplash.com/photo-1612975828131-845f5bdb8676?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
//   },

//   {
//     id: 5,
//     name: 'Sweatshirts & Hoodies',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1512401127452-381867a7f9c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//   },
//   {
//     id: 6,
//     name: 'Footwear',
//     description: 'Description 5',
//     image:
//       'https://images.unsplash.com/photo-1623756598261-2092cc878b63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//   },
//   {
//     id: 7,
//     name: 'Bags & Accessories',
//     description: 'Description 6',
//     image:
//       'https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482&q=80',
//   },
// ];
router.get('/', async (req, res) => {
  // categoriesArr.forEach(category => {
  //   const newCategory = new Category(category);
  //   newCategory.save();
  // });

  const categories = await Category.find();
  res.send(categories);
});

module.exports = router;
