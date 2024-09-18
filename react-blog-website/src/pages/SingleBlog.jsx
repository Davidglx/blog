import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaClock, FaUser } from "react-icons/fa";
import SideBar from "../component/SideBar";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_data,
    reading_title,
    content,
  } = data[0];

  return (
    <div>
      <div className="py-40 bg-black text-center text-orange-600 px-4">
        <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5">
          This is a single blog Page.
        </h2>
      </div>

      {/* blog details */}
      <div className="max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12">

        <div className="lg:w-3/4 mx-auto">
          <div>
            <img src={image} alt="" className="w-full mx-auto rounded" />
          </div>
          <h2 className="text-3xl mt-8 font-bold mb-4 text-orange-600 cursor-pointer">
            {title}
          </h2>
          <p className="mb-3 text-gray-600">
            <FaUser className="inline-flex items-center mr-2" />
            {author} | {published_data}
          </p>
          <p className="mb-3 text-gray-600">
            <FaClock className="inline-flex items-center mr-2" />
            {reading_title}
          </p>
          <p className="text-base text-gray-500">{content}</p>

          <div className="text-base text-gray-500">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, vel.
              Sunt modi cum nemo maxime esse vitae, et odit dignissimos sed
              blanditiis porro? Quas labore rerum nulla. Illum, sint temporibus?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid
              itaque neque in reiciendis dolorum. Quos id ipsum reprehenderit
              itaque consequatur explicabo dolor, tempore mollitia amet
              accusantium esse similique laudantium error!
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, porro. Aspernatur exercitationem, eius veniam
              consectetur tempora illo nemo ullam, animi officiis odit
              perferendis? Nisi iure rerum doloribus minima impedit incidunt?
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Incidunt, porro. Aspernatur exercitationem, eius veniam
              consectetur tempora illo nemo ullam, animi officiis odit
              perferendis? Nisi iure rerum doloribus minima impedit incidunt?
            </p>
            <br />
          </div>
        </div>
        
        <div className="lg:w-1\2">
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;





