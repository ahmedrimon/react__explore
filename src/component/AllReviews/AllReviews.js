
import AllReviewsDetail from '../AllReviewsDetail/AllReviewsDetail';
import useReviews from './../../Hooks/useReviews';

const AllReviews = () => {
     const [reviews, setReviews] = useReviews()
     return (
          <div>
               <h1 className="3xl:text-4xl 3xl:text-red-500 3xl:mt-12 3xl:ml-8
               2xl:text-4xl 2xl:text-red-500 2xl:mt-12 2xl:ml-8
               xl:text-4xl xl:text-red-500 xl:mt-12 xl:ml-8
               lg:text-4xl lg:text-red-500 lg:mt-12 lg:ml-8
               md:text-4xl md:text-red-500 md:mt-12 md:ml-8
               sm:text-4xl sm:text-red-500 sm:mt-12 sm:ml-8
               xs:text-4xl xs:text-red-500 xs:mt-12 xs:ml-8
               ">This is All reviews</h1>
               <section>
                    {
                         reviews.map(review => <AllReviewsDetail key={review.id} review={review}></AllReviewsDetail>)
                    }
               </section>
          </div>
     );
};

export default AllReviews;