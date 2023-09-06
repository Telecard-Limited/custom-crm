"use client";
import { Button } from "@/components/ui/button";
import { NextPage } from "next";
import Image from "next/image";
interface TeamMemberProps {
  name: string;
  role: string;
}
const TeamMember: React.FC<TeamMemberProps> = ({ name, role }) => {
  return (
    <div className="flex flex-col items-center justify-between text-gray-700">
      <Image
        alt="placeholderimage"
        src={"/images/placeholderimage.jfif"}
        width={50}
        height={50}
        className="rounded-full"
      />
      {name} - {role}
    </div>
  );
};

const About: NextPage = () => {
  return (
    <div className="bg-gradient-to-t from-green-400 to-white">
      {/* Hero Section for "About Customized CRM" */}
      <div className="px-4 py-6 text-center text-white sm:py-12 bg-gradient-to-t from-green-400 to-white sm:px-8 fade-in">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
          About Customized CRM
        </h1>
        <p className="mb-4 text-base sm:text-lg lg:text-xl xl:text-2xl">
          Welcome to Customized CRM, your trusted partner in managing and
          nurturing customer relationships! Automate your workflows with the
          least consuming time.
        </p>
        <Button
          variant={"outline"}
          className="w-full h-12 text-white bg-gradient-to-t from-green-400 to-white sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          Get Started!
        </Button>
      </div>

      <div className="container px-4 py-6 mx-auto sm:px-8">
        <div className="p-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl lg:text-3xl xl:text-4xl">
            Our Mission
          </h2>
          <p className="text-gray-700">
            At Customized CRM, our mission is to provide businesses with a
            tailored CRM solution that empowers them to build stronger customer
            relationships, streamline operations, and drive growth.
          </p>
        </div>

        <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl lg:text-3xl xl:text-4xl">
            Why Choose Us?
          </h2>
          <ul className="pl-4 text-gray-700 list-disc">
            <li>
              Personalized Solutions: We work closely with you to customize our
              CRM to meet your specific requirements.
            </li>
            <li>
              User-Friendly Interface: Our intuitive interface makes it easy for
              your team to get started and maximize productivity.
            </li>
            <li>
              Data Security: We prioritize the security of your customer data,
              ensuring it's protected at all times.
            </li>
            <li>
              Scalability: Our CRM grows with your business, adapting to your
              evolving needs.
            </li>
          </ul>
        </div>

        <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl lg:text-3xl xl:text-4xl">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
            <TeamMember name="John Doe" role="CEO & Co-Founder" />
            <TeamMember name="Jane Smith" role="CTO & Lead Developer" />
            <TeamMember name="Alice Johnson" role="UX/UI Designer" />
            <TeamMember
              name="Bob Williams"
              role="Customer Support Specialist"
            />
          </div>
        </div>

        <div className="p-6 mt-6 bg-white rounded-lg shadow-lg">
          <h2 className="mb-4 text-xl font-semibold sm:text-2xl lg:text-3xl xl:text-4xl">
            Contact Us
          </h2>
          <p className="text-gray-700">
            If you have any questions, feedback, or would like to inquire about
            our CRM services, please don't hesitate to get in touch:
          </p>
          <p className="text-gray-700">Email: info@customizedcrm.com</p>
          <p className="text-gray-700">Phone: +1 (123) 456-7890</p>
        </div>
      </div>
    </div>
  );
};

export default About;
