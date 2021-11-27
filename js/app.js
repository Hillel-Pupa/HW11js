import {
  userListOnClick,
  showUsers,
  showForm,
  addUsers,
  newUserBtn,
  addUserBtn,
  addNewUser,
} from "./function.js";
import { getUsers } from "./users.js";
import { userList } from "./function.js";
import { userTemplate } from "./function.js";

newUserBtn.addEventListener("click", showForm);

addUserBtn.addEventListener("click", addNewUser);

const users = getUsers();
for (let index = 0; index < users.length; index++) {
  showUsers();
}

userList.addEventListener("click", userListOnClick);
