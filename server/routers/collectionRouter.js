const router = require('express').Router();
const Collection = require('../models/Collection');

// const collectionsArr = [
//   {
//     id: 1,
//     name: 'Winter Collection',
//     description: 'Description 1',
//     images: [
//       'https://images.unsplash.com/photo-1651093755170-570651c6d82b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       'https://images.unsplash.com/photo-1484186304838-0bf1a8cff81c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//       'https://images.unsplash.com/photo-1520517601640-32ec514e4a15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
//       'https://images.unsplash.com/photo-1626307416562-ee839676f5fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
//     ],
//   },
//   {
//     id: 2,
//     name: 'Summer Collection',
//     description: 'Description 2',
//     images: [
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//     ],
//   },
//   {
//     id: 3,
//     name: 'Spring Collection',
//     description: 'Description 3',
//     images: [
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//     ],
//   },
//   {
//     id: 4,
//     name: 'Autumn Collection',
//     description: 'Description 4',
//     images: [
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//       'https://picsum.photos/200/300',
//     ],
//   },
// ];

router.get('/', async (req, res) => {
  // collectionsArr.forEach(collection => {
  //   const newCollection = new Collection(collection);
  //   newCollection.save();
  // });

  const collections = await Collection.find();
  res.json(collections);
});

module.exports = router;
