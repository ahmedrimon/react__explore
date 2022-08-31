// Coustom hook use
import useReviews from './../../Hooks/useReviews';

// Component use
import Review from './../Review/Review';


const Reviews = () => {

     const [reviews, setReviews] = useReviews();
     const slicedReviews = reviews.slice(0, 3)

     return (
          <>
               <h1 className="3xl:mt-28 sm:text-3xl sm:mt-6 xl:mt-12 text-2vw text-[#91c99f] ml-7">Here are the Reviews</h1>
               <section className="mt-8 w-full">
                    {
                         slicedReviews.map(review => <Review key={review.id} review={review}/>)
                    }
               </section>
          </>
     );
};

export default Reviews;