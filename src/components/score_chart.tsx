"use client";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ScoreCharProps {
  scores: number[],
}

export default function ScoreChart({ scores }: ScoreCharProps) {
  let total = scores.reduce((sum, a) => sum + a, 0);
  return <>
    <table>
      <tbody>
        {
          (scores.map((score, index) => {
            let value = total > 0 ? Math.round((score / total) * 100) : 0;
            let percentage: string = value + "%";
            return <tr key={index}>
              <td className="flex items-center relative my-0.5">
                <span>{5 - index}</span>
                <FontAwesomeIcon icon={faStar} className="mx-2" color={value > 0 ? "yellow" : "gray"} width={20} height={20} />
              </td>
              <td className="w-full">
                <div className="w-full relative">
                  <div className={`left-0 absolute h-2 rounded-full bg-yellow-500`} style={{ width: percentage }} />
                  <div className="w-full h-2 rounded-full bg-neutral-800" />
                </div>
              </td>
              <td className="px-2 text-right">
                <span>{percentage}</span>
              </td>
            </tr>
          }))
        }
      </tbody>
    </table>

  </>;
}
