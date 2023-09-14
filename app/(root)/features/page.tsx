const Features = () => {
  return (
    <div className="bg-gradient-to-t from-green-400 to-white">
      <div className="px-4 py-6 text-center text-white sm:py-12 bg-gradient-to-t from-green-400 to-white sm:px-8 fade-in">
        <h1 className="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl xl:text-5xl">
          Welcome to our Custom CRM, designed to streamline your business
          operations and enhance customer relationship management. Below, you'll
          find an overview of the powerful features that our CRM offers to help
          your business thrive.
        </h1>
      </div>
      <div className="container px-4 py-6 mx-auto sm:px-8 ">
        <div className="flex flex-row p-6 transition-transform duration-300 transform scale-0 bg-white rounded-lg">
          <div className="flex-col font-bold text-black text center">
            Leads Generate
          </div>
          <div className="flex-col font-bold text-black text center">
            Marketing
          </div>
          <div className="flex-col font-bold text-black text center">
            Accounts
          </div>
          <div className="flex-col font-bold text-black text center">
            Leads Generate
          </div>
          <div className="flex-col font-bold text-black text center">
            Marketing
          </div>
          <div className="flex-col font-bold text-black text center">
            Accounts
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
