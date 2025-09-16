import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import UrbanAxis from "@/components/case-studies/urban-axis/case-study";
import ProjectGallery from "@/components/case-studies/urban-axis/project-gallery";

export default async function UrbanAxisPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="UrbanAxis - A Globally Ranked Static Website with Modern Design and Optimized Performance, Built with Next.js" />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <UrbanAxis />
          </CaseStudyTemplate>
        </div>
      </div>
      <div className="container my-8">
        <ProjectGallery />
      </div>
      <div className="container project_slider">
        <ProjectSlider />
      </div>
    </article>
  );
}
