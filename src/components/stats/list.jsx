import React from "react";

function List({ waitlist }) {
  return waitlist.map((person) => {
    return (
      <tr key={person.id} className="border">
        <td className="text-left p-3">{person.email}</td>
        <td className="text-left p-3">{person.category}</td>
      </tr>
    );
  });
}

export default List;
