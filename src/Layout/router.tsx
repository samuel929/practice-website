import { createBrowserRouter } from "react-router-dom";
import People from "../Pages/People/People";
import Layout from "./Layout";
import Person from "../Pages/Person/Person";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PracticeAreas from "../Pages/PracticeAreas/PracticeAreas";
import About from "../Pages/About/About";
import AwardRanking from "../Pages/AwardRanking/AwardRanking";
import CorporateSocialInvestment from "../Pages/CorporateSocialInvestment/CorporateSocialInvestment";
import OurHeritage from "../Pages/OurHeritage/OurHeritage";
import CareerAdvancement from "../Pages/CareerAdvancement/CareerAdvancement";
import IpAfrica from "../Pages/IPAfrica/IpAfrica";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "people",
        element: <People />,
      },
      {
        path: "person/:id",
        element: <Person />,
      },
      {
        path: "practice",
        element: <PracticeAreas />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "about/awardRanking",
        element: <AwardRanking />,
      },
      {
        path: "about/CorporateSocialInvestment",
        element: <CorporateSocialInvestment />,
      },
      {
        path: "about/CorporateSocialInvestment/CareerAdvancements",
        element: <CareerAdvancement />,
      },
      {
        path: "about/OurHeritage",
        element: <OurHeritage />,
      },
      {
        path: "ip-Africa",
        element: <IpAfrica />,
      },
    ],
  },
]);
