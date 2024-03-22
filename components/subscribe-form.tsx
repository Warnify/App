"use client";
import { useState } from "react";

export default function SubscribeForm() {
  const [text, setText] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://backend-etxi.onrender.com/api/predict/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            text,
          }),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setResponseMessage(`${JSON.stringify(data)}`);
      } else {
        setResponseMessage("Failed to send request.");
      }
    } catch (error) {
      console.error("Error:", error);
      setResponseMessage("An unexpected error occurred.");
    }
  };

  return (
    <>
      <div className="flex items-center justify-center before:h-px before:w-full before:border-b before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:before:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] before:shadow-sm before:shadow-white/20 dark:before:shadow-none after:h-px after:w-full after:border-b after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.8),transparent)1] dark:after:[border-image:linear-gradient(to_right,transparent,theme(colors.indigo.300/.16),transparent)1] after:shadow-sm after:shadow-white/20 dark:after:shadow-none mb-12">
        {/*the whole email area*/}
        <div className="w-96 sm:w-full max-w-lg shrink-0">
          <div
            className={`px-5 py-5 ${
              !responseMessage
                ? "bg-indigo-500/15 dark:from-gray-700/80 dark:to-gray-700/70"
                : responseMessage === "1"
                ? "bg-red-500/15 dark:bg-red-700/85"
                : "bg-green-500/15 dark:bg-green-600/85"
            } rounded-lg -z-10 before:absolute before:inset-y-0 before:left-0 before:w-[15px] before:bg-[length:15px_15px] before:[background-position:top_center,bottom_center] before:bg-no-repeat before:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:before:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)] after:absolute after:inset-y-0 after:right-0 after:w-[15px] after:bg-[length:15px_15px] after:[background-position:top_center,bottom_center] after:bg-no-repeat after:[background-image:radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.indigo.500/.56)_1.5px,transparent_1.5px)] dark:after:[background-image:radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px),radial-gradient(circle_at_center,theme(colors.gray.600)_1.5px,transparent_1.5px)]`}
            aria-hidden="true"
          >
            {responseMessage ? (
              <h1 className="flex items-center justify-center h-full font-inter-tight text-3xl sm:text-6xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200">
                {responseMessage == "1" ? "FRAUD" : "LEGITIMATE"}
              </h1>
            ) : (
              ""
            )}
            <form className="relative" onSubmit={handleSubmit}>
              {/* Border with dots in corners */}
              <div className="space-y-3 h-85">
                <div>
                  <label className="sr-only" htmlFor="text message">
                    Text Message
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 text-gray-500/70 dark:text-gray-400/70 pl-4 flex items-center pointer-events-none">
                      {/*email icon*/}
                      <svg
                        className="fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height={14}
                      >
                        <path d="M14 0H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 12H2V5.723l5.504 3.145a.998.998 0 0 0 .992 0L14 5.723V12Zm0-8.58L8 6.849 2 3.42V2h12v1.42Z" />
                      </svg>
                    </div>
                    {/*email entering area*/}
                    <input
                      id="message"
                      className="form-input text-sm w-full pl-10 pr-4"
                      type="message"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      placeholder="Enter text message..."
                      required
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="btn text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-800 dark:bg-gray-100 dark:hover:bg-white w-full"
                  >
                    Check for Fraud
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
