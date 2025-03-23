import useAuth from "../../Hooks/useAuth";

const MyWishList = () => {
  const { darkMode } = useAuth();
  return (
    <div
      className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} `}
    >
      <h1 className="mt-20">this is wishlists</h1>
    </div>
  );
};

export default MyWishList;
