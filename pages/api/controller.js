// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import SaveLocal from '../../src/models';

function LocalData({ value }) {
  const saveLocal = new SaveLocal();
  saveLocal.valor = value;

  return saveLocal.valor;
}

export default ({ body }, res) => {
  let data = LocalData(body);

  res.status(200).json(data);
};
