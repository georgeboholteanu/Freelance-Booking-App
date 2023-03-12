import React from 'react'

export const Gallery = () => {

  return (
    <div id='gallery'>
        <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 px-10">
          {data.map((project) => (
            <div className="max-w-sm bg-gray-300 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" key={project.id}>
              <a href={project.url}>
                <img className="gallery-img w-full h-56 object-cover object-top border border-grey bg-center rounded-t-lg" src={project.thumb} alt="" />
              </a>
              <div className="p-4">
                <a href={project.url}>
                  <h6 className="mb-1 text-md  tracking-tight text-gray-900 dark:text-white">{project.name}</h6>
                </a>
                <a href={project.url} className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
      </div>
    </div>
  )
}
