import React from 'react';

const AllReviewsDetail = (props) => {
     const {name, picture, rating, review} = props.review;
     return (
          <div className="3xl:mt-16 3xl:ml-52 3xl:m-auto 3xl:flex
               2xl:mt-16 2xl:ml-52 2xl:m-auto 2xl:flex
               xl:mt-16 xl:ml-52 xl:m-auto xl:flex
               lg:mt-16 lg:ml-52 lg:m-auto lg:flex
               md:mt-16 md:ml-12 md:m-auto md:flex
               sm:mt-16 sm:ml-12 sm:m-auto sm:flex
               xs:mt-16 xs:ml-12 xs:m-auto xs:flex
          ">
               <main>
                    <img className="3xl:w-24
                         2xl:w-24
                         xl:w-24
                         lg:w-24
                         md:w-24
                         sm:w-24
                         xs:w-24
                    " src={picture} alt="All Pictures" />
                    <h2>{name}</h2>
               </main>

               <main className="3xl:ml-12
               2xl:ml-12
               xl:ml-12
               lg:ml-12
               md:ml-10
               sm:ml-10
               xs:ml-10
               ">
                    <p className="3xl:w-96 3xl:text-2xl
                    2xl:w-96 2xl:text-2xl
                    xl:w-96 xl:text-2xl
                    lg:w-96 lg:text-2xl
                    md:w-96 md:text-2xl
                    sm:w-96 sm:text-2xl
                    xs:w-9/12 xs:text-xl
                    ">{review}</p>
                    <img className="3xl:w-24 3xl:mt-4
                    2xl:w-24 2xl:mt-4
                    xl:w-24 xl:mt-4
                    lg:w-24 lg:mt-4
                    md:w-24 md:mt-4
                    sm:w-24 sm:mt-4
                    xs:w-24 xs:mt-4
                    " src={rating} alt="All rating" />
               </main>
          </div>
     );
};

export default AllReviewsDetail;