// Numeronyms
// Devs like to abbreviate everything: k8s means Kubernetes, a11y means accessibility, l10n means localization. You get the Dev numeronyms by taking the first and the last letter and counting the number of letters in between. Words that have less than 4 letters aren't abbreviated, because that would just be odd. The input is a sentence, and you should abbreviate every word that is 4 letters long or longer. There won't be any punctuation in the sentence. g2d l2k e6e

// 'E3y d7r l3s to mix k8s and j8t'
const input = "Every developer likes to mix kubernetes and javascript";
const x = input
  .split(" ")
  .filter((v) => v.length >= 4)
  .map(myFunction);
function myFunction(v, i, arr) {
  return (arr[i] =
    arr[i][0] + arr[i].slice(1, v.length - 1).length + arr[i][v.length - 1]);
}
console.log(x.join(" "));
