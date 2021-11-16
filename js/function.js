"use strict";
import { users } from "./users.js";
export const userList = document.querySelector(".user-list");
export const userInfo = document.querySelector(".user-info");
export const userTemplate = document.querySelector("#user-content");
const moreInfoTamplate = document.querySelector("#more-info");

export function moreInfo() {
  const newMoreInfoTamplate = moreInfoTamplate.content.cloneNode(true);
  userInfo.appendChild(newMoreInfoTamplate);
  for (let index = 0; index < users.length; index++) {
    const userView = document.querySelector(".user-view");
    const age = document.querySelector(".age");
    const gender = document.querySelector(".gender");
    userView.appendChild(age);
    userView.appendChild(gender);
    userInfo.appendChild(userView);
    age.textContent = `age: ${users[index].age}`;
    gender.textContent = `gender: ${users[index].gender}`;
  }
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
    user.appendChild(userName);
    user.appendChild(userSurname);
    userList.appendChild(user);
    userName.textContent = users[index].name;
    userSurname.textContent = users[index].surname;
  }
}

export function userListOnClick(event) {
  // console.log(event);
  // return;
  if (event.target.classList.contains("delete")) {
    const user = event.target.parentElement;
    user.remove();
  }
  if (event.target.classList.contains("view")) {
  }
}

export function showMoreInfo() {}

// console.log(users[0].name);
