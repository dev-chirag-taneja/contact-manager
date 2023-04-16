import React from "react";

export default function ContactCard(props) {
  const { id, name, email } = props.contact;
  const { clickHandler } = props;

  return (
    <div>
      <div className="border my-2 p-2">
        <button
          type="button"
          class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-small rounded-lg text-sm px-2.5 py-2.5 text-center float-right"
          onClick={() => clickHandler(id)}
        >
          Delete
        </button>
        <div>{name}</div>
        <div>{email}</div>
      </div>
    </div>
  );
}
