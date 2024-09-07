import React from "react";
import gamdom from "./gamdomlogo.png";
import stake from "./stakelogo.png";
import csgo from "./cslogo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faSolidStar, faStarHalfAlt, faGift } from "@fortawesome/free-solid-svg-icons"; // Import solid star for filled stars
import { faStar as faRegularStar } from "@fortawesome/free-regular-svg-icons"; // Import regular star for outlined star

function Showcase() {
  return (
    <div className="mb-8 font-suse">
      {/* Heading for Trusted Casinos */}
      <h2 className="text-base font-extrabold text-white mb-4 uppercase tracking-wide">
        TRUSTED CASINOS
      </h2>

      {/* Grid of Showcase Items */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Gamdom Crazy Widget */}
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
            {/* Content of the Inner Widge */}
            <div className="text-center text-white m-10 mt-4">
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
                {/* Stat 1 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 1</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-gGreen w-full"></div>

                {/* Stat 2 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 2</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-gGreen w-full"></div>

                {/* Stat 3 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 3</p>
                </div>
              </div>

              {/* 3D Button */}
              <div className="relative w-full max-w-xs mx-auto mt-6">
                {/* Button 3D Shadow */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-green-600 rounded-lg"></div>
                {/* Actual Button */}
                <button className="relative w-full py-2 bg-gGreen text-white text-base font-bold rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                  <FontAwesomeIcon icon={faGift} className="mr-3" />
                  Claim Bonus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stake Widget */}
        <div className="relative bg-gradient-to-br from-gamdomGrey to bg-stakeDark text-white pt-20 rounded-lg shadow-lg hover:opacity-95 hover:cursor-pointer transition duration-200">
          {/* Inner Widget */}
          <div className="bg-navBg w-full h-full rounded-lg pt-12 pb-0 relative">
            {/* Profile Picture */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-navBg rounded-full drop-shadow-xl">
              <img
                src={stake}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Content of the Inner Widget */}
            <div className="text-center text-white m-10 mt-4">
              <p className="text-3xl tracking-wide text-stake font-bold text-glow-blue">
                4.5/5
              </p>
              <h3 className="text-xl font-bold m-2">STAKE.COM</h3>

              {/* 4.5 Stars with green glow shadow */}
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
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 1</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-stake w-full"></div>

                {/* Stat 2 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 2</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-stake w-full"></div>

                {/* Stat 3 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 3</p>
                </div>
              </div>

              {/* 3D Button */}
              <div className="relative w-full max-w-xs mx-auto mt-6">
                {/* Button 3D Shadow */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-stakeDark rounded-lg"></div>
                {/* Actual Button */}
                <button className="relative w-full py-2 bg-stake text-white text-base font-bold rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                  <FontAwesomeIcon icon={faGift} className="mr-3" />
                  Claim Bonus
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CSGO Widget */}
        <div className="relative bg-gradient-to-br from-gamdomGrey to bg-redcsgo text-white pt-20 rounded-lg shadow-lg hover:opacity-95 hover:cursor-pointer transition duration-200">
          {/* Inner Widget */}
          <div className="bg-navBg w-full h-full rounded-lg pt-12 pb-0 relative">
            {/* Profile Picture */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-navBg rounded-full drop-shadow-xl">
              <img
                src={csgo}
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            {/* Content of the Inner Widget */}
            <div className="text-center text-white m-10 mt-4">
              <p className="text-3xl tracking-wide text-redcsgo font-bold text-glow-red">
                4/5
              </p>
              <h3 className="text-xl font-bold m-2">CSGO500.COM</h3>

              {/* 4.5 Stars with green glow shadow */}
              <div className="flex justify-center items-center space-x-1 m-2">
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faSolidStar} className="text-redcsgo" />
                <FontAwesomeIcon icon={faRegularStar} className="text-redcsgo" />
              </div>

              <div className="flex flex-col mt-4 space-y-3">
                {/* Stat 1 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 1</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-redcsgo w-full"></div>

                {/* Stat 2 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 2</p>
                </div>
                {/* Green Line */}
                <div className="border-t border-redcsgo w-full"></div>

                {/* Stat 3 */}
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faSolidStar} className="text-white mr-2" />
                  <p className="text-lg font-semibold">Stat 3</p>
                </div>
              </div>

              {/* 3D Button */}
              <div className="relative w-full max-w-xs mx-auto mt-6">
                {/* Button 3D Shadow */}
                <div className="absolute inset-x-0 bottom-0 h-10 bg-darkred rounded-lg"></div>
                {/* Actual Button */}
                <button className="relative w-full py-2 bg-redcsgo text-white text-base font-bold rounded-lg transform -translate-y-1 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200 ease-in-out">
                  <FontAwesomeIcon icon={faGift} className="mr-3" />
                  Claim Bonus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Showcase;
