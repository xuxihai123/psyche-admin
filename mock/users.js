import mockjs from 'mockjs';

const login = (req, res) => {
  res.json({
    status: 'ok',
  });
};

export default {
  login,
};
