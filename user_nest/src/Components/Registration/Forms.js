import React, { useState } from "react";

export default function Forms({ addUser }) {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.age ||
      !formData.email ||
      !formData.contact
    ) {
      alert("All fields are required. Please fill in all fields.");
      return;
    }
    addUser(formData);
    alert(`New user ${formData.name} added successfully!`);
    setFormData({ name: "", age: "", email: "", contact: "" });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            placeholder="Enter Age"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email@example.com"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="contact" className="form-label">
            Contact
          </label>
          <input
            type="tel"
            className="form-control"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            placeholder="+91"
          />
          <div className="form-text">Enter +91 indian cell only</div>
        </div>
        <div className="d-grid gap-1 col-3 mx-auto">
          <button className="btn btn-primary" type="submit">
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
