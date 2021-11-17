"use strict";
import { getUsers } from "./users.js";
export const userList = document.querySelector(".user-list");
export const userInfo = document.querySelector(".user-info");
export const userTemplate = document.querySelector("#user-content");
const moreInfoTamplate = document.querySelector("#more-info");

export function User(name, surname, age, gender) {
  this.id = (Math.random() * 1e17).toString(16);
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
}

export function showUsers() {
  const newTemplate = userTemplate.content.cloneNode(true);
  userList.appendChild(newTemplate);
  const users = getUsers();
  for (let index = 0; index < users.length; index++) {
    const userEl = document.querySelector(".user");
    const userObj = users[index];
    userEl.id = userObj.id;
    const userName = document.querySelector(".name");
    const userSurname = document.querySelector(".surname");
    userName.textContent = userObj.name;
    userSurname.textContent = userObj.surname;
    const userView = document.querySelector(".user-view");
    const age = document.querySelector(".age");
    const gender = document.querySelector(".gender");
    userEl.appendChild(userName);
    userEl.appendChild(userSurname);
    userList.appendChild(userEl);
    userView.appendChild(age);
    userView.appendChild(gender);
    userEl.appendChild(userView);
    age.textContent = `age: ${userObj.age}`;
    gender.textContent = `gender: ${userObj.gender}`;
  }
  localStorage.setItem("users", JSON.stringify(users));
}

export function userListOnClick(event) {
  // console.log(event);
  // return;
  if (event.target.classList.contains("delete")) {
    const result = confirm("Вы уверенны что хотите удалить?");
    if (result) {
      const userElem = event.target.parentElement;
      userElem.remove();
      const users = getUsers();
      const newUsers = users.filter((user) => user.id != userElem.id);
      localStorage.setItem("users", JSON.stringify(newUsers));
    }
  }
  if (event.target.classList.contains("view")) {
    event.target.parentElement.lastChild.hidden = false;
  }
}

// console.log(users[0].name);
