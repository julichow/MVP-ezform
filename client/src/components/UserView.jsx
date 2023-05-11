import React, { useState } from 'react';

function UserView() {
  return (
    <div>
         <h1>Employment Form</h1>
      <h3>Employee Information</h3>
      <div>
      <label>First Name:<input 
        type="text"
        ></input>
      </label>
      <label>Employee ID:<input 
        type="text"
        ></input>
        </label>
      </div>
      <div>
      <label>Country:
      <input type="text"
        ></input>
      </label>
      <label>Passport:
      <input type="text"
        ></input>
        </label>
      </div>
      <div>
      <label>Address:
      <input type="text"
        ></input>
        </label>
      </div>
      <div>
      <label>Phone Number:
      <input type="text"
        ></input>
      </label>
      <label>Birth Date:
      <input type="text"
        ></input>
        </label>
        </div>
      <label> Email Address:
      <input type="text"
        ></input>
      </label>
      <label>Marital Status:
      <input type="text"
        ></input>
      </label>

      <h3>Work Information</h3>
      <div>
      <label>Start Date:
      <input type="text"
        ></input>
      </label>
      <label>Epf Number:
      <input 
        type="text"
        ></input>
        </label>
      </div>
      <div>
      <label>Department:
      <input type="text"
        ></input>
      </label>
      <label>SOCSO:
      <input type="text"
        ></input>
        </label>
        </div>
      <label>
        Please share URL copy of your passport photo:
      <input 
        type="text"
        ></input>
      </label>
      <div>
      <button>Save</button>
      </div>
      </div>
  );
};

export default UserView;