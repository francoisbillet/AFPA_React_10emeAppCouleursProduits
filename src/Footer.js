import React from "react";

const Footer = props => {
  return (
    <div className="notes-footer">
      {[1, 2, 3, 4, 5].map(note => (
        <button
          key={note}
          onClick={() => {
            props.addNote(note);
          }}
        >
          {note}
        </button>
      ))}
    </div>
  );
};

export default Footer;
