import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import ProjectGallery from "@/components/case-studies/snumero/project-gallery";
import Snumero from "@/components/case-studies/snumero/case-study";

export default async function SnumeroPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Snumero – Eine Next.js-Website mit lokaler SEO in Deutschland zur Verbesserung der Sichtbarkeit und des Benutzerengagements" />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <Snumero />
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
