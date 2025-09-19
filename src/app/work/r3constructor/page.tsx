import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import R3Constructor from "@/components/case-studies/r3constructor/case-study";
import ProjectGallery from "@/components/case-studies/r3constructor/project-gallery";

export default async function R3ConstructorPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Umfassende digitale Präsenz für R3 Constructor mit laufenden und abgeschlossenen Projekten in PCMC"/>
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <R3Constructor/>
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
