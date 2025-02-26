import "./../styles/itemtrackerdetails.css";
import { useNavigate } from "react-router-dom";
//import sampleImage from "./../assets/sample-image.jpg"; // Replace with actual image

const ItemTrackerDetails = () => {

    const navigate = useNavigate();

  return (
    <div className="tracker-container">
      <h2>Item Tracker</h2>

      {/* Reference Number Bar */}
      <div className="ref-bar">
        <span className="item-details-tab">Item Details</span>
        <span className="ref-number">Ref.No :- 342435</span>
      </div>

      {/* Item Details Section */}
      <div className="item-details">
        {/* Item Details Section */}
      <div className="item-info">
        <ul className="item-list">
           <li><strong>Item Name:</strong> Laptop</li>
           <li><strong>Serial No:</strong> 34235</li>
           <li><strong>Returnable:</strong> No</li>
           <li><strong>Due Date:</strong> 03.05.2023</li>
        </ul>
      </div>



        {/* Image and View Photo Button */}
        <div className="item-image">
        <img src="/images/lap.jpg" alt="Laptop" />
          <button className="view-photo">View Photo</button>
        </div>
      </div>

      {/* Responsible Person Section */}
      <div className="ref-bar">
        <span className="item-details-tab">Responsible Person</span>
      </div>

      <div className="responsible-person">
        <p> <strong>Name</strong> :- Ruwan </p>
        <p> <strong>Service No</strong> :- 34235 </p>
        <p> <strong>Section</strong> :- IT </p>
      </div>

      {/* Back Button */}
      <a href="#" className="back-link" onClick={() => navigate(-1)}>← Back</a>
    </div>
  );
};

export default ItemTrackerDetails;