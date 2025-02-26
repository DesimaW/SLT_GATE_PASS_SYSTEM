import React, { useState } from "react";
import "./../styles/addmoreitem.css";

const GatePassForm: React.FC = () => {
  const [formData, setFormData] = useState({
    serviceNo: "",
    section: "TEST",
    name: "Test Name",
    group: "TEST GROUP",
    designation: "TEST EMP DESIGNATION",
    contactNo: "",
    itemName: "",
    serialNo: "",
    itemCategory: "",
    description: "",
    returnable: "No",
    dueDate: "",
    outLocation: "",
    inLocation: "",
    executiveOfficer: "Mr. Janaka",
    receiverAvailable: "No",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div className="gate-pass-container">
      <h2>SLT GATE PASS</h2>

      <form onSubmit={handleSubmit} className="gate-pass-form">
        {/* Sender Details */}
        <fieldset className="form-section">
          <legend>Sender Details</legend>
          <div className="input-group">
            <label>Service No</label>
            <input type="text" name="serviceNo" value={formData.serviceNo} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Section</label>
            <input type="text" name="section" value={formData.section} disabled />
          </div>
          <div className="input-group">
            <label>Name</label>
            <input type="text" name="name" value={formData.name} disabled />
          </div>
          <div className="input-group">
            <label>Group</label>
            <input type="text" name="group" value={formData.group} disabled />
          </div>
          <div className="input-group">
            <label>Designation</label>
            <input type="text" name="designation" value={formData.designation} disabled />
          </div>
          <div className="input-group">
            <label>Contact No</label>
            <input type="text" name="contactNo" value={formData.contactNo} onChange={handleChange} />
          </div>

          <button type="submit" className="add-btn">Add more Item</button>
        </fieldset>

        {/* Item Details */}
        <fieldset className="form-section">
          <legend>Item Details</legend>
          <div className="input-group">
            <label>Item Name</label>
            <input type="text" name="itemName" value={formData.itemName} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Serial No</label>
            <input type="text" name="serialNo" value={formData.serialNo} onChange={handleChange} />
          </div>
          <div className="input-group">
            <label>Item Category</label>
            <select name="itemCategory" value={formData.itemCategory} onChange={handleChange}>
              <option value="">--- Select Item's Category ---</option>
              <option value="Electronics">Electronics</option>
              <option value="Documents">Documents</option>
            </select>
          </div>
          <div className="input-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
          </div>
          <div className="input-group">
            <label>Photos</label>
            <input type="file" />
          </div>
          <div className="input-group radio-group">
            <label>Returnable</label>
            <input type="radio" name="returnable" value="Yes" checked={formData.returnable === "Yes"} onChange={handleChange} /> Yes
            <input type="radio" name="returnable" value="No" checked={formData.returnable === "No"} onChange={handleChange} /> No
          </div>
          <div className="input-group">
            <label>Due Date</label>
            <input type="date" name="dueDate" value={formData.dueDate} onChange={handleChange} />
          </div>
          
          <div className="button-group">
          <button type="submit" className="add-btn">Add more Item</button>
          <button type="submit" className="remove-btn">Remove</button>
          </div>
        </fieldset>


        {/* Location Details */}
        <fieldset className="form-section">
          <legend>Location Details</legend>
          <div className="input-group">
            <label>Out Location</label>
            <select name="outLocation" value={formData.outLocation} onChange={handleChange}>
              <option value="">--- Select Location ---</option>
            </select>
          </div>
          <div className="input-group">
            <label>In Location</label>
            <select name="inLocation" value={formData.inLocation} onChange={handleChange}>
              <option value="">--- Select Location ---</option>
            </select>
          </div>
          <div className="input-group">
            <label>Select Executive Officer</label>
            <select name="executiveOfficer" value={formData.executiveOfficer} onChange={handleChange}>
              <option value="Mr. Janaka">Mr. Janaka</option>
            </select>
          </div>
        </fieldset>

        {/* Receiver Availability */}
        <fieldset className="form-section">
        <legend>If Receiver available</legend>
        <div className="input-group radio-group">
        
          <input type="radio" name="receiverAvailable" value="Yes" checked={formData.receiverAvailable === "Yes"} onChange={handleChange} /> Yes
          <input type="radio" name="receiverAvailable" value="No" checked={formData.receiverAvailable === "No"} onChange={handleChange} /> No
        </div>
        </fieldset>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default GatePassForm;
