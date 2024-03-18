export const metadata = {
  title: "Faq - Creative",
  description: "Page description",
};

import PageHeader from "@/components/page-header";
import Accordion from "@/components/accordion";
import Cta from "@/components/cta";

export default function Faq() {
  const faqs = [
    {
      title: "What is SMS fraud?",
      text: "SMS fraud, also known as SMS phishing or smishing, refers to deceptive practices where fraudsters send fraudulent SMS text messages to deceive individuals into revealing personal information, clicking on malicious links, or taking other actions that compromise security.",
      active: false,
    },
    {
      title: "What is Smishing?",
      text: "Smishing attacks are fraudulent text messages that trick users into sharing personal information by clicking a link and having them log into a fake website.",
      active: false,
    },
    {
      title: "What does SMS fraud look like?",
      text: "Signs of SMS fraud may include requests for personal information, unsolicited messages containing suspicious links or attachments, ugent messages and offers that seem too good to be true. The text messages will often impersonate reputable companies such as banks or other service providers and direct users to a link, supposedly needing immediate action.",
      active: false,
    },
    {
      title: "How do I protect myself from Smishing?",
      text: "You should always be cautious of unexpected or suspicious messages and avoid clicking on links or downloading attachments from unknown senders. Never share personal or financial information via SMS and use two-factor authentication for added security. Lastly, you must regularly update their device's security software.",
      active: false,
    },
    {
      title: "What should I do if I receive a suspicious SMS?",
      text: "If you receive a suspicious SMS, do not respond to it, click on any links, or provide any personal information. Instead, report the message to your mobile carrier by forwarding it to a designated number or email address. You can also report the incident to relevant authorities, such as the Federal Trade Commission (FTC).",
      active: false,
    },
    {
      title: "How can I report SMS fraud?",
      text: "You can report SMS fraud to your mobile carrier, the Federal Trade Commission (FTC), the Internet Crime Complaint Center (IC3), or other relevant authorities. Provide as much information as possible, including the sender's phone number, message content, and any other relevant details.",
      active: false,
    },
    {
      title: "Can SMS fraud be detected and prevented?",
      text: "Yes. Users can protect themselves by implementing fraud detection algorithms like Warnify, educating themselves about common fraud tactics, using authentication methods like two-factor authentication, and regularly updating security protocols and software.",
      active: false,
    },
    {
      title: "Does Warnify reduce my risk of SMS Fraud?",
      text: "Yes. With Warnify's advanced Machine Learning Algorithm, it detects whether the text is fraudulent or not and warns the users and hence, reducing fraud risk significantly.",
      active: false,
    },
    {
      title: "Does Warnify guarantee 100% protection against fraud?",
      text: "While Warnify does use advanced fraud detection techniques, it cannot guarantee 100% protection against fraud. Users should remain vigilant and take proactive measures to safeguard their personal information.",
      active: false,
    },
  ];

  return (
    <>
      <section>
        <div className="pt-32 pb-12 md:pt-44 md:pb-20">
          <div className="px-4 sm:px-6">
            <PageHeader
              className="mb-12 md:mb-20"
              title="Let's talk about FRAUD"
              description="Here we provide answers for the most common questions."
            >
              Quick Answers
            </PageHeader>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-1">
                {faqs.map((faq, index) => (
                  <Accordion
                    key={index}
                    title={faq.title}
                    id={`faqs-${index}`}
                    active={faq.active}
                  >
                    {faq.text}
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
}
