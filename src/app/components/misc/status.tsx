/**
 * I don't really know when you would use
 * "INCOMPLETE" over "IN_PROGRESS" or vice versa.
 * 
 * I feel like they kinda overlap in meaning if you know what I mean.
 * 
 * Maybe "IN_PROGRESS" could mean that it's being worked on actively
 * and "INCOMPLETE" could mean that it's being worked on but not as actively.
 * 
 * Yeah, that makes some sense to me.
 */

const statusDotMargin: string = "mr-2";

export type StatusType = "COMPLETE" | "INCOMPLETE" | "IN_PROGRESS";

interface StatusProps {
  status: StatusType;
}

export default function Status({ status }: StatusProps) {
  switch (status) {
    case "COMPLETE":
      return (
        <span className="font-bold text-emerald-500">
          <span className={statusDotMargin}>⬤</span>Complete
        </span>
      );
    case "INCOMPLETE":
      return (
        <span className="font-bold text-red-400">
          <span className={statusDotMargin}>⬤</span>Incomplete
        </span>
      );
    case "IN_PROGRESS":
      return (
        <span className="font-bold text-orange-400">
          <span className={statusDotMargin}>⬤</span>In Progress
        </span>
      );
    default:
      return <span className="font-bold text-sky-700">wrong status idiot</span>;
  }
}
