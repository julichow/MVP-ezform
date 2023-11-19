import { useState } from "react";

function EmployeesList({ employeesList, deleteEmployee }) {
  const [query, setQuery] = useState("");
  const [expandedEmployee, setExpandedEmployee] = useState(null);

  const filteredEmployees = employeesList.filter((employee) => {
    const fullName = employee.fullName || "";
    return fullName.toLowerCase().includes(query.toLowerCase());
  });

  const handleReadMoreClick = (employee) => {
    setExpandedEmployee(
      employee.fullName === expandedEmployee ? null : employee.fullName
    );
  };

  return (
    <>
      <div className="mb-16">
        <dh-component>
          <div className="container flex justify-center mx-auto pt-16">
            <div>
              <p className="text-gray-500 text-lg text-center font-normal pb-3">
                BUILDING TEAM
              </p>
              <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
                The Talented People Behind the Scenes of the Organization
              </h1>
              <div className="flex items-center">
                <label for="simple-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-full">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 18 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    id="simple-search"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search employee name..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-white bg-indigo-600 rounded-lg border border-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-indigo-600 dark:focus:ring-indigo-700"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full bg-gray-100 px-10 pt-10 mt-32 mb-56">
            <div className="container mx-auto">
              <div
                role="list"
                aria-label="Behind the scenes People "
                className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around"
              >
                {filteredEmployees.map((hireling) => {
                  const formattedBirthDate = new Intl.DateTimeFormat("en-MY", {
                    dateStyle: "full",
                    timeZone: "Asia/Kuala_Lumpur",
                  }).format(new Date(hireling.birthDate));

                  const formattedStartDate = new Intl.DateTimeFormat("en-MY", {
                    dateStyle: "full",
                    timeZone: "Asia/Kuala_Lumpur",
                  }).format(new Date(hireling.startDate));

                  return (
                    <div
                      key={hireling.fullName}
                      className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
                    >
                      <div className="rounded overflow-hidden shadow-md bg-white">
                        <div className="absolute -mt-20 w-full flex justify-center">
                          <div className="h-32 w-32">
                            <img
                              src={
                                hireling.url
                                  ? hireling.url
                                  : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"
                              }
                              alt={`No Passport Photo of ${hireling.fullName}`}
                              role="img"
                              className="rounded-full object-cover h-full w-full shadow-md"
                            />
                            <button
                              type="submit"
                              onClick={() => {
                                if (
                                  window.confirm(
                                    `Are you sure you want to delete ${hireling.fullName}?`
                                  )
                                ) {
                                  deleteEmployee(hireling.id);
                                }
                              }}
                              className="absolute top-16 right-0 m-2 p-2 cursor-pointer text-gray-500 hover:text-red-500"
                            >
                              X
                            </button>
                          </div>
                        </div>
                        <div className="px-6 mt-16">
                          <h1 className="font-bold text-3xl text-center mb-1">
                            {hireling.fullName}
                          </h1>
                          <p className="text-gray-800 text-sm text-center">
                            {hireling.department}
                          </p>
                          <p className="text-center italic text-gray-600 text-base pt-3 font-normal">
                            An avid open-source developer who loves to be
                            creative and inventive. I have _ year(s) of
                            experience in the field.
                          </p>

                          {/* Read More button  */}
                          {expandedEmployee === hireling.fullName && (
                            <>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b>Employee ID:</b> {hireling.employeeId}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b>Gender:</b> {hireling.gender}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b>Marital Status:</b> {hireling.maritalStatus}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b>Country:</b> {hireling.country}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b>Address:</b> {hireling.address}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> Passport Number:</b> {hireling.passport}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> Birth Date:</b> {formattedBirthDate}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> Email Address:</b> {hireling.emailAddress}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> Phone Number:</b> {hireling.phoneNumber}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> Start Date:</b> {formattedStartDate}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> Epf Number:</b> {hireling.epfNumber}
                              </p>
                              <p className="text-center text-gray-600 text-base pt-3 font-normal">
                                <b> SOCSO Number:</b> {hireling.SOCSO}
                              </p>
                            </>
                          )}
                          <div className="flex justify-center">
                            <button
                              className="bg-indigo-600 px-8 py-2 mt-8 rounded-3xl text-gray-100 font-semibold uppercase tracking-wide"
                              onClick={() => handleReadMoreClick(hireling)}
                            >
                              {expandedEmployee === hireling.fullName
                                ? "Read Less"
                                : "Read More"}
                            </button>
                          </div>

                          <div className="w-full flex justify-center pt-5 pb-5">
                            <a href="javascript:void(0)" className="mx-5">
                              <div aria-label="Github" role="img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-github"
                                >
                                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                                </svg>
                              </div>
                            </a>
                            <a href="javascript:void(0)" className="mx-5">
                              <div aria-label="Twitter" role="img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-twitter"
                                >
                                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                </svg>
                              </div>
                            </a>
                            <a href="javascript:void(0)" className="mx-5">
                              <div aria-label="Instagram" role="img">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="#718096"
                                  stroke-width="1.5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-instagram"
                                >
                                  <rect
                                    x="2"
                                    y="2"
                                    width="20"
                                    height="20"
                                    rx="5"
                                    ry="5"
                                  ></rect>
                                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                  <line
                                    x1="17.5"
                                    y1="6.5"
                                    x2="17.51"
                                    y2="6.5"
                                  ></line>
                                </svg>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </dh-component>
      </div>
    </>
  );
}

export default EmployeesList;
