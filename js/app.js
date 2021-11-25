import {
  userListOnClick,
  showUsers,
  addNewUser,
  addUsers,
  newUserBtn,
} from "./function.js";
import { getUsers } from "./users.js";
import { userList } from "./function.js";

import { userTemplate } from "./function.js";

const users = getUsers();
for (let index = 0; index < users.length; index++) {
  showUsers();
}

userList.addEventListener("click", userListOnClick);

newUserBtn.addEventListener("click", addNewUser);
