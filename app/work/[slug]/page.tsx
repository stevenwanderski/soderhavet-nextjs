import config from "@/sanity/config/client-config";
import { getCaseStudyBySlug } from "@/sanity/sanity-utils";
import { getImageDimensions } from "@sanity/asset-utils";
import urlBuilder from "@sanity/image-url";
import Image from "next/image";

export default async function SingleWorkPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const caseStudy = await getCaseStudyBySlug(slug);
  const { width, height } = getImageDimensions(caseStudy.image);

  return (
    <div>
      <div>Case Study</div>

      <h1 className="text-2xl font-bold">{caseStudy.title}</h1>

      <Image
        src={
          urlBuilder(config)
            .image(caseStudy.image)
            .fit("max")
            .auto("format")
            .url() as string
        }
        width={width}
        height={height}
        alt={caseStudy.image.alt || "case study image"}
        loading="lazy"
      />
    </div>
  )
}