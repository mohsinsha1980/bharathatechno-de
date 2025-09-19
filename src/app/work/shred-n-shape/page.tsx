import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import ShredNShape from "@/components/case-studies/shred-n-shape/case-study";
import ProjectGallery from "@/components/case-studies/shred-n-shape/project-gallery";

export default async function ShredNShapePage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="Shred-n-Shape – Eine in Großbritannien ansässige Fitness-Web-App für personalisierte Gesundheits- und Fitnessreisen" />
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <ShredNShape />
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
