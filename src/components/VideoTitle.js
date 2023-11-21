import React from 'react'
import { Link } from "react-router-dom";
const VideoTitle = ({ title, overview }) => {
  return (
      <>
          <div className="w-full aspect-video  sm:bg-gradient-to-r from-black absolute">

              <div className="p-2 absolute top-52 sm:top-1/3 sm:left-6 left-3 ">

                  <div className="sm:text-5xl  text-2xl font-bold font-serif mb-3 text-white">Elemental{/*{title}*/}</div>
                  <div className="text-sm hidden sm:block lg:w-1/3 w-3/5  text-white text-justify">{/*{overview}*/}Disney and Pixar’s Elemental is an original feature film set in Element City where Fire, Water, Earth and Air residents live together. The story introduces Ember, a tough, quick-witted and fiery young woman whose friendship with a fun, sappy, go-with-the-flow guy named Wade challenges her beliefs about the world they live in.</div>
                  <div className="hidden sm:block">
                      <div className="mt-6 flex  ">
                      <Link to={"/browse/"+976573}>
                          <button className="px-5 font-bold py-1  bg-white rounded flex hover:bg-gray-400 md:hover:scale-110">
                              Play</button>
                              </Link>
                          <button className="px-4 font-bold text-gray-100 ml-4 py-1  flex bg-gray-700  opacity-80 rounded items-center hover:bg-gray-700 md:hover:scale-110" >
                              Info</button>
                      </div>
                  </div>
              </div>
          </div>

      </>
  )
}

export default VideoTitle
