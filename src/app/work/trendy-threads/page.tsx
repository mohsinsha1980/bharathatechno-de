import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import ProjectGallery from "@/components/case-studies/trendy-threads/project-gallery";
import TrendyThreads from "@/components/case-studies/trendy-threads/case-study";

export default async function TrendyThreadsPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner
        data="Trendy Threads - Eine voll ausgestattete E-Commerce-Plattform für Mode für reibungslosen Online-Einzelhandel"
      />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <TrendyThreads />
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
