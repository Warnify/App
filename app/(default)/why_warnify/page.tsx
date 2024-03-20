import Image from "next/image";
import SMSFraud from "@/public/images/SMS-fraud-img.jpeg";

export const metadata = {
  title: "Why Warnify",
  description: "Why Warnify Description Page",
};

import PageHeader from "@/components/page-header";
import SubscribeForm from "@/components/subscribe-form";

export default function Why_Warnify() {
  return (
    <><section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-12">
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
    
        <div className="bg-white dark:bg-gray-700/35 py-1">
            <div className="text-center mt-20 mb-20">
                <h1 className="text-5xl md:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                    Ease of Use
                </h1>
                <p className="font-semibold">
                    With a user-friendly interface and intuitive features, our app makes it easy for users to input SMS messages,<br/> initiate fraud checks, and view results, ensuring a seamless and hassle-free experience.
                </p>
            </div>
        </div>
        
        <div className="bg-white dark:bg-gray-700/35 py-1 mt-12">
            <div className="text-center mt-20 mb-20">
                <h1 className="text-5xl md:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                    Real-Time Alerts
                </h1>
                <p className="font-semibold">
                    Receive real-time alerts and notifications about potentially fraudulent SMS messages, <br/> enabling users to take immediate action to protect themselves and prevent further harm.
                </p>
            </div>
        </div>

        <div className="bg-white dark:bg-gray-700/35 py-1 mt-12">
            <div className="text-center mt-20 mb-20">
                <h1 className="text-5xl md:text-5xl font-bold text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-b dark:from-indigo-200 dark:to-gray-200 pb-4">
                    Cost-Effective Solution
                </h1>
                <p className="font-semibold">
                    Our WebApp offers a cost-effective solution for protecting against SMS fraud, <br/> providing valuable security benefits without breaking the bank.
                </p>
            </div>
        </div>

      </section></>
  );
}