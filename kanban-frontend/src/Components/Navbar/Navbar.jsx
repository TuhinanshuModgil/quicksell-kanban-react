import React, { useState, useRef, useEffect } from "react";
import icon from "../../Assets/icons_FEtask/Display.svg";
const Navbar = ({ grouping, setGrouping, ordering, setOrdering, call }) => {
  const [isOpen, setIsOpen] = useState(false);

  // reference to the dom element of dropdown container
  const dropdownRef = useRef(null);

  // update local storage and prop when grouping changes
  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    setGrouping(grouping);
  }, [grouping]);

  // update local storage and prop when ordering changes
  useEffect(() => {
    localStorage.setItem("ordering", ordering);
    setOrdering(ordering);
  }, [ordering]);

  // Handlers for grouping and ordering
  const handleGrouping = (event) => {
    const newValue = event.target.value;
    localStorage.setItem("grouping", newValue);
    setGrouping(newValue);
  };

  const handleOrdering = (event) => {
    const newValue = event.target.value;
    localStorage.setItem("ordering", newValue);
    setOrdering(newValue);
  };

  // logic to close dropdown if we click any where outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="Navbar">
      <div className="dropdown-container" ref={dropdownRef}>
        <button onClick={() => setIsOpen(!isOpen)} className="dropdown-btn">
          <img src={icon} alt="display option icon"/>
          <div className="btn-txt">Display</div>
          <i className="bx bx-chevron-down"></i>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="Grouping">
              <label>Grouping</label>
              {/* Would have created a cutom select component in real development env (but I am short on time :) */}
              <select value={grouping} onChange={handleGrouping}>
                <option value="status">Status</option>
                <option value="users">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="Ordering">
              <label>Ordering</label>
              <select value={ordering} onChange={handleOrdering}>
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
