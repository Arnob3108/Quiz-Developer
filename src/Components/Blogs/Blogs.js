import React from "react";

const Blogs = () => {
  return (
    <div className="w-full mx-auto flex flex-col items-center m-20">
      <div>
        <label
          htmlFor="my-modal-1"
          className="btn modal-button lg:text-4xl text-lg bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:shadow-xl hover:shadow-purple-500/50"
        >
          What is the purpose of React Router?
        </label>

        <input type="checkbox" id="my-modal-1" className="modal-toggle" />
        <label htmlFor="my-modal-1" className="modal cursor-pointer">
          <label className="modal-box relative" for="">
            <h3 className="text-lg font-bold">
              what is the purpose of react router?
            </h3>
            <p className="py-4 text-xl">
              Routing in React <br />
              React Router is a standard library for routing in React. It
              enables the navigation among views of various components in a
              React Application, allows changing the browser URL, and keeps the
              UI in sync with the URL.
            </p>
          </label>
        </label>
      </div>
      {/* 2nd  */}
      <div className="my-24">
        <label
          htmlFor="my-modal-2"
          className="btn modal-button lg:text-4xl text-lg bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:shadow-xl hover:shadow-purple-500/50"
        >
          What is a Context API? How does it work?
        </label>

        <input type="checkbox" id="my-modal-2" className="modal-toggle" />
        <label htmlFor="my-modal-2" className="modal cursor-pointer">
          <label className="modal-box relative" for="">
            <h3 className="text-lg font-bold">
              What is a Context API? How does it work?
            </h3>
            <p className="py-4 text-xl">
              The React Context API is a way for a React app to effectively
              produce global variables that can be passed around. This is the
              alternative to "prop drilling" or moving props from grandparent to
              child to parent, and so on. Context is also touted as an easier,
              lighter approach to state management using Redux. <br />
              <br />
              React.createContext() is all you need. It returns a consumer and a
              provider. Provider is a component that as it's names suggests
              provides the state to its children. It will hold the "store" and
              be the parent of all the components that might need that store.
              Consumer as it so happens is a component that consumes and uses
              the state.
            </p>
          </label>
        </label>
      </div>
      {/* 3rd  */}
      <div>
        <label
          htmlFor="my-modal-3"
          className="btn modal-button lg:text-4xl text-lg bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 hover:shadow-xl hover:shadow-purple-500/50"
        >
          What is useref in react hook?
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <label htmlFor="my-modal-3" className="modal cursor-pointer">
          <label className="modal-box relative" for="">
            <h3 className="text-lg font-bold">What is useref in react hook?</h3>
            <p className="py-4 text-xl">
              Mutable values useRef (initialValue) is a built-in React hook that
              accepts one argument as the initial value and returns a reference
              (aka ref ). A reference is an object having a special property
              current.
            </p>
          </label>
        </label>
      </div>
    </div>
  );
};

export default Blogs;
