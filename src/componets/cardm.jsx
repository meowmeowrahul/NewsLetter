import { useState } from "react";
import "./cardm.css";
const Succesfull = ({ userEmail, onDismiss }) => {
  return (
    <div className="bg-white md:bg-mBlue  min-h-lvh  flex justify-center items-center">
      <div className=" md:p-10 md:max-w-[28rem]  md:bg-white rounded-4xl">
        <div className="flex flex-col h-[70%] justify-center">
          <img
            src="/images/icon-success.svg"
            className="h-[72px] w-[72px] mb-9 md:h-[60px] md:w-[60px]"
          ></img>
          <h1 className="text-dBlue font-extrabold text-4xl mb-5 md:text-[2.5rem]">
            Thanks for subscribing!
          </h1>
          <article className="text-dBlue">
            A confirmation email has been sent to{" "}
            <p className="font-bold text-[18px] text-dBlue inline">
              {userEmail}
            </p>
            . Please open it and click the button inside to confirm your
            subscription.
          </article>
        </div>
        <div className="flex w-full justify-center p-5 ">
          <button
            className=" hover-gradient hover:shadow-red-400 hover:shadow-2xl w-[70%] mt-[7rem] md:mt-[1rem] md:w-full p-4 bg-dBlue text-white rounded-lg font-bold"
            onClick={onDismiss}
          >
            Dismiss message
          </button>
        </div>
      </div>
    </div>
  );
};
const Cardm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [validation, setValidation] = useState("");
  if (submitted) {
    return (
      <Succesfull
        userEmail={email}
        onDismiss={() => {
          setEmail("");
          setSubmitted(!submitted);
          setValidation("");
        }}
      />
    );
  } else {
    const handleSubmit = (e) => {
      e.preventDefault();
      if (isValid(email)) {
        setValidation("sucessful");
        setSubmitted(!submitted);
      } else if (email == "") {
        setValidation("pending");
      } else {
        setValidation("incorrect");
      }
    };
    const isValid = (email) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
    const handleEmailChange = (e) => {
      setEmail(e);
    };
    const getStyle = () => {
      switch (validation) {
        case "pending":
          return "bg-red-100 border-red-400 border text-red-400";
        case "sucessful":
          return " border bg-green-50 text-green-500 border-green-500";
        case "incorrect":
          return "bg-red-100 border-red-400 border text-red-400";
        default:
          return "border border-greyHere";
      }
    };
    const getStyleError = () => {
      switch (validation) {
        case "pending":
          return (
            <label className="text-red-400 text-sm">Email is required</label>
          );
        case "sucessful":
          return <label className="text-green-500 text-sm">Successful</label>;
        case "incorrect":
          return (
            <label className="text-red-400 text-sm">Enter Valid Email</label>
          );
        default:
          return "";
      }
    };

    return (
      <form className="rounded-4xl bg-white  max-w-sm md:max-w-[46rem] md:max-h-[30rem]">
        <div className="flex flex-col md:flex-row-reverse bg-white rounded-4xl max-h-lvh md:max-h-[30rem]">
          <img
            src="/images/illustration-sign-up-mobile.svg"
            className="w-full md:hidden"
          ></img>
          <div className="flex justify-end">
            <img
              src="/images/illustration-sign-up-desktop.svg"
              className="w-full hidden md:block p-5"
            ></img>
          </div>

          <div className=" mt-3 flex flex-col h-[842px] md:max-h-[30rem] ml-2 pr-1 md:mt-13 md:ml-6 ">
            <h1 className="text-dBlue font-extrabold text-4xl p-4 md:text-[2.5rem]">
              Stay updated!
            </h1>
            <h2 className="p-4 text-dBlue font-medium md:p-4 md:text-[15px]">
              Join 60,000+ product managers receiving monthly updates on:
            </h2>
            <ul className="flex  ml-1">
              <li className="flex flex-col justify-evenly md:mr-3">
                <img src="/images/icon-list.svg" className="mb-1"></img>
                <img src="/images/icon-list.svg" className="mb-1"></img>
                <img src="/images/icon-list.svg" className=""></img>
              </li>

              <li className="flex flex-col  pt-2 justify-evenly ">
                <p className="pl-4 pt-4 md:p-0 md:mb-3">
                  Product discovery and building what matters
                </p>

                <h6 className="pl-4 pb-6 pt-3 md:p-0 md:text-[13px] ">
                  Measuring to ensure updates are a
                  <p className="md:inline md:p-1">success</p>
                </h6>

                <p className="pl-4 pb-8 md:p-0 md:mb-3 md:mt-3">
                  And much more!
                </p>
              </li>
            </ul>
            <div className="flex flex-col m-5 md:m-0 md:pt-2">
              <div className="flex justify-between">
                <h5 className=" text-dBlue font-bold text-sm mb-2 ">
                  Email Address
                </h5>
                {getStyleError()}
              </div>
              <input
                type="email"
                value={email}
                placeholder="company@email.com"
                className={`w-full rounded-lg p-3 mb-6 md:m-0 ${getStyle(
                  email
                )}`}
                onChange={(e) => {
                  handleEmailChange(e.target.value);
                }}
              ></input>
              <button
                type="submit"
                className="md:mt-2 hover-gradient hover:shadow-red-400 hover:shadow-2xl hover:transition-all hover:duration-200 mb-4 w-full p-3 flex justify-center items-center rounded-lg font-bold bg-dBlue text-white pt-4 pb-4"
                onClick={(e) => handleSubmit(e)}
              >
                Subscribe to monthly newsletter
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
};

export default Cardm;
