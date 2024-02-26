const Navbar = () => {
  return (
    <nav className=" flex items-center justify-around">
      <div className="relative flex items-center ">
        <img
          src="/image/CMGFS.png"
          alt="Left Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <img
          src="/image/mmcc.png"
          alt="Left Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <img
          src="/image/sc.png"
          alt="Left Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
      </div>
      <h1 className="absolute text-2xl font-customFont text-customDarkBlue">
        Akhil Marni
      </h1>
      <div className="flex items-center">
        <img
          src="/image/sc.png"
          alt="Right Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <img
          src="/image/mmcc.png"
          alt="Right Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
        <img
          src="/image/CMGFS.png"
          alt="Right Logo"
          width={300}
          height={300}
          className="w-10 h-10 mr-1 md:w-14 md:h-14 md:mr-2"
        />
      </div>
    </nav>
  );
};

export default Navbar;
