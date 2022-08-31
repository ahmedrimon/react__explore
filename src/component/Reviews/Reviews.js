// Coustom hook use
import useReviews from './../../Hooks/useReviews';

// Component use
import Review from './../Review/Review';


const Reviews = () => {

     const [reviews, setReviews] = useReviews();
     const slicedReviews = reviews.slice(0, 3)

     return (
          <>
               <h1 className="text-2vw text-[#91c99f] ml-32">Here are Reviews</h1>
               <section className="mt-8 w-full">
                    {
                         slicedReviews.map(review => <Review key={review.id} review={review}/>)
                    }
               </section>
          </>
     );
};

export default Reviews;