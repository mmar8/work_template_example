/** Copyright (c) Blue Duck Education Ltd. (https://www.mangahigh.com), All rights reserved */
import variantData from './variants.csv';

const defaultGenerator = {
  variants() {
    const variants = variantData.slice(1);
    return variants;
  },
  getVariant(index) {
    const variants = this.variants();
    const inputs = variants[index];
    const [question, months,, option1, option2, option3] = inputs;
    const arrMonth = months.split(', ');
    const correctAnswer = this.getCorrectAnswer(index);
    const choices = [
      option1,
      option2,
      option3,
      correctAnswer,
    ];
    return {
      inputs: [question, arrMonth],
      choices,
    };
  },
  getCorrectAnswer(index) {
    const inputs = this.variants()[index];
    const [, , answer] = inputs;

    return answer;
  },
  getVariantCount() {
    return this.variants().length;
  },
};

export default { default: defaultGenerator };
