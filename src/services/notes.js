import axios from 'axios';

const baseUrl = 'http://localhost:3001/notes';

export const getAll = async () => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const createNew = async (content) => {
  const note = { ...content, done: false };
  const res = await axios.post(baseUrl, note);
  return res.data;
};

export const removeNote = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};


export const doneNote = async (content) => {
  console.log(content.id);
  const note = { ...content, done: !content.done };
  axios.put(`${baseUrl}/${content.id}`, note);
};