import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface DataTableCategory {
  icon: IconProp,
  value: ReactNode,
  tooltip: string,
}

interface DataTableProps {
  categories: DataTableCategory[],
}

export default function DataTable({ categories }: DataTableProps) {
  return <>
    <table className="bg-black bg-opacity-20 rounded-sm px-4 py-2">
      <tbody className="divide-y divide-neutral-800">
        {
          categories.filter((category) => category.value).map((category, index) => (
            <tr key={index} className="divide-x divide-neutral-800 ">
              <td className="group py-2.5 px-4 relative">
                <FontAwesomeIcon icon={category.icon} className="z-0" />
                <span className={"group-hover:inline select-none text-sm hidden absolute right-full top-1/2 -translate-y-1/2 text-nowrap m-auto bg-neutral-800 px-3 py-1.5  mr-2 rounded-lg "}>
                  {category.tooltip}
                </span>
              </td>
              <td className="py-2.5 px-4 w-full font-bold has-tooltip">{category.value}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </>;
}
