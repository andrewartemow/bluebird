import axios from 'axios';

const runPrompt = async ({
  firstName,
  lastName,
  job,
  skills,
  email,
  phone,
}) => {
  const prompt = `I want to get a job. Write me cover letter with this information, name: ${firstName}, lastName: ${lastName}, job: ${job}, skills: ${skills}, email: ${email}, phone: ${phone}`;

  const options = {
    method: 'POST',
    url: 'https://openai80.p.rapidapi.com/chat/completions',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'd4d20f5e32msh0d9713f65b02a0cp10fc18jsn65e6918d1482',
      'X-RapidAPI-Host': 'openai80.p.rapidapi.com',
    },
    data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${prompt}"}]}`,
  };

  return axios
    .request(options)
    .then(function (response) {
      return response.data.choices[0].message.content;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export default runPrompt;
