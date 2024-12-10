import { groq } from "next-sanity";

const caseStudyData = `{
  title,
  slug,
  image
}`;

export const caseStudyQuery = groq`*[_type == "caseStudy"] ${caseStudyData}`;

export const caseStudyQueryBySlug = groq`*[_type == "caseStudy" && slug.current == $slug][0] ${caseStudyData}`;

// export const postQueryByTag = groq`*[_type == "post" && $slug in tags[]->slug.current] ${postData}`;

// export const postQueryByAuthor = groq`*[_type == "post" && author->slug.current == $slug] ${postData}`;

// export const postQueryByCategory = groq`*[_type == "post" && category->slug.current == $slug] ${postData}`;