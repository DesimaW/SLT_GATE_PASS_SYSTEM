import { useState } from "react";
import "./../styles/adminform.css";

const AdminForm = () => {
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ location, category, file });
  };

  return (
    <div className="admin-container">
      <h2>Admin</h2>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            placeholder="Enter Location Here"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Item Category</label>
          <input
            type="text"
            placeholder="Enter Item Category Here"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
        <div className="form-group file-upload">
          <label>CSV file Upload</label>
          <input
            type="file"
            accept=".csv"
            onChange={(e) => setFile(e.target.files?.[0] || null)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminForm;