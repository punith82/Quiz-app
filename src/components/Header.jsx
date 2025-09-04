import { NavLink } from "react-router-dom";
function Header() {
  return (
    <header className="flex flex-col items-center p-4 bg-slate-800 text-white shadow-l md:text-center sm:text-center lg:text-center">
      <h1 className="text-3xl font-bold mb-5 mt-10">
        Test your knowledge in CS subjects 🚀
      </h1>
      <NavLink
        to="/categories"
        className="inline-block text-2xl font-semibold mt-8 mb-6 text-white 
               bg-slate-700 px-6 py-2 rounded-full shadow-lg"
      >
        📚 Pick a Module
      </NavLink>
    </header>
  );
}

export default Header;
