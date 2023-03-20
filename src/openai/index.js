const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

const runPrompt = async ({
  firstName,
  lastName,
  job,
  skills,
  email,
  phone,
}) => {
  const prompt = `I want to get a job. Write me cover letter with this information, name: ${firstName}, lastName: ${lastName}, job: ${job}, skills: ${skills}, email: ${email}, phone: ${phone}`;

  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: prompt,
    max_tokens: 2048,
    temperature: 1,
  });

  const responseText = response.data.choices[0].text;
  return responseText;
};

export default runPrompt;
