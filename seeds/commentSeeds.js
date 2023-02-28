const { Comment } = require('../models');

const commentData = [
  {
    comment_text: "Welcome!",
    user_id: 1,
    post_id: 1
  },
  {
    comment_text: "Hello!",
    user_id: 2,
    post_id: 2
  },
  {
    comment_text: "Bloggers!",
    user_id: 3,
    post_id: 3
  }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;