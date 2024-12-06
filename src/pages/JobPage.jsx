import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

export default function JobPage() {
  const { id } = useParams();

  return loading ? <Spinner /> : <h1>{job.title}</h1>;
}
