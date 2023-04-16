import { useState } from "react";
import React from "react";

function Contact(props) {
  const { addContactHandler } = props;
  const [name, setName] = useState();
  const [email, setEmail] = useState();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "") {
      alert("Both fields are required.");
      return;
    } else {
      // console.log(name, email);
      addContactHandler({ name, email });
      setName("");
      setEmail("");
    }
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={onFormSubmit}>
        <div className="my-6">
          <label for="text">Name</label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="my-6">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-40 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            // name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="text-center">
          <button
            button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
