"use client"

import { useState } from "react"
import Image from "next/image"
import { Star, ThumbsUp, MessageSquare } from "lucide-react"

// Sample reviews data
const sampleReviews = [
  {
    id: 1,
    user: {
      name: "Rahul Sharma",
      imageUrl: "/placeholder.svg?height=50&width=50",
    },
    rating: 4.5,
    date: "2 days ago",
    title: "Entertaining Action Thriller",
    content:
      "Sikandar is a well-crafted action thriller with stunning visuals and powerful performances. Salman Khan delivers one of his best performances in recent years. The story is engaging and keeps you hooked till the end.",
    likes: 42,
    comments: 5,
  },
  {
    id: 2,
    user: {
      name: "Priya Patel",
      imageUrl: "/placeholder.svg?height=50&width=50",
    },
    rating: 3.5,
    date: "1 week ago",
    title: "Good but not great",
    content:
      "The movie has some great action sequences and Salman Khan's performance is commendable. However, the screenplay could have been tighter. The second half drags a bit. Overall, it's a one-time watch.",
    likes: 28,
    comments: 3,
  },
  {
    id: 3,
    user: {
      name: "Amit Kumar",
      imageUrl: "/placeholder.svg?height=50&width=50",
    },
    rating: 5,
    date: "3 days ago",
    title: "Blockbuster Entertainment!",
    content:
      "Absolutely loved the movie! The action sequences are top-notch and the emotional scenes hit hard. Salman Khan and Rashmika Mandanna have great chemistry. The background score elevates the viewing experience.",
    likes: 56,
    comments: 8,
  },
]

export default function MovieReviews({ movieId }) {
  const [reviews] = useState(sampleReviews)
  const [expandedReviews, setExpandedReviews] = useState([])

  const toggleReviewExpansion = (reviewId) => {
    setExpandedReviews((prev) => (prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]))
  }

  return (
    <div className="mb-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Top reviews</h2>
        <button className="text-[#f84464] font-medium hover:underline">Add your rating & review</button>
      </div>

      <div className="grid gap-6">
        {reviews.map((review) => {
          const isExpanded = expandedReviews.includes(review.id)
          const shouldTruncate = review.content.length > 150 && !isExpanded

          return (
            <div key={review.id} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={review.user.imageUrl || "/placeholder.svg"}
                    alt={review.user.name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-medium">{review.user.name}</h3>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>

                  <div className="flex items-center gap-1 mb-2">
                    <div className="flex items-center bg-green-700 text-white px-2 py-0.5 rounded text-sm">
                      <span className="font-bold mr-1">{review.rating}</span>
                      <Star className="w-3 h-3 fill-white" />
                    </div>
                    <span className="font-medium text-sm">{review.title}</span>
                  </div>

                  <p className="text-gray-700 mb-3">
                    {shouldTruncate ? `${review.content.substring(0, 150)}...` : review.content}
                    {review.content.length > 150 && (
                      <button
                        className="text-[#f84464] font-medium ml-1 hover:underline"
                        onClick={() => toggleReviewExpansion(review.id)}
                      >
                        {isExpanded ? "Read less" : "Read more"}
                      </button>
                    )}
                  </p>

                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{review.likes}</span>
                    </button>
                    <button className="flex items-center gap-1 hover:text-gray-700">
                      <MessageSquare className="w-4 h-4" />
                      <span>{review.comments}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      <div className="mt-6 text-center">
        <button className="border border-[#f84464] text-[#f84464] font-medium px-6 py-2 rounded-md hover:bg-[#f84464]/5 transition-colors">
          View all reviews
        </button>
      </div>
    </div>
  )
}

