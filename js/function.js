"use strict";
import { users } from "./users.js";
export const userList = document.querySelector(".user-list");
export const userInfo = document.querySelector(".user-info");
export const userTemplate = document.querySelector("#user-content");
const moreInfoTamplate = document.querySelector("#more-info");

export function moreInfo() {
  for (let index = 0; index < users.length; index++) {}
}

export function User(name, surname, age, gender) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
}

export function showUsers() {
  const newTemplate = userTemplate.content.cloneNode(true);
  userList.appendChild(newTemplate);
  for (let index = 0; index < users.length; index++) {
    const user = document.querySelector(".user");
    const userName = document.querySelector(".name");
    const userSurname = document.querySelector(".surname");
    userName.textContent = users[index].name;
    userSurname.textContent = users[index].surname;
    const userView = document.querySelector(".user-view");
    const age = document.querySelector(".age");
    const gender = document.querySelector(".gender");
    user.appendChild(userName);
    user.appendChild(userSurname);
    userList.appendChild(user);
    userView.appendChild(age);
    userView.appendChild(gender);
    user.appendChild(userView);
    age.textContent = `age: ${users[index].age}`;
    gender.textContent = `gender: ${users[index].gender}`;
  }
  // localStorage.setItem("users", JSON.stringify)
}

export function userListOnClick(event) {
  // console.log(event);
  // return;
  if (event.target.classList.contains("delete")) {
    const result = confirm("Вы уверенны что хотите удалить?");
    if (result) {
      const user = event.target.parentElement;
      user.remove();
    }
  }
  if (event.target.classList.contains("view")) {
    event.target.parentElement.lastChild.hidden = false;
  }
}

// console.log(users[0].name);
