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

export function User(
  firstname,
  lastname,
  age,
  email,
  phonenumber,
  cardnumber,
  password
) {
  this.id = (Math.random() * 1e17).toString(16);
  this.firstname = firstname;
  this.lastname = lastname;
  this.age = age;
  this.email = email;
  this.phonenumber = phonenumber;
  this.cardnumber = cardnumber;
  this.password = password;
}

export function addNewUser() {
  const mainForm = document.querySelector(".main-form");
  let formData = new FormData(mainForm);
  let formDataObj = Object.fromEntries(formData);
  console.log(formDataObj);

  if (!namePattern.test(formDataObj.firstname)) {
    console.error("Enter firstname");
    return;
  }
  if (!namePattern.test(formDataObj.lastname)) {
    console.error("Enter lastname");
    return;
  }
  if (!agePattern.test(formDataObj.age)) {
    console.error("Enter age");
    return;
  }
  if (!emailPattern.test(formDataObj.email)) {
    console.error("Enter email");
    return;
  }
  if (!numberPattern.test(formDataObj.phonenumber)) {
    console.error("Enter phone number");
    return;
  }
  if (!cardNumberPattern.test(formDataObj.cardNumber)) {
    console.error("Enter card number");
    return;
  }
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
  const users = getUsers();
  users.push(user);
  saveUsers(users);
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

export function showUsers() {
  const users = getUsers();
  userList.replaceChildren([]);
  for (let index = 0; index < users.length; index++) {
    const userContentEl = userTemplate.content.cloneNode(true);
    const userEl = userContentEl.querySelector(".user");
    const userObj = users[index];
    userEl.id = userObj.id;
    const userName = userContentEl.querySelector(".name");
    const userLastname = userContentEl.querySelector(".lastname");
    userName.textContent = userObj.firstname;
    userLastname.textContent = userObj.lastname;
    const userView = userContentEl.querySelector(".user-view");
    const age = userContentEl.querySelector(".age");
    const email = userContentEl.querySelector(".email");
    const phoneNumber = userContentEl.querySelector(".phone-number");
    const cardNumber = userContentEl.querySelector(".card-number");
    const password = userContentEl.querySelector(".password");
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
    cardNumber.textContent = `Card Number: ${userObj.cardnumber}`;
    password.textContent = `Password: ${userObj.password}`;
    userList.appendChild(userContentEl);
  }

  localStorage.setItem("users", JSON.stringify(users));
}

const newAddUserTemplate = addUserTemplate.content.cloneNode(true);
addUsers.appendChild(newAddUserTemplate);

function fillUserForm(user, form) {
  for (const key in user) {
    if (form.elements[key]) {
      form.elements[key].value = user[key];
    } else {
      console.warn("element not found", key);
    }
  }
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
    const users = getUsers();
    const userElem = event.target.parentElement;
    const currentUser = users.find((user) => user.id === userElem.id);
    const mainForm = document.querySelector(".main-form");
    mainForm.firstname.value = currentUser.firstname;
    fillUserForm(currentUser, mainForm);
  }
}

export function showForm() {
  addUsers.hidden = false;
}
export const addUserBtn = document.querySelector(".post");
export const editUserBtn = document.querySelector(".editUser");

export function editUser(event) {
  event.preventDefault();
  const users = getUsers();
  const mainForm = document.querySelector(".main-form");
  const currentUser = users.find(
    (user) => user.id === mainForm.elements.id.value
  );
  let formData = new FormData(mainForm);
  let formDataObj = Object.fromEntries(formData);
  Object.assign(currentUser, formDataObj);
  saveUsers(users);
  addUsers.hidden = true;
  showUsers();
}

// console.log(users[0].name);
