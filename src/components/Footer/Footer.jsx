import React from 'react'

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blogs",
    link: "/#blog",
  },
]

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
      <div className="container">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className='py-8 px-4'>
          <a href="#"
             className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl' 
            >Eshop
            </a>
            <p className='text-gray-600 lg:pr-24 pt-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente, perferendis?</p>
            <p className='text-gray-500 mt-4'>Made with ❤️ by The Coding Journey</p>
            <a href="https://www.youtube.com/watch?v=4sc6BhgS_Co&t=8550s" target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit our YouTube Channel</a>
          </div>
          {/* Footer link */}
          <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
            <div className='py-8 px-4'>
              <h1 className='text-xl font-semibold'>Important Link</h1>
              <ul className='space-y-3'>
                {
                  FooterLinks.map((data, index) => (
                    <li key={index}>
                      <a href={data.link} className='text-gray-600 hover:text-black duration-300'>
                        {data.title}
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer