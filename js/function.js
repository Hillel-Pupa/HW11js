"use strict";
import { getUsers } from "./users.js";
export const userList = document.querySelector(".user-list");
export const userInfo = document.querySelector(".user-info");
export const userTemplate = document.querySelector("#user-content");
const namePattern = /^[A-Z][a-z]+$/;
const agePattern = /^\d\d$/;
const emailPattern = /^[a-zA-Z0-9].+@[a-z]{3,}.[a-z]{2,}$/;
const numberPattern = /^.[0-9]+$/;
const cardNumberPattern = /^[0-9]{16}$/;
const addUserTemplate = document.querySelector("#add-user");
export const addUsers = document.querySelector(".add-user");
export const newUserBtn = document.querySelector(".new-user");

export function User(name, lastname, age, email, number, cardNumber, password) {
  this.id = (Math.random() * 1e17).toString(16);
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.email = email;
  this.number = number;
  this.cardNumber = cardNumber;
  this.password = password;
}

export function addNewUser() {
  const mainForm = document.querySelector(".main-form");
  let formData = new FormData(mainForm);
  let formDataObj = Object.fromEntries(formData);
  console.log(formDataObj);
  let user = new User(
    formDataObj.firstname,
    formDataObj.lastname,
    formDataObj.age,
    formDataObj.email,
    formDataObj.phonenumber,
    formDataObj.cardnumber,
    formDataObj.userpassword
  );

  console.log(user);

  saveUsers(user);
}

function saveUsers(user) {
  const users = getUsers();
  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
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
    const userLastname = document.querySelector(".lastname");
    userName.textContent = userObj.name;
    userLastname.textContent = userObj.lastname;
    const userView = document.querySelector(".user-view");
    const age = document.querySelector(".age");
    const email = document.querySelector(".email");
    const phoneNumber = document.querySelector(".phone-number");
    const cardNumber = document.querySelector(".card-number");
    const password = document.querySelector(".password");
    userEl.appendChild(userName);
    userEl.appendChild(userLastname);
    userList.appendChild(userEl);
    userView.appendChild(age);
    userView.appendChild(email);
    userView.appendChild(phoneNumber);
    userView.appendChild(cardNumber);
    userView.appendChild(password);
    userEl.appendChild(userView);
    age.textContent = `age: ${userObj.age}`;
    email.textContent = `email: ${userObj.email}`;
    phoneNumber.textContent = `Phone Number: ${userObj.number}`;
    cardNumber.textContent = `Card Number: ${userObj.cardNumber}`;
    password.textContent = `Password: ${userObj.password}`;
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
  if (event.target.classList.contains("edit")) {
    addUsers.hidden = false;
  }
}

const newAddUserTemplate = addUserTemplate.content.cloneNode(true);
addUsers.appendChild(newAddUserTemplate);

export function showForm() {
  addUsers.hidden = false;
}
export const addUserBtn = document.querySelector(".post");

function editUser(event) {
  const users = getUsers();
  const user = event.target.classList.contains("edit");
  const userElem = event.target.parentElement;
}
// console.log(users[0].name);
