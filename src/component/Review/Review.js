

const Review = (props) => {
     const {name, review, rating, picture} = props.review;
     return (
          <section>
               <div className="flex justify-center xl:ml-60 xl:mt-20 sm:ml-36 xs:ml-14">
                    <main className="mb-10">
                         <img className="3xl:w-20 xl:w-12 sm:w-8 xs:w-12 rounded-lg" src={picture} alt="profile picture who have done review" />
                         <h1 className="sm:text-sm xs:text-sm text-lg">{name}</h1>
                    </main>
                    <main className="ml-10">
                         <h6 className="text-xl 3xl:text-3xl xl:text-xl xl:w-6/12 sm:w-9/12 sm:text-sm xs:w-4/5 xs:text-sm w-3/12">{review}</h6>
                         <img className="xl:mt-5 sm:mt-4 xs:mt-4 w-28" src={rating} alt="rated star color yellow" />
                    </main>
               </div>
          </section>
     );
     
};

export default Review;