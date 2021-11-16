import { userListOnClick, showUsers, moreInfo } from "./function.js";
import { users } from "./users.js";
import { userList } from "./function.js";
import { userInfo } from "./function.js";
import { userTemplate } from "./function.js";

for (let index = 0; index < users.length; index++) {
  showUsers();
  moreInfo();
}
