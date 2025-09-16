import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import IntignusBiotech from "@/components/case-studies/intignusbiotech/case-study";
import ProjectGallery from "@/components/case-studies/intignusbiotech/project-gallery";
import ProjectSlider from "@/components/case-studies/projects-slider";

export default async function IntignusBiotechPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Comprehensive WordPress Website for Intignus Biotech with Detailed Product Information"/>
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <IntignusBiotech />
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
