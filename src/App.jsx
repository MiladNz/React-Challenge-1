import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import LoadData from "./components/LoadData";

const projects = [
  {
    _id: 1,
    title: "طراحی اپلیکیشن سفر آنلاین",
    description: "طراحی رابط کاربری و تجربه کاربری اپلیکیشن سفر آنلاین",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: "۱۴۸,۰۰۰,۰۰۰",
    tags: ["Ui/UX", "Figma"],
    deadline: "2023-12-23T12:55:48.740Z",
    createdAt: "2023-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 2,
    title: "توسعه سایت فروشگاهی",
    description: "یک سایت فروشگاهی کامل با پنل ادمین",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: "۹۸,۰۰۰,۰۰۰",
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2024-12-23T12:55:48.740Z",
    createdAt: "2024-10-23T18:18:55.636Z",
    updatedAt: "2024-06-02T13:37:48.468Z",
  },
  {
    _id: 3,
    title: "توسعه سایت سازمانی",
    description: " توسعه یک سایت سازمانی",
    status: "OPEN",
    category: {
      id: 2,
      title: "برنامه نویسی وب",
      englishTitle: "web development",
    },
    budget: "۶۳,۰۰۰,۰۰۰",
    tags: ["React", "Nodejs", "online shop"],
    deadline: "2023-10-23T12:55:48.740Z",
    createdAt: "2022-08-23T18:18:55.636Z",
    updatedAt: "2024-07-02T13:37:48.468Z",
  },
  {
    _id: 4,
    title: "طراحی اپلیکیشن موبایل",
    description: " طراحی اپلیکیشن موبایل",
    status: "CLOSED",
    category: {
      id: 1,
      title: "طراحی UI/UX",
      englishTitle: "design-ui/ux",
    },
    budget: "۴۷,۰۰۰,۰۰۰",
    tags: ["Ui/UX", "Figma"],
    deadline: "2021-10-23T12:55:48.740Z",
    createdAt: "2022-04-23T18:18:55.636Z",
    updatedAt: "2024-09-02T13:37:48.468Z",
  },
  //  خودتون میتونید دیتاهای دیگه رو اضافه کنید.
];

function App() {
  const [showData, setShowData] = useState(false);
  return (
    <div className="container mx-auto w-full max-w-screen-lg ">
      {showData ? (
        <LoadData projects={projects} />
      ) : (
        <Button setShowData={setShowData} />
      )}
    </div>
  );
}

export default App;
