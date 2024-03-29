import Image from "next/image";
import SMSFraud from "@/public/images/SMS-fraud-img.jpeg";

export const metadata = {
  title: "Warnify: Prevent SMS Fraud",
  description: "Home Page",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Home() {
  return (
    <>
      <section>
        <div className="py-12 mt-12 md:pt-44 text-center sm:text-start">
          <div className="flex sm:px-6 mx-80">
            <div>
              <h1 className="pr-12 font-inter-tight text-3xl sm:text-6xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                Welcome to Warnify, the Best SMS Fraud Checker
              </h1>
              <p className="text-sm sm:text-lg mt-6 mb-12 pr-12 text-gray-700 dark:text-gray-400">
                With Warnify, now you can protect yourself against one of the
                biggest cyber crimes out there: SMS Fraud or better known as
                Smishing. Generally, users should be cautious about clicking
                links, replying to unsolicited messages, and providing any
                personal information via SMS. Although service providers
                implement security measures to detect and prevent SMS fraud,
                countless people get scammed daily by sharing bank information,
                passwords, social insurance numbers, etc. Check if your SMS is
                fraudulent by submitting the text message in the search engine
                below.
              </p>
              {/* <a href="/why_warnify">
                <button className="btn w-40 sm:w-60 h-16 mt-4 mr-12 sm:ml-16 text-md sm:text-lg font-bold font-inter-tight text-gray-100 bg-gray-900 hover:bg-gray-800 dark:text-gray-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 border-spacing-2 border-white">
                  Why WARNIFY
                </button>
              </a> */}
            </div>
            <div className="hidden md:block">
              <Image
                className="justify-end mt-16 mr-96 rounded-full"
                src={SMSFraud}
                width={700}
                height={700}
                alt="SMS Fraud text msg"
              />
            </div>
          </div>
        </div>
        <div className="px-4 md:hidden">
          <Image
            className="justify-end mb-8 rounded-full"
            src={SMSFraud}
            width={700}
            height={700}
            alt="SMS Fraud text msg"
          />
        </div>
      </section>
      <section>
        <SubscribeForm></SubscribeForm>
      </section>
      <section>
        <div className="bg-white dark:bg-gray-700/35 py-1">
          <div className="text-center mt-20 mb-20">
            <h1 className="text-3xl sm:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
              Here is how{" "}
              <span className="text-gray-700 dark:text-gray-500">we</span> do it
            </h1>
            <p className="text-xs sm:text-sm text-gray-500">
              Steps we take to make sure{" "}
              <span className="text-gray-700 dark:text-gray-200 font-medium sm:font-small">
                you
              </span>{" "}
              stay safe.
            </p>
          </div>
          <div className="flex flex-wrap justify-center mt-20 mb-12 gap-12">
            <div className="text-gray-100 bg-gray-900 dark:text-gray-300 dark:bg-indigo-700/75 h-96 w-80 rounded-3xl">
              <h1 className="text-2xl text-center font-semibold px-2 pt-10">
                Extract Information <br />
                from SMS
              </h1>
              <p className="text-gray-300 text-center px-8 mt-11">
                Using an API or library/framework, we extract information from
                the SMS such as message content and links. Then it's converted
                into data by cleaning text, removing noise, and converting text
                into numerical features suitable for machine learning
                algorithms.
              </p>
            </div>
            <div className="text-gray-100 bg-gray-900 dark:text-gray-300 dark:bg-indigo-700/75 h-96 w-80 rounded-3xl">
              <h1 className="text-2xl text-center font-semibold pt-6 px-2">
                Apply our advanced Machine Learning Algorithm
              </h1>
              <p className="text-gray-300 text-center px-8 my-7">
                Our fraud detection algorithm will analyze the extracted data
                and determine if the SMS is potentially fraudulent. This
                algorithm utilizes numerous techniques such as keyword matching
                or rules-based logic to identify suspicious patterns or
                characteristics indicative of fraud.
              </p>
            </div>
            <div className="text-gray-100 bg-gray-900 dark:text-gray-300 dark:bg-indigo-700/75 h-96 w-80 rounded-3xl">
              <h1 className="text-2xl text-center font-semibold px-2 pt-10">
                Deliver Fraud Status to User
              </h1>
              <p className="text-gray-300 text-center px-8 mt-11">
                Based on the output of the fraud detection algorithm, we return
                a result indicating whether the SMS is flagged as fraudulent or
                legitimate. Users are able to identify and avoid harmful SMS,
                thus ensuring security measures against scams.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
