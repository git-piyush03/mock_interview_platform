import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { dummyInterviews } from "@/constants";
import InterviewCard from "@/components/InterviewCard";
const Page = () => {
  return (
    <>
      <section className="card-cta">
        <div className="flex flex-col gap-6">
          <h2>Get Interview-Ready with AI-Powered Practice and Feedback</h2>
          <p>
            PrepWise is your ultimate interview preparation platform, leveraging
            AI to provide personalized practice questions and real-time feedback.
            Hone your skills, boost your confidence, and ace your next interview
            with ease.
          </p>

          <Button asChild className="btn-primary max-sm:w-full">
            <Link href="/interview">Start an Interview</Link>
          </Button>
        </div>

        <Image
          src="/robot.png"
          alt="robo-here"
          width={400}
          height={400}
          className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviews</h2>
        
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-6 mt-8">
        <h2>Take an Interview</h2>
        <div className="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}

          {/* <p>You haven&appos;t taken any interviews yet</p> */}
        </div>
      </section>
    
    </>
  )
}

export default Page