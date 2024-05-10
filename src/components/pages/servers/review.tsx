import { faStar, faWarning } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface User {
  name: string,
  avatar: string,
}

interface ReviewProps {
  user: User
  rating: number,
  description: string,
}

export default function Review({ user, rating, description }: ReviewProps) {
  return <>
    <div className="2md:block hidden">
      <ReviewLarge user={user} rating={rating} description={description} />
    </div>
    <div className="2md:hidden block">
      <ReviewSmall user={user} rating={rating} description={description} />
    </div>
  </>;
}

function ReviewLarge({ user, rating, description }: ReviewProps) {
  return <>
    <div>
      <div className="flex justify-between items-center gap-4 py-3 px-5 my-7">
        <div className="flex flex-col gap-2 items-center">
          <img src={user.avatar} className="max-h-24 max-w-24 rounded-lg" />
          <h4>{user.name}</h4>
        </div>

        <div className="flex flex-col gap-2 px-2">
          <div className="flex gap-0.5">
            {(Array(5).fill(0).map((_, index) => (
              <FontAwesomeIcon icon={faStar} className={`${index < rating ? "text-yellow-500" : "text-gray-700"}`} />
            )))}
          </div>
          <p className="text-sm">{description}</p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-nowrap">
            {(new Date()).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}
          </span>
          <button><FontAwesomeIcon icon={faWarning} className="text-red-600" width={30} height={30} /></button>
        </div>
      </div>
    </div>
  </>;
}

function ReviewSmall({ user, rating, description }: ReviewProps) {
  return <>
    <div>
      <div className="gap-4 py-3 px-5 my-7">
        <div className="flex">
          <div className="flex flex-col gap-2 ">
            <img src={user.avatar} className="max-h-24 max-w-24 rounded-lg" />
            <h4>{user.name}</h4>
            <div className="flex flex-col gap-1">
              <span className="text-nowrap text-sm">
                {(new Date()).toLocaleDateString('en-us', { year: "numeric", month: "short", day: "numeric" })}
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-2 px-2">
            <div className="flex items-center">
              <button><FontAwesomeIcon icon={faWarning} className="text-red-600" width={30} height={30} /></button>
              <div className="flex gap-0.5">
                {(Array(5).fill(0).map((_, index) => (
                  <FontAwesomeIcon icon={faStar} className={`${index < rating ? "text-yellow-500" : "text-gray-700"}`} />
                )))}
              </div>
            </div>
            <p className="text-sm max-h-80 overflow-y-auto py-2 px-2">{description}</p>
          </div>
        </div>
      </div>
    </div>
  </>;
}

