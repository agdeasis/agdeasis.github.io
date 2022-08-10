import React from "react";
import { useEffect } from "react";

const Loader = () => {
  return (
    <div className="fixed w-full h-full top-0 left-0 z-[999999] bg-white flex items-center justify-center flex-col loader">
      <div class="multi-spinner-container z-10 mb-10">
        <div class="multi-spinner">
          <div class="multi-spinner">
            <div class="multi-spinner">
              <div class="multi-spinner">
                <div class="multi-spinner">
                  <div class="multi-spinner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h3 className="font-bold mb-10">AGDEASIS</h3>
    </div>
  );
};

export default Loader;
