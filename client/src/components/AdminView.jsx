import { useState } from "react";

function AdminView({ employeesList, deleteEmployee }) {
  const [query, setQuery] = useState("");

  const filteredEmployees = employeesList.filter((employee) => {
    // Assuming employee.fullName is the property you want to filter on
    const fullName = employee.fullName || "";
    return fullName.toLowerCase().includes(query.toLowerCase());
  });
 
  return (
    <>
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      type="search"
      placeholder="Search by name"
    />
    <div className="container-fluid">
      <h3 className="text-dark mt-4 mb-4">List of Ezform Employees</h3>
      <div className="row">
        {filteredEmployees.map((hireling) => (
          <div className="col-lg-2 col-md-4 col-sm-6 mb-4" key={hireling.fullName}>
            <div className="card">
              {/* Display image source */}
              <div className="card-image">
                <img
                  src={hireling.url ? hireling.url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSGzFXWLmEJOIJINzoqCxDsQ5UvK2CSq7KRsT0K3fX6qlSxfFPy2Yf1OI48nFWtECrJbM&usqp=CAU"}
                  alt="No Passport Photo"
                  className="card-image__img"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">{hireling.fullName}</h5>
                <div className="text-left">
                  <p className="card-text">Employee ID: {hireling.employeeId}</p>
                  <p className="card-text">Gender: {hireling.gender}</p>
                  <p className="card-text">Marital Status: {hireling.maritalStatus}</p>
                  <p className="card-text">Country: {hireling.country}</p>
                  <p className="card-text">Address: {hireling.address}</p>
                  <p className="card-text">Passport Number: {hireling.passport}</p>
                  <p className="card-text">Birth Date: {hireling.BirthDate}</p>
                  <p className="card-text">Email Address: {hireling.emailAddress}</p>
                  <p className="card-text">Phone Number: {hireling.phoneNumber}</p>
                  <p className="card-text">Department: {hireling.department}</p>
                  <p className="card-text">Employee Start Date: {hireling.startDate}</p>
                  <p className="card-text">EPF Number: {hireling.epfNumber}</p>
                  <p className="card-text">SOCSO number: {hireling.SOCSO}</p>
                </div>
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
                  >
                    Delete
                  </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
      </>
  );
}

export default AdminView;