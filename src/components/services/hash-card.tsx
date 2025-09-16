import { ServiceExcelType } from "@/lib/types";

export default function HashCard({ title, description }: ServiceExcelType) {
  return (
    <div className="bl_list_item">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}
