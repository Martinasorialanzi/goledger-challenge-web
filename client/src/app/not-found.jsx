import React from "react";

export default function NotFound() {
  return (
    <div className="global">
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h2 className="text-6xl font-bold mt-6">404</h2>
          <p className="text-xl my-4">The page is not done yet!</p>

          <a href="/" className=" my-6 text-white">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
}
