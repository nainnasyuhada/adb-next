"use client";

import React from "react";

export default function MainMenu() {
  const buttonList = [
    {
      key: "1",
      label: "Calculator",
    },
    {
      key: "2",
      label: "Navigation Bar",
    },
    {
      key: "3",
      label: "Two Sum Index",
    },
  ];

  const path = window.location.pathname.split("/")[1];
  const [selectedButton, setSelectedButton] = React.useState(path);

  return (
    <>
      <div
        className="flex-grow w-1/2 mx-auto text-center"
        style={{ marginTop: "48px", marginBottom: "48px" }}
        role="group"
      >
        {buttonList.map((button) => (
          <button
            key={button.key}
            type="button"
            onClick={() => {
              window.location.href = `/${button.key}`;
              setSelectedButton(button.key);
            }}
            className={`${
              selectedButton === button.key ? "btn-primary" : "btn-secondary"
            } mx-2 my-1`}
          >
            {button.label}
          </button>
        ))}
      </div>
    </>
  );
}
