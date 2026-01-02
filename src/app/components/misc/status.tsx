interface StatusProps {
  status: string;
}

export default function Status({ status }: StatusProps) {
  switch (status) {
    case "complete":
      return (<span className="font-bold text-emerald-500">⬤ Complete</span>);
    case "incomplete":
      return (<span className="font-bold text-red-400">⬤ Incomplete</span>);
    case "in-progress":
      return (<span className="font-bold text-orange-400">⬤ In Progress</span>);
    default:
      return (<span className="font-bold text-sky-700">wrong status idiot</span>);
  }
}