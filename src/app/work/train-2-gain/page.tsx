import CaseStudiesBanner from "@/components/case-studies/banner";
import CaseStudyTemplate from "@/components/case-studies/case-study-template";
import ProjectSlider from "@/components/case-studies/projects-slider";
import ProjectGallery from "@/components/case-studies/train-2-gain/project-gallery";
import Train2gain from "@/components/case-studies/train-2-gain/case-study";

export default async function Train2GainPage() {
  return (
    <article className="pg_work">
      <CaseStudiesBanner data="WordPress Platform for Train2Gain - Seamless Enrollment and Lead Generation for Skill-Building Programs"/>
      <div className="bl_case_studies">
        <div className="container container-medium">
          <CaseStudyTemplate>
            <Train2gain/>
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
