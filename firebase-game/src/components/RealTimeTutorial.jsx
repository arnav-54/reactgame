import { db } from "../firebase";
import { ref, set, get, push, remove, child, onValue } from "firebase/database";
import { useEffect } from "react";

//
// DOCS:  https://firebase.google.com/docs/database/web/read-and-write

export default function RealTimetutorial() {
  function insertDataUsingSet() {
    const dummyRef = ref(db, "/set");
    /* set: It will take a referecne and data to be inserted on that reference. If locatioin not exists it will create
    and insert data otherwise it will overwrite the dat
    */
    set(dummyRef, {
      name: "pafdklsf",
      age: 20,
    });
  }

  function usingGetFunction() {
    const readRef = ref(db, "/users/ashish/new");
    /*
      It will take the refrence of the location and will return you the snapshot
    */
    get(readRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
        }
      })
      .catch((err) => console.log("Error", err));
  }

  function usingPushMethod() {
    const usersRef = ref(db, "users/");
    push(usersRef, {
      name: "Ashsih ",
      age: 21,
    });
  }

  function removeFirebaseMethod() {
    const dbRef = ref(db, "users");
    remove(dbRef).then(() => alert("Removed"));
  }

  function childFirebaseMethod() {
    const userRef = ref(db, "users");
    const newNodeRef = child(userRef, "sdfdklfj");
    set(newNodeRef, {
      message: "HI",
    });
  }

  function startListner() {
    const listnerRef = ref(db, "/count");
    onValue(listnerRef, (snapshot) => {
      if (snapshot.exists()) {
        console.log("Count is " + snapshot.val().count);
      } else {
        console.log("No Data Found");
      }
    });
  }

  function Changecount() {
    const countRef = ref(db, "count");
    set(countRef, {
      count: 2000,
    });
  }

  useEffect(() => {
    startListner();
  }, []);

  return (
    <div>
      <p>Hey This is the Real Time Database Tutorial : firebase</p>
      <button onClick={insertDataUsingSet}>Insert Test Data using Set</button>
      <button onClick={usingGetFunction}>Test the Get Function</button>
      <button onClick={usingPushMethod}>Test Push Method</button>
      <button onClick={removeFirebaseMethod}>Test Remove Method</button>
      <button onClick={childFirebaseMethod}>Test Child Method</button>
      <button onClick={Changecount}>Change Count for LIstner</button>
    </div>
  );
}
