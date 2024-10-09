import React, { useState, useRef, useEffect } from "react";
import icon from '../../Assets/icons_FEtask/Display.svg'
const Navbar = ({ grouping, setGrouping, ordering, setOrdering, call }) => {
  const [isOpen, setIsOpen] = useState(false);
  // reference to the dom element of dropdown container
  const dropdownRef = useRef(null);

  // setting the inital state of grouping and ordering based on local storage value or default values


  useEffect(() => {
    localStorage.setItem("grouping", grouping);
    setGrouping(grouping);
  }, [grouping]);

  useEffect(() => {
    localStorage.setItem("ordering", ordering);
    setOrdering(ordering);
  }, [ordering]);

  // Handlers
  const handleGrouping = (event) => {
    const newValue = event.target.value;
    localStorage.setItem("grouping", newValue);
    setGrouping(newValue);
    // if (newValue === "users") {
    //   call();
    // }
  };

  const handleOrdering = (event) => {
    const newValue = event.target.value;
    localStorage.setItem("ordering", newValue);
    setOrdering(newValue);
  };

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
          <img src={icon}/> 
          <div className="btn-txt">Display</div>
          <i className="bx bx-chevron-down"></i>
        </button>
        {isOpen && (
          <div className="dropdown-content">
            <div className="Grouping">
              <label>Grouping</label>
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
