const Spinner = () => {
  return (
    <div className=" flex justify-center items-center">
      <svg className="spinner-ring" viewBox="25 25 50 50" strokeWidth="5">
        <circle cx="50" cy="50" r="20" />
      </svg>
    </div>
  );
};

export default Spinner;
