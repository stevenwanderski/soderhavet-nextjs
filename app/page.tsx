import { getCaseStudies } from "@/sanity/sanity-utils";
import Link from "next/link";

export default async function Home() {
  const caseStudies = await getCaseStudies();

  return (
    <div className="">
      <h1 className="font-bold text-2xl">Homepage.</h1>
      <p className="max-w-prose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis veniam laboriosam, iure consequatur ducimus ab numquam doloribus sequi alias minus quos possimus, blanditiis aliquam ipsam totam! Eaque laboriosam repellendus laborum.</p>

      <div>
        {caseStudies.length > 0 ? (
          caseStudies.map((caseStudy) => (
            <div key={caseStudy._id}>
              <Link href={`/work/${caseStudy.slug.current}`} className="underline">
                {caseStudy.title}
              </Link>
            </div>
          ))
        ) : (
          <div>
            No case studies.
          </div>
        )}
      </div>
    </div>
  );
}
