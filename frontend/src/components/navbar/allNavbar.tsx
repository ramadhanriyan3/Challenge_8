"use client";
import MyNavbar from "./myNavbar";
import MyButton from "../button/button";

export default function AllNavbar() {
  return (
    <>
      <header data-testid="navbar" className="max-width mx-auto">
        <MyNavbar>
          <MyButton value="Register" handlerOnClick={() => {}} />
        </MyNavbar>
      </header>
    </>
  );
}
