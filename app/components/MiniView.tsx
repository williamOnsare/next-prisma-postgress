"use client";

import React, { useState } from "react";

type Props = {};

const MiniView = (props: Props) => {
  const [dbUsers, setdbUsers] = useState();
  const [isLoading, setisLoading] = useState(false);

  return (
    <div className="w-auto">
      <div className="flex items-center bg-inherit mb-8">
        <button
          onClick={() => {
            setisLoading(true);
            fetch("/api/users")
              .then((res) => res.json())
              .then((data) => {
                console.log("data", data);
                // todo: add to local state
              })
              .catch((err) => {
                console.log("fetch error", err);
              })
              .finally(() => setisLoading(false));
          }}
          className="p-2 rounded bg-slate-500 mr-20"
        >
          Get all Users
        </button>

        <button
          className="p-2 rounded bg-slate-700"
          onClick={() => {
            const payload = {
              uName: "Jackie",
              uEmail: "jackie@yahoo.com",
              uAvatar: "https://i.pravatar.cc/150?img=38",
            };

            setisLoading(true);
            fetch("/api/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            })
              .then((res) => res.json())
              .then((data) => {
                console.log("new record added", data);
              })
              .catch((err) => {
                console.log("error posting record", err);
              })
              .finally(() => setisLoading(false));
          }}
        >
          Add new user
        </button>
      </div>

      {isLoading && <div className="text-white text-center">Loading...</div>}
    </div>
  );
};

export default MiniView;
