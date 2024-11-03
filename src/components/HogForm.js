import React, { useState } from "react";

function HogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    greased: false,
    weight: '',
    medal: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddHog(formData);
    setFormData({
      name: '',
      specialty: '',
      greased: false,
      weight: '',
      medal: '',
      image: ''
    });
  };

  return (
    
    <form className="ui form" onSubmit={handleSubmit}>
      <h1 className="title">WELCOME TO HOGWILD</h1>
      <div className="field">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          type="text"
          name="specialty"
          placeholder="Specialty"
          value={formData.specialty}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          type="number"
          name="weight"
          placeholder="Weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          type="text"
          name="medal"
          placeholder="Highest Medal Achieved"
          value={formData.medal}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
      </div>
      <div className="field">
        <label>
          Greased:
          <input
            type="checkbox"
            name="greased"
            checked={formData.greased}
            onChange={handleChange}
          />
        </label>
      </div>
      <button className="ui button" type="submit">Add Hog</button>
      
    </form>
  );
}

export default HogForm;