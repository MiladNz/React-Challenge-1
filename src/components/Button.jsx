function Button({ setShowBtn }) {
  const handleBtnClick = () => setShowBtn((showBtn) => !showBtn);
  return (
    <div>
      <div className="text-right m-10">
        <h1 className="text-3xl font-bold text-gray-500">لیست پروژه ها</h1>
      </div>
      <div className="mt-14">
        <button
          className="py-5 px-10 bg-btn_color text-white font-semibold rounded-lg"
          onClick={handleBtnClick}>
          نشان دادن پروژه ها
        </button>
      </div>
    </div>
  );
}

export default Button;
