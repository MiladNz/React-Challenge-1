import { useState } from "react";
import { Cog8ToothIcon } from "@heroicons/react/24/outline";

function LoadData({ projects }) {
  const [sortBy, setSortBy] = useState("default");
  const [status, setStatus] = useState("all");
  const [filter, setFilter] = useState("all");

  return (
    <div className="container w-full m-auto">
      <div className="flex justify-between items-center mb-10 ">
        <h1 className="text-gray-800 font-semibold text-lg">لیست پروژه ها</h1>
        <div className="flex items-center gap-x-4">
          <ProjectStaus setStatus={setStatus} />
          <SortProjectsByDate
            sortBy={sortBy}
            projects={projects}
            onSort={(e) => setSortBy(e.target.value)}
          />
          <FilterProjectsByCategory
            filter={filter}
            setFilter={setFilter}
            onFilter={(e) => setFilter(e.target.value)}
          />
        </div>
      </div>
      <DisplayData
        projects={projects}
        sortBy={sortBy}
        status={status}
        filter={filter}
      />
    </div>
  );
}

export default LoadData;

function ProjectStaus({ setStatus }) {
  const [selectedStatus, setSelectedStatus] = useState(1);
  const selectedStatusStyle =
    "bg-btn_color text-white text-sm w-full px-4 py-1 rounded-lg flex justify-center";
  const tabStyle =
    "w-full text-sm px-4 py-1 text-gray-800 rounded-lg flex justify-center";
  return (
    <div className="flex items-center gap-x-2">
      <p className="text-sm">وضعیت</p>
      <div className="max-w-md flex flex-col gap-y-2 w-full">
        <div className="bg-white p-1 max-w-md rounded-xl gap-x-2 flex justify-around items-center font-semibold text-white">
          <button
            onClick={() => {
              setStatus("all"), setSelectedStatus(1);
            }}
            className={selectedStatus === 1 ? selectedStatusStyle : tabStyle}>
            همه
          </button>
          <button
            onClick={() => {
              setStatus("OPEN"), setSelectedStatus(2);
            }}
            className={selectedStatus === 2 ? selectedStatusStyle : tabStyle}>
            باز
          </button>
          <button
            onClick={() => {
              setStatus("CLOSED"), setSelectedStatus(3);
            }}
            className={selectedStatus === 3 ? selectedStatusStyle : tabStyle}>
            بسته
          </button>
        </div>
      </div>
    </div>
  );
}

function SortProjectsByDate({ sortBy, onSort }) {
  return (
    <select
      value={sortBy}
      onChange={onSort}
      className="bg-white py-1 px-2 border-none rounded-md selection:border-none text-sm">
      <option value="default">مرتب سازی</option>
      <option value="latest">مرتب سازی (جدیدترین)</option>
      <option value="earliest">مرتب سازی (قدیمی ترین)</option>
    </select>
  );
}

function FilterProjectsByCategory({ filter, setFilter, onFilter }) {
  return (
    <select
      value={filter}
      onChange={onFilter}
      className="bg-white py-1 px-2 border-none rounded-md selection:border-none text-sm">
      <option value="all" onClick={() => setFilter("all")}>
        دسته بندی (همه)
      </option>
      <option
        value="web development"
        onClick={() => setFilter("web development")}>
        برنامه نویسی وب
      </option>
      <option value="design-ui/ux" onClick={() => setFilter("design-ui/ux")}>
        طراحی UI/UX
      </option>
    </select>
  );
}

function DisplayData({ projects, sortBy, status, filter }) {
  //filter by status
  let filteredProjectsByStatus;
  if (status === "OPEN") {
    filteredProjectsByStatus = [...projects].filter(
      (item) => item.status === "OPEN"
    );
  } else if (status === "CLOSED") {
    filteredProjectsByStatus = [...projects].filter(
      (item) => item.status === "CLOSED"
    );
  } else {
    filteredProjectsByStatus = projects;
  }
  // filter by category
  let filteredProjectsByCategory;
  if (filter === "web development") {
    filteredProjectsByCategory = [...filteredProjectsByStatus].filter(
      (item) => item.englishTitle === "web development"
    );
  } else if (filter === "design-ui/ux") {
    filteredProjectsByCategory = [...filteredProjectsByStatus].filter(
      (item) => item.englishTitle === "design-ui/ux"
    );
  } else {
    filteredProjectsByCategory = filteredProjectsByStatus;
  }
  // sort projects
  let sortedProjects;
  if (sortBy === "latest") {
    sortedProjects = [...filteredProjectsByCategory].sort(
      (a, b) => new Date(b.deadline) - new Date(a.deadline)
    );
  } else if (sortBy === "earliest") {
    sortedProjects = [...filteredProjectsByCategory].sort(
      (a, b) => new Date(a.deadline) - new Date(b.deadline)
    );
  } else if (sortBy === "default") {
    sortedProjects = filteredProjectsByCategory;
  }

  return (
    <div className="flex flex-col">
      <table className="border-collapse shadow-md">
        <thead className="text-slate-800">
          <tr className="border-b-2">
            <th className="p-1">#</th>
            <th className="p-1">عنوان پروژه</th>
            <th className="p-1">بودجه</th>
            <th className="p-1">ددلاین</th>
            <th className="p-1">وضعیت</th>
            <th className="p-1">عملیات</th>
          </tr>
        </thead>
        <tbody>
          {sortedProjects.map((pr, index) => (
            <tr className="border-b-2 gap-2 " key={pr._id}>
              <td className="bg-white p-2  ">{index + 1}</td>
              <td className="bg-white p-2 font-semibold ">{pr.title}</td>
              <td className="bg-white p-2  ">
                {pr.budget} {"تومان"}
              </td>
              <td className="bg-white p-2 ">
                {new Date(pr.deadline).toLocaleDateString("fa")}
              </td>
              <td
                className={`px-0.5 py-1 h-3 w-3 rounded-md font-medium  ${
                  pr.status === "OPEN"
                    ? "bg-btn_color text-white"
                    : "bg-slate-400 text-white"
                }`}>
                {pr.status === "OPEN" ? "باز" : "بسته"}
              </td>
              <td className="bg-white p-2 ">
                <Cog8ToothIcon className="w-6 h-6 text-btn_color bg-white flex justify-center mx-auto cursor-pointer " />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
