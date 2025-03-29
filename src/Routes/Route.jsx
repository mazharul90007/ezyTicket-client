import { createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Events from "../Pages/Events/Events";
import Travel from "../Pages/Travel/Travel";
import Entertainment from "../Pages/Entertainment/Entertainment";
import Error from "../Pages/Error/Error";
import LoginPage from "../Pages/Authentication/LoginPage";
import RegisterPage from "../Pages/Authentication/RegisterPage";
import EventDetails from "./../Pages/Events/EventDetails/EventDetails";
import Pricing from "../Pages/Pricing/Pricing";
import Profile from "../Pages/Profile/Profile";
import BusReservationPage from "../Pages/Travel/TravelServiceSeciton/BusReservationPage";
import TravelBusTicketPage from "../Pages/Travel/TravelTicekBook/TravelBusTicketPage";
import BusTicketCancellation from "../components/BusTicketCancellation";
import AllEvents from "../Pages/Events/AllEvents/AllEvents";
import MyWishList from "../Pages/MyWishList/MyWishList";
import Contact from "../Pages/Contact/Contact";
import AllMovie from "../Pages/Entertainment/AllMovie/AllMovies";
import MovieDetails from "../Pages/Entertainment/MovieDetails/MovieDetails";
import Dashboard from "../Layout/dashboard";
import TravelSelectSet from "../Pages/Travel/TravelTicekBook/TravelSelectSet";
import AddEvents from "../Pages/Dashboard/Events/AddEvents/AddEvents";
import ManageEvents from "../Pages/Dashboard/Events/ManageEvents/ManageEvents";

const Route = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/login",
        element: <LoginPage></LoginPage>,
      },
      {
        path: "/register",
        element: <RegisterPage></RegisterPage>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      // --------------Travel route start----------
      {
        path: "/travel",
        element: <Travel />,
      },
      {
        path: "/travel/bus-ticket-book",
        element: <TravelBusTicketPage />,
      },
      {
        path: "/travel/bus-reservation",
        element: <BusReservationPage />,
      },
      {
        path: "/travel/bus-set",
        element: <TravelSelectSet />,
      },
      {
        path: "/travel/Bus-Ticket-Cancellation-policy",
        element: <BusTicketCancellation />,
      },
      // ------------travel route end-------------

      //-------------Events route start-----------
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/eventdetailspublic/:eventId",
        element: <EventDetails></EventDetails>,
      },
      {
        path: "/allevents",
        element: <AllEvents></AllEvents>,
      },

      //-------------event route end---------------
      {
        path: "/entertainment",
        element: <Entertainment></Entertainment>,
      },
      //my wishlists
      {
        path: "/mywishlist",
        element: <MyWishList></MyWishList>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path:"/contact",
        element:<Contact></Contact>
      },
      
      {
          path:"/entertainment/allmovies",
          element:<AllMovie></AllMovie>
      },
      {
        path:`/entertainment/allmovies/:id`,
        element:<MovieDetails></MovieDetails>

      }
      
    ],
  },
  {
    path: '/dashboard',
    element: <Dashboard></Dashboard>,
    errorElement: <Error></Error>,
      children: [
        {
          path: 'userProfile',
          element: <Profile></Profile>

        },
        // ------------Events route start----------
        {
          path: 'addEvent',
          element: <AddEvents></AddEvents>
        },
        {
          path: 'manageEvents',
          element: <ManageEvents></ManageEvents>
        }
        // -----------Events route ends------------
      ]
  }
]);

export default Route;
