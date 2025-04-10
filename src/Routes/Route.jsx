import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
import BusReservationPage from "../Pages/Travel/TravelServiceSeciton/BusReservationPage";
import TravelBusTicketPage from "../Pages/Travel/TravelTicekBook/TravelBusTicketPage";
import BusTicketCancellation from "../components/BusTicketCancellation";
import AllEvents from "../Pages/Events/AllEvents/AllEvents";
import MyWishList from "../Pages/MyWishList/MyWishList";
import Contact from "../Pages/Contact/Contact";
import AllMovie from "../Pages/Entertainment/AllMovie/AllMovies";
import Dashboard from "../Layout/dashboard";
import TravelSelectSet from "../Pages/Travel/TravelTicekBook/TravelSelectSet";
import AddEvents from "../Pages/Dashboard/Events/AddEvents/AddEvents";
import PrivateRoute from "./PrivateRoute";
import ManageEvents from "../Pages/Dashboard/Admin/ManageEvents/ManageEvents";
import MyAddedEvents from "../Pages/Dashboard/Admin/MyAddedEvents/MyAddedEvents";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import Profile from "../Pages/Dashboard/Profile/Profile";
import ManageEventReview from "../Pages/Dashboard/Events/ManageEventReviews/ManageEventReview";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess";
import PaymentFail from "../Pages/PaymentFail/PaymentFail";
import AddCineplex from "../Pages/Dashboard/Entertainment/AddCineplex/AddCineplex";
import SoldedCineTicket from "../Pages/Dashboard/Entertainment/SoldedCineTicket/SoldedCineTicket";
import ManageCineplex from "../Pages/Dashboard/Entertainment/ManageCineplex/ManageCineplex";
import AddMovie from "../Pages/Dashboard/Entertainment/AddMovie/AddMovie";
import MovieManager from "../Pages/Dashboard/Entertainment/MovieManager/MovieManager";
import MovieDetails from "../Pages/Dashboard/Entertainment/MovieManager/MovieDetails/MovieDetails";
import MovieDetailsPage from "../Pages/Entertainment/MovieDetails/MovieDetailsPage";
import AddBusService from "../Pages/Dashboard/Travel/AddBusService/AddBusService";
import ManageReviews from "../Pages/Dashboard/Travel/ManageReviews/ManageReviews";
import MyBusServices from "../Pages/Dashboard/Travel/MyBusServices/MyBusServices";


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
        path: "/payment/success/:tran_id",
        element: <PaymentSuccess></PaymentSuccess>,
      },
      {
        path: "/payment/fail/:tran_id",
        element: <PaymentFail></PaymentFail>,
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
        path: "/travel/bus-set/:id",
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
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/entertainment/allmovies",
        element: <AllMovie></AllMovie>,
      },
      {
        path: `/entertainment/allmovies/:id`,
        element: <MovieDetailsPage></MovieDetailsPage>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    errorElement: <Error></Error>,
    children: [
      // ---------Users route start ------------
      {
        path: "profile",
        element: <Profile></Profile>,
      },
      {
        path: "manageUsers",
        element: <ManageUsers></ManageUsers>,
      },

      // ------------Events route start----------

      {
        path: "addEvent",
        element: <AddEvents></AddEvents>,
      },
      {
        path: "manageEventReview",
        element: <ManageEventReview></ManageEventReview>,
      },
      {
        path: "manageEvents",
        element: <ManageEvents></ManageEvents>,
      },
      {
        path: "myAddedEvents",
        element: <MyAddedEvents></MyAddedEvents>,
      },
      // -----------Events route ends------------


      // -----------Entertaiment route start------------
      {
        path:'addcineplex',
        element:<AddCineplex></AddCineplex>
      },
      {
        path:'addmovie',
        element:<AddMovie></AddMovie>

      },
      {
        path:'managecineplex',
        element:<ManageCineplex></ManageCineplex>
      },
      {
        path:'ticketcineplex',
        element:<SoldedCineTicket></SoldedCineTicket>
      },
      {
        path:'managemovie',
        element:<MovieManager></MovieManager>
      },
      {
        path:'managemovie/moviedetails/:id',
        element:<MovieDetails></MovieDetails> 
        
      },
      //add bus service page, review manage, added by susanto
      {
        path: 'add-bus-service',
        element: <AddBusService> </AddBusService>
      },
      {
        path: 'manageReview',
        element: <ManageReviews> </ManageReviews>
      },
      {
        path: 'MyBusServices',
        element: <MyBusServices> </MyBusServices>
      }
    ],
  },
]);

export default Route;
