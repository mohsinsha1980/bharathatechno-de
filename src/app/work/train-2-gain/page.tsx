import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import ProjectGallery from "@/components/case-studies/train-2-gain/project-gallery";
import Train2gain from "@/components/case-studies/train-2-gain/case-study";

export default async function Train2GainPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="WordPress-Plattform für Train2Gain – Nahtlose Anmeldung und Lead-Generierung für Weiterbildungsprogramme" />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <Train2gain />
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
