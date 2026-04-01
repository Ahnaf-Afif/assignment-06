import React from "react";

const UserRating = () => {
  return (
    <div>
      <div className="w-full bg-linear-to-r from-[#5533FF] via-[#7A1FFF] to-[#C000FF] py-11">
        <div className="mx-auto flex flex-col md:flex-row max-w-5xl items-center justify-center px-6">
          <div className="min-w-[220px] text-center">
            <div className="text-[44px] font-extrabold leading-none text-white">
              50K+
            </div>
            <div className="mt-3 text-[18px] font-medium text-white/80">
              Active Users
            </div>
          </div>

          <div className="mx-8 h-12 w-px bg-white/25" />

          <div className="min-w-[220px] text-center">
            <div className="text-[44px] font-extrabold leading-none text-white">
              200+
            </div>
            <div className="mt-3 text-[18px] font-medium text-white/80">
              Premium Tools
            </div>
          </div>

          <div className="mx-8 h-12 w-px bg-white/25" />

          <div className="min-w-[220px] text-center">
            <div className="text-[44px] font-extrabold leading-none text-white">
              4.9
            </div>
            <div className="mt-3 text-[18px] font-medium text-white/80">
              Rating
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserRating;
