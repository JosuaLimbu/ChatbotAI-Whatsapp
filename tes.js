const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

async function generateResponse(text) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: text,
    temperature: 0.3,
    max_tokens: 2000,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  });
  return response.data.choices[0].text;
}

async function main() {
  const result = await generateResponse("What is the meaning of life?");
  console.log(result);
}
main();
