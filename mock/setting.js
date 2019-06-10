function getBaseSetting(req, res) {
  res.json({
    status: 'ok',
    data: {
      blogUrl: 'http://localhost:3000',
      blogTitle: '断桥残雪',
      blogSubTitle: '断桥残雪的个人摹刻',
      blogLogo: 'http://localhost:3000/assets/image/logo.svg',
      faviconUrl: 'http://localhost:3000/favicon.ico',
      blogMeta: 'Psyche,blog',
      blogMetaDesc: 'Psyche blog, a small blog',
    },
  });
}

function updateBaseSetting(req, res) {
  res.json({status: 'ok'});
}

function getEmailSetting(req, res) {
  res.json({
    status: 'ok',
    data: {
      username: 'x373241884y@gmail.com',
      password: 'xxxxxxxx',
      host: 'smtp.gmail.com',
      ssl: true,
    },
  });
}

function updateEmailSetting(req, res) {
  res.json({status: 'ok'});
}

export default {
  getBaseSetting,
  updateBaseSetting,
  getEmailSetting,
  updateEmailSetting,
};
