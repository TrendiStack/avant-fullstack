const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({
    reviews: [
      {
        id: 1,
        name: 'John Ackerman',
        rating: 5,
        comment:
          "I recently purchased some clothes from the online men's clothing retailer and was really impressed with the quality and variety of the items. The website was easy to use and the delivery was very fast. I'm really happy with my new clothes and will definitely be shopping here again in the future.",
        image:
          'https://images.unsplash.com/photo-1673012650334-1cde3c03ca06?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80',
      },

      {
        id: 2,
        name: 'Dave Smith',
        rating: 5,
        comment:
          "I've been shopping at this online retailer for years and have always been pleased with the quality and selection of clothes. The prices are competitive and the shipping is always fast. I've purchased everything from casual T-shirts to formal suits, and have never been disappointed.",
        image:
          'https://images.unsplash.com/photo-1673276628202-737bf3020ac2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
      },

      {
        id: 3,
        name: 'Sam Jones',
        rating: 5,
        comment:
          'I recently discovered this online retailer and have been really impressed with the customer service. I had a question about sizing and the staff was extremely helpful and responsive. I ended up purchasing a few items and am extremely satisfied with the fit and quality. I will definitely be a returning customer.',
        image:
          'https://images.unsplash.com/photo-1672595800383-d37078d57293?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
      },

      {
        id: 4,
        name: 'Mark Johnson',
        rating: 5,
        comment:
          "I was a bit hesitant to shop for clothes online, but decided to give this retailer a try and I'm so glad I did. The clothes are exactly as described and fit perfectly. The website is user-friendly and the delivery was super fast. I'll definitely be shopping here again.",
        image:
          'https://images.unsplash.com/photo-1651602701319-491d146f2c9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80',
      },

      {
        id: 5,
        name: 'Steve Williams',
        rating: 5,
        comment:
          "I was in need of some new work clothes and decided to check out this online retailer. I was really impressed with the selection of professional attire and the prices were very reasonable. I ended up purchasing a few dress shirts and slacks and am extremely happy with my purchase. I'll definitely be coming back for more.",
        image:
          'https://images.unsplash.com/photo-1672948522118-a6341bd52901?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=800',
      },
    ],
  });
});

module.exports = router;
