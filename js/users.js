import { User } from "./function.js";

export function getUsers() {
  if (localStorage.getItem("users") === null) {
    let basicUsers = [
      new User(
        "Тимур",
        "Пупкин",
        "23",
        "pupkin.asd@gmail.com",
        "+38065127127",
        "2222323455436512",
        "ahgigGKG252!!"
      ),
      new User(
        "Маша",
        "Лисичкина",
        "20",
        "masha.365@mail.ru",
        "+382682367686",
        "3333878656439987",
        "AJHj65!!ak"
      ),
      new User(
        "Андрей",
        "Пупкин",
        "26",
        "asoiai.aj.56@gmail.com",
        "+217797479837",
        "4444564376778233",
        "ash$$f1.I67"
      ),
      new User(
        "Олег",
        "Рыбник",
        "34",
        "asjs66@gmail.com",
        "+380880465732",
        "3343767655554512",
        "adu@@4j!.d"
      ),
      new User(
        "Алина",
        "Александрова",
        "21",
        "asuhdiu#a.@mail.ru",
        "+380611623542",
        "2443454478997655",
        "sdj%FF!aAF"
      ),
    ];
    localStorage.setItem("users", JSON.stringify(basicUsers));
  }
  const users = JSON.parse(localStorage.getItem("users"));
  return users;
}
