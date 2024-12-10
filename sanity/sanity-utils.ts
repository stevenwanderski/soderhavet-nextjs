import ImageUrlBuilder from "@sanity/image-url";
import { createClient, type QueryParams } from "next-sanity";
import clientConfig from "./config/client-config";
import { caseStudyQuery, caseStudyQueryBySlug } from "./sanity-query";
import { CaseStudy } from "@/types/case-study";

export const client = createClient(clientConfig);

export function imageBuilder(source: string) {
  return ImageUrlBuilder(clientConfig).image(source);
}

export async function sanityFetch<QueryResponse>({
  query,
  qParams,
  tags,
}: {
  query: string,
  qParams: QueryParams,
  tags: string[],
}): Promise<QueryResponse> {
  return (
    client.fetch <
    QueryResponse >
    (query,
    qParams,
    {
      cache: "force-cache",
      next: { tags },
    })
  );
}

export const getCaseStudies = async () => {
  const data: CaseStudy[] = await sanityFetch({
    query: caseStudyQuery,
    qParams: {},
    tags: [],
  });
  return data;
};

export const getCaseStudyBySlug = async (slug: string) => {
  const data: CaseStudy = await sanityFetch({
    query: caseStudyQueryBySlug,
    qParams: { slug },
    tags: [],
  });

  return data;
};