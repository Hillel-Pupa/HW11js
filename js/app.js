import {
  userListOnClick,
  showUsers,
  showForm,
  addUsers,
  newUserBtn,
  addUserBtn,
  addNewUser,
  editUserBtn,
  editUser,
} from "./function.js";
import { getUsers } from "./users.js";
import { userList } from "./function.js";
import { userTemplate } from "./function.js";

newUserBtn.addEventListener("click", showForm);

addUserBtn.addEventListener("click", addNewUser);

editUserBtn.addEventListener("click", editUser);

const users = getUsers();

showUsers();

userList.addEventListener("click", userListOnClick);
