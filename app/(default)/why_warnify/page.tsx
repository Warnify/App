import Image from "next/image";
import mission from "@/public/images/mission.jpg";

export const metadata = {
  title: "Why Warnify",
  description: "Why Warnify Description Page",
};

import PageHeader from "@/components/page-header";

export default function Why_Warnify() {
  return (
    <><section>
        <div className="pt-12 pb-12 md:pt-44 md:pb-12">
            <div className="px-4 sm:px-6">
                <PageHeader
                className="mb-12 md:mb-20"
                title="Why Warnify"
                description="Simple, Reliable, and Secure."
                >
                Why Choose Us
                </PageHeader>
            </div>
        </div>

        <div className="grid grid-cols-2 mb-16">
            <div className="ml-12 mt-12">
                <h1 className="font-inter-tight text-2xl font-bold uppercase mb-4 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200">Our Mission</h1>
                <p className="pr-20  text-gray-700 dark:text-gray-400">
                   Victims of financial loss, identity theft, privacy breach, emotional distress, and more have all suffered gravely through scams from text messages. 
                   The damage is irreversible. Lives are ruined and all the hard work is scrubbed out in seconds. This is where we come in. <span className=" text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200">We Protect what matters most: 
                   your <span className="font-bold">trust</span> and <span className="font-bold">privacy</span>.</span> Our mission is to break the vicious cycle of SMS Fraud and bring back safety in your digital experience.
                </p>
            </div>
            
            <Image
              className="inset-0 object-cover object-center"
              src={mission}
              width={600}
              height={600}
              alt="A happy person looking down at a phone" />
        </div>

        <div className="grid grid-cols-2">
            <div className="bg-blue-500 rounded-lg px-12 py-12 mx-20 my-12">
                <h1 className="bg-blue-700/70 font-inter-tight rounded-full py-4 pl-8 ml-10">Hello Amanda, your FEDEX package with tracking code GB-6412-GH83 is waiting for you to set delivery preferences: http://fedex-login.com</h1>
                <h1 className="bg-red-700/95 font-inter-tight rounded-full uppercase py-2 pl-4 mt-4 mr-32">Fraud Alert</h1>
                <h1 className="bg-blue-700/70 text-blue-800 font-inter-tight rounded-full uppercase py-2 pl-4 mt-56">Enter text...</h1>


            </div>
            <div>
                <div className="bg-white dark:bg-gray-700/35 py-1">
                    <div className="text-center my-8">
                        <h1 className="text-5xl md:text-3xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                        Ease of Use
                        </h1>
                        <p className="text-sm px-20 font-semibold text-gray-700 dark:text-gray-400">
                        With a user-friendly interface and intuitive features, our app makes it easy for users to input SMS messages,initiate fraud checks, and view results, ensuring a seamless and hassle-free experience.
                        </p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-700/35 py-1 mt-8">
                    <div className="text-center my-8">
                        <h1 className="text-5xl md:text-3xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                        Real-Time Alerts
                        </h1>
                        <p className="text-sm px-20 font-semibold text-gray-700 dark:text-gray-400">
                        Receive real-time alerts and notifications about potentially fraudulent SMS messages, enabling users to take immediate action to protect themselves and prevent further harm.
                        </p>
                    </div>
                </div>
                <div className="bg-white dark:bg-gray-700/35 py-1 mt-8">
                    <div className="text-center my-8">
                        <h1 className="text-5xl md:text-3xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                        Cost-Effective Solution
                        </h1>
                        <p className="text-sm px-20 font-semibold text-gray-700 dark:text-gray-400">
                        Our WebApp offers a cost-effective solution for protecting against SMS fraud, providing valuable security benefits without breaking the bank.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        

      </section></>
  );
}