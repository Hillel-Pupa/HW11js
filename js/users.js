import { User } from "./function.js";

export function getUsers() {
  if (localStorage.getItem("users") === null) {
    let basicUsers = [
      new User("Тимур", "Пупкин", "23", "М"),
      new User("Маша", "Лисичкина", "20", "Ж"),
      new User("Андрей", "Пупкин", "26", "М"),
      new User("Олег", "Рыбник", "34", "М"),
      new User("Алина", "Александрова", "21", "Ж"),
    ];
    localStorage.setItem("users", JSON.stringify(basicUsers));
  }
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
}
