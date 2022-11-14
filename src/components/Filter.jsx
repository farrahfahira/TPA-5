function Filter() {
  return (
    <div className="Filter">
      <div className="filter-by">
        <button value="All">All</button>
      </div>
      <div className="filter-by">
        <button value="Active">Active</button>
      </div>
      <div className="filter-by">
        <button value="Completed">Completed</button>
      </div>
    </div>
  );
}

export default Filter;
