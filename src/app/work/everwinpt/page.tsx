import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import Everwinpt from "@/components/case-studies/everwinpt/case-study";
import ProjectGallery from "@/components/case-studies/everwinpt/project-gallery";
import ProjectSlider from "@/components/case-studies/projects-slider";

export default async function EverwinptPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Nikita's Curry Corner - A Canada-Based Cloud Kitchen with Real-Time Order Management and Delivery Tracking" />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <Everwinpt />
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
