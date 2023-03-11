import Category from "../Components/Category/Category";
import Login from "../Components/Login/Login";
import Medicine from "../Components/Medicine/Medicine";
import Patient from "../Components/Patient/Patient";
import QrMedicine from "../Components/QRMedicine/QRMedicine";

export const loginRoutes = [
  {
    component: <Login />,
    path: "",
  },
  {
    component: <QrMedicine />,
    path: "medicinedetails",
  },
];

export const adminRoutes = [
  {
    component: <Patient />,
    title: "Patient",
    path: "patient",
  },
  {
    component: <Medicine />,
    title: "Medicine",
    path: "medicine",
  },
  {
    component: <Category />,
    title: "Category",
    path: "category",
  },
];
