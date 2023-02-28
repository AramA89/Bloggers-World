const { Post } = require('../models');

const postData = [
  {
    title: 'Why Tech?',
    content: 'The world is changing to the tech world.',
    user_id: 1
    
  },
  {
    title: 'React',
    content: 'Cant wait to learn react!.',
    user_id: 2
  },
  {
    title: 'Coding Bootcamp',
    content: 'These courses are intense but vrey insightful.',
    user_id: 3
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;