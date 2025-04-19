import React from "react";

const Profile = () => {
  const name = localStorage.getItem("name");
  const email = localStorage.getItem("email");

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4 fw-bold">👤 User Dashboard</h1>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-lg rounded-4">
            <div className="card-header bg-primary text-white rounded-top-4">
              <h4 className="mb-0">Profile Information</h4>
            </div>
            <div className="card-body">
              <div className="mb-3">
                <label className="form-label fw-semibold">Name</label>
                <div className="form-control bg-light">
                  {name ? name : "No name provided"}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>
                <div className="form-control bg-light">
                  {email ? email : "No email provided"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
