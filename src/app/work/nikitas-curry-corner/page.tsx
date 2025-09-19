import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import NikitasCurryCorner from "@/components/case-studies/nikitas-curry-corner/case-study";
import ProjectGallery from "@/components/case-studies/nikitas-curry-corner/project-gallery";
import ProjectSlider from "@/components/case-studies/projects-slider";

export default async function NikitasCurryCornerPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Nikita's Curry Corner – Eine Cloud-Küche mit Sitz in Kanada mit Echtzeit-Bestellverwaltung und Lieferverfolgung" />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <NikitasCurryCorner />
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
