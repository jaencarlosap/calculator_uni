// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  console.log(req, 'req');
  localStorage.setItem('buenas', 'hola');
  res.status(200).json({ name: 'John Doe' });
};
