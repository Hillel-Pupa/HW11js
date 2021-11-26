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

const users = getUsers();
for (let index = 0; index < users.length; index++) {
  showUsers();
}

userList.addEventListener("click", userListOnClick);

newUserBtn.addEventListener("click", showForm);

addUserBtn.addEventListener("click", addNewUser);
