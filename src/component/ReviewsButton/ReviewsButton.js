
import { Link } from 'react-router-dom';

const ReviewsButton = () => {
     return (
          <>
               <div className="text-center h-20">
                    <Link 
                         className="bg-red-700 rounded-md text-white p-2 w-2/3" 
                         to="/allreviews">
                         See all Reviews
                    </Link>
               </div>
          </>
     );
};

export default ReviewsButton;