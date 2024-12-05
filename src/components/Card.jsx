/* eslint-disable react/prop-types */
export default function Card({ children, bg = "bg-gray-100" }) {
  return <div className={`${bg} rounded-lg p-6 shadow-md`}>{children}</div>;
}
