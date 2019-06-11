
const uploadSingleFile = (req, res) => {
  res.json({
    status: 'ok',
    data: {
      originalname: 'https://casper.ghost.org/v2.0.0/images/welcome-to-ghost.jpg',
    },
  });
};

export default {
  uploadSingleFile,
};
