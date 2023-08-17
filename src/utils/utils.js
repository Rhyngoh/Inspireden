export const getRandomPrompt = () => {
  const firstNoun = ['A panda','Santa','A fish','A man', 'A cat', 'A chair', 'The sun', 'Farmers', 'A dog', 'A boy', 'A Mowse', 'Papa'];
  const firstVerb = [' holding',' eating',' wearing',' driving', ' walking', ' talking to', ' drawing', ' riding'];
  const secondNoun = [' a car',' a hat',' a fish',' a panda', ' a steak', ' candy', ' flowers', ' the dog', ' a fork'];
  const descriptive = [', minimalistic',' with a lot of detail',' with a lot of color',' with a lot of contrast', ', cartoonish'];
  const randomPrompt = '"' + firstNoun[Math.floor(Math.random() * firstNoun.length)] + 
  firstVerb[Math.floor(Math.random() * firstVerb.length)] +
  secondNoun[Math.floor(Math.random() * secondNoun.length)] + 
  descriptive[Math.floor(Math.random() * descriptive.length)] + '"';
  return randomPrompt;
}