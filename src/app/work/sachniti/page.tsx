import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import Sachniti from "@/components/case-studies/sachniti/case-study";
import ProjectGallery from "@/components/case-studies/sachniti/project-gallery";

export default async function SachnitiPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Sachniti – Eine benutzerfreundliche WordPress-Website mit nahtlosem Content-Management und Serviceinformationen"/>
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <Sachniti />
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
