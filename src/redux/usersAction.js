import { db } from "../database/config";
import { ref, get, set, child, remove } from "firebase/database";

export const startLoadingUsers = () => {
  return (dispatch) => {
    const dbRef = ref(db);
    get(child(dbRef, `users`))
      .then((snapshot) => {
        let users = [];
        if (snapshot.exists()) {
          snapshot.forEach((childsnap) => {
            users.push(childsnap.val());
          });
        }
        dispatch(loadUser(users));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startAddEditUser = (user, type) => {
  return (dispatch) => {
    set(ref(db, `users/${user.id}`), {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    })
      .then(() => {
        type === "add" ? dispatch(addUser(user)) : dispatch(editUser(user));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const startDeletingUser = (user) => {
  return (dispatch) => {
    remove(ref(db, `users/${user.id}`))
      .then(() => {
        dispatch(removeUser(user.index));
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export function addUser(user) {
  return {
    type: "ADD_USER",
    user,
  };
}

export function editUser(user) {
  return {
    type: "EDIT_USER",
    user,
  };
}

export function loadUser(users) {
  return {
    type: "LOAD_USERS",
    users,
  };
}

export function removeUser(index) {
  return {
    type: "REMOVE_USER",
    index,
  };
}
