import React from "react";
import gamdom from "./gamdomlogo.png";
import stake from "./stakelogo.png";
import csgo from "./cslogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as faSolidStar,
  faStarHalfAlt,
  faGift,
  faBook,
  faMoneyBillTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons"; // Import regular star for outlined star

function Showcase() {
  return (
    <div className="mb-8 font-suse">
      {/* Heading for Trusted Casinos */}
      <h2 className="text-base font-extrabold text-white mb-4 uppercase tracking-wide">
CASINO REVIEWS
      </h2>

      {/* Grid of Showcase Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Gamdom Widget */}
        <div className="relative bg-gradient-to-br from-gamdomGrey to bg-gamdomGreen text-white pt-20 rounded-lg shadow-lg hover:opacity-95 hover:cursor-pointer transition duration-200">
          {/* Inner Widget */}
          <div className="bg-navBg w-full h-full rounded-lg pt-12 pb-0 relative">
            {/* Profile Picture */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-navBg rounded-full drop-shadow-xl">
              <img
                src={gamdom}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Content */}
            <div className="text-center text-white mb-10 mx-8 lg:mx-10 3xl:mx-20 mt-4">
              <p className="text-3xl tracking-wide text-gGreen font-bold text-glow">
                4.5/5
              </p>
              <h3 className="text-xl font-bold m-2">GAMDOM.COM</h3>

              {/* 4.5 Stars with green glow shadow */}
              <div className="flex justify-center items-center space-x-1 m-2">
                <FontAwesomeIcon icon={faSolidStar} className="text-gGreen" />
                <FontAwesomeIcon icon={faSolidStar} className="text-gGreen" />
                <FontAwesomeIcon icon={faSolidStar} className="text-gGreen" />
                <FontAwesomeIcon icon={faSolidStar} className="text-gGreen" />
                <FontAwesomeIcon icon={faStarHalfAlt} className="text-gGreen" />
              </div>

              <div className="flex flex-col mt-4 space-y-3">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faSolidStar}
                    className="text-white mr-2"
                  />
                  <p className="text-lg font-semibold">Stat 1</p>
                </div>
                <div className="border-t border-gGreen w-full"></div>
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faSolidStar}
                    className="text-white mr-2"
                  />
                  <p className="text-lg font-semibold">Stat 2</p>
                </div>
                <div className="border-t border-gGreen w-full"></div>
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillTrendUp}
                    className="text-white mr-2"
                  />
                  <p className="text-base font-semibold">10% DEPOSIT BONUS</p>
                </div>
              </div>

              {/* Two Buttons: Read Review and Get Bonus */}
              <div className="flex justify-between space-x-2 mt-6 text-sm 2xl:text-base">
                {/* Read Review Button */}
                <div className="relative w-1/2">
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-green-600 rounded-lg"></div>
                  <button className="relative w-full py-2 bg-navBg text-white  font-bold border-2 border-gGreen rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    Read Review
                  </button>
                </div>

                {/* Get Bonus Button */}
                <div className="relative w-1/2">
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-green-600 rounded-lg"></div>
                  <button className="relative w-full py-2 bg-gGreen text-white  font-bold border-2 border-gGreen rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faGift} className="mr-2" />
                    Get Bonus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stake Widget */}
        <div className="relative bg-gradient-to-br from-gamdomGrey to bg-stakeDark text-white pt-20 rounded-lg shadow-lg hover:opacity-95 hover:cursor-pointer transition duration-200">
          <div className="bg-navBg w-full h-full rounded-lg pt-12 pb-0 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-navBg rounded-full drop-shadow-xl">
              <img
                src={stake}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center text-white mb-10 mx-8 lg:mx-10 3xl:mx-20 mt-4">
              <p className="text-3xl tracking-wide text-stake font-bold text-glow-blue">
                4.5/5
              </p>
              <h3 className="text-xl font-bold m-2">STAKE.COM</h3>

              <div className="flex justify-center items-center space-x-1 m-2">
                <FontAwesomeIcon icon={faSolidStar} className="text-stake" />
                <FontAwesomeIcon icon={faSolidStar} className="text-stake" />
                <FontAwesomeIcon icon={faSolidStar} className="text-stake" />
                <FontAwesomeIcon icon={faSolidStar} className="text-stake" />
                <FontAwesomeIcon icon={faStarHalfAlt} className="text-stake" />
              </div>
              <div className="flex flex-col mt-4 space-y-3">
                {/* Stat 1 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faSolidStar}
                    className="text-white mr-2"
                  />
                  <p className="text-lg font-semibold">Stat 1</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-stake w-full"></div>

                {/* Stat 2 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faSolidStar}
                    className="text-white mr-2"
                  />
                  <p className="text-lg font-semibold">Stat 2</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-stake w-full"></div>

                {/* Stat 3 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillTrendUp}
                    className="text-white mr-2"
                  />
                  <p className="text-base font-semibold">10% DEPOSIT BONUS</p>
                </div>
              </div>
              <div className="flex justify-between space-x-2 mt-6 text-sm 2xl:text-base">
                <div className="relative w-1/2">
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-stakeDark rounded-lg"></div>
                  <button className="relative w-full py-2 bg-navBg text-white font-bold border-2 border-stake rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    Read Review
                  </button>
                </div>
                <div className="relative w-1/2">
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-stakeDark rounded-lg"></div>
                  <button className="relative w-full py-2 bg-stake text-white  border-2 border-stake font-bold rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faGift} className="mr-2" />
                    Get Bonus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CSGO Widget */}
        <div className="relative bg-gradient-to-br from-gamdomGrey to bg-redcsgo text-white pt-20 rounded-lg shadow-lg hover:opacity-95 hover:cursor-pointer transition duration-200">
          <div className="bg-navBg w-full h-full rounded-lg pt-12 pb-0 relative">
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-navBg rounded-full drop-shadow-xl">
              <img
                src={csgo}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="text-center text-white mb-10 mx-8 lg:mx-10 3xl:mx-20 mt-4">
              <p className="text-3xl tracking-wide text-redcsgo font-bold text-glow-red">
                4/5
              </p>
              <h3 className="text-xl font-bold m-2">CSGO500.COM</h3>

              <div className="flex justify-center items-center space-x-1 m-2">
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon
                  icon={faRegularStar}
                  className="text-redcsgo"
                />
              </div>

              <div className="flex flex-col mt-4 space-y-3">
                {/* Stat 1 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faSolidStar}
                    className="text-white mr-2"
                  />
                  <p className="text-lg font-semibold">Stat 1</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-redcsgo w-full"></div>

                {/* Stat 2 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faSolidStar}
                    className="text-white mr-2"
                  />
                  <p className="text-lg font-semibold">Stat 2</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-redcsgo w-full"></div>

                {/* Stat 3 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon
                    icon={faMoneyBillTrendUp}
                    className="text-white mr-2"
                  />
                  <p className="text-base font-semibold">10% DEPOSIT BONUS</p>
                </div>
              </div>

              <div className="flex justify-between space-x-2 mt-6 text-sm 2xl:text-base">
                <div className="relative w-1/2">
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-darkred rounded-lg"></div>
                  <button className="relative w-full py-2 bg-navBg font-bold text-whitefont-bold border-2 border-redcsgo rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faBook} className="mr-2" />
                    Read Review
                  </button>
                </div>
                <div className="relative w-1/2">
                  <div className="absolute inset-x-0 bottom-0 h-10 bg-darkred rounded-lg"></div>
                  <button className="relative w-full py-2 bg-redcsgo text-white  font-bold border-2 border-redcsgo rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                    <FontAwesomeIcon icon={faGift} className="mr-2" />
                    Get Bonus
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
