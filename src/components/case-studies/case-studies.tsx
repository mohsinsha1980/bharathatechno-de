import CaseStudyTemplate from "./case-study-template";
import Everwinpt from "./everwinpt/case-study";
import IntignusBiotech from "./intignusbiotech/case-study";
import NikitasCurryCorner from "./nikitas-curry-corner/case-study";
import R3Constructor from "./r3constructor/case-study";
import Sachniti from "./sachniti/case-study";
import ShredNShape from "./shred-n-shape/case-study";
import Snumero from "./snumero/case-study";
import Train2gain from "./train-2-gain/case-study";
import TrendyThreads from "./trendy-threads/case-study";
import UrbanAxis from "./urban-axis/case-study";

export default function CaseStudies() {
  return (
    <section className="bl_case_studies">
      <div className="container container-medium">
        <CaseStudyTemplate>
          <TrendyThreads/>
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <ShredNShape />
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <NikitasCurryCorner />
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <UrbanAxis />
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <Everwinpt />
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <Sachniti />
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <IntignusBiotech />
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <Snumero/>
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <R3Constructor/>
        </CaseStudyTemplate>
        <CaseStudyTemplate>
          <Train2gain/>
        </CaseStudyTemplate>
      </div>
    </section>
  );
}
