

const Review = (props) => {
     const {name, review, rating, picture} = props.review;
     return (
          <section>
               <div className="flex justify-center">
                    <main className="mb-10">
                         <img className="rounded-lg" src={picture} alt="profile picture who have done review" />
                         <h1 className="text-lg">{name}</h1>
                    </main>
                    <main className="ml-10">
                         <h6 className="text-xl w-3/12">{review}</h6>
                         <img className="w-28" src={rating} alt="rated star color yellow" />
                    </main>
               </div>
          </section>
     );
};

export default Review;