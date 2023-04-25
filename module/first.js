export function formatPhoneNumber(str) {
  const arr = str.split(' ').map(Number);
  // Получаем первые три цифры номера телефона
  const part1 = arr.slice(0, 3).join("");
  // Получаем вторые три цифры номера телефона
  const part2 = arr.slice(3, 6).join("");
  // Получаем последние четыре цифры номера телефона
  const part3 = arr.slice(6).join("");
  // Склеиваем все три части в одну строку с разделителем "-"
  return `${part1}-${part2}-${part3}`;
}

  