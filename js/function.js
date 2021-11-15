"use strict";
import { users } from "./users.js";
const userList = document.querySelector(".user-list");
const userInfo = document.querySelector(".user-info");
const userTemplate = document.querySelector("#user-content");

export function User(name, surname, age, gender) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
}

export function showUsers() {
  const newTemplate = userTemplate.content.cloneNode(true);
  userList.appendChild(newTemplate);
  const user = document.querySelector(".user");
  const userName = document.querySelector(".name");
  const userSurname = document.querySelector(".surname");
  for (let index = 0; index < users.length; index++) {
    userName.textContent = users[0].name;
  }
}

// console.log(users[0].name);
