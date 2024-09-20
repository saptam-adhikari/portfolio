import React from "react";
import Youtube from "../../public/youtube.png";
import weather from "../../public/weatherapp.png";
import zomato from "../../public/zomato.png";
import w3school from "../../public/w3school.png";
import consultingsite from "../../public/consultingsite.png";
import fakestore from "../../public/fakestore.png";
// import Calculator from "../../public/calculator.png"


function PortFolio() {
  const cardItem = [
    { id: 1, logo: zomato, name: "zomato Clone" },
    { id: 2, logo: w3school, name: "w3School Clone" },
    { id: 3, logo: consultingsite, name: "Consulting Site" },
    { id: 4, logo: fakestore, name: "Fake Store" },
    { id: 5, logo: weather, name: "Weather App" },
    { id: 6, logo: Youtube, name: "Youtube Clone" },
    // { id: 7, logo: Calculator, name: "Calculator" },
  ];

  // Function to get description based on id
  const getDescription = (id) => {
    switch (id) {
      case 1:
        return "A food delivery clone of Zomato built using React.";
      case 2:
        return "A code learning clone of w3School built using React.";
      case 3:
        return "A Consulting site clone built using React.";
      case 4:
        return "A Fake Store site built using React";
      case 5:
        return "A Weather App built using React";
      case 6:
        return "A Youtube Clone built using JavaScript";
      // case 7:
      //   return "A Calculator built using JavaScript";
      default:
        return "Project description goes here.";
    }
  };

  // Function to get source code link based on id
  const getSourceCodeLink = (id) => {
    switch (id) {
      case 1:
        return "https://github.com/saptam-adhikari/Zomato_clone.git";
      case 2:
        return "https://github.com/saptam-adhikari/w3school.git";
      case 3:
        return "https://github.com/saptam-adhikari/consulting_site.git";
      case 4:
        return "https://github.com/saptam-adhikari/Fake_Store.git";
      case 5:
        return "https://github.com/saptam-adhikari/weather_info.git";
      case 6:
        return "https://github.com/saptam-adhikari/Youtube_clone_saptam.git";
      default:
        return "#";
    }
  };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt={name}
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">{getDescription(id)}</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button> */}
                <a
                  href={getSourceCodeLink(id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Source code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
