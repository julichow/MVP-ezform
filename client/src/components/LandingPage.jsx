import React, { useState } from "react";
import AddEmployeeForm from "./AddEmployeeForm";

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Smarter Work Management for Enhanced Efficiency
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Experience the future of employee data management at Ezform.
            Traditionally, organizations manually provide documentation to
            clients, but imagine a seamless application that grants instant
            access to all your employees' information. Empower your company with
            efficient data access and a streamlined process, promoting better
            data scalability and harnessing the power of advanced AI.
          </p>
          <div>
            <button
              onClick={openModal}
              data-modal-target="crud-modal"
              data-modal-toggle="crud-modal"
              className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            >
              Add Employee
            </button>
            <AddEmployeeForm
              addEmployeeData={(newForms) => handleAddForm(newForms)}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
