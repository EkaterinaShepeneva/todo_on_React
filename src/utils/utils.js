export const validateInputTodo = (val) => {
  if (!val) {
    alert("Введите что-нибудь");
    return false;
  }
  const arrayWord = val.split(" ");
  let result = true;

  arrayWord.forEach((item) => {
    if (item.length > 32) {
      alert("многого хотите, нет такого слова");
      result = false;
    }
  });

  return result;
};

export const validateSignIn = (val) => {
  const value = val.trim();

  if (!value) {
    alert("Введите что-нибудь")
    return false
  }
  return true
}