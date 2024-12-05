import Card from "./Card";

export default function HomeCards() {
  return (
    <section className="py-4">
      <div className="container-xl m-auto lg:container">
        <div className="grid grid-cols-1 gap-4 rounded-lg p-4 md:grid-cols-2">
          <Card>
            <h2 className="text-2xl font-bold">For Developers</h2>
            <p className="mb-4 mt-2">
              Browse our React jobs and start your career today
            </p>
            <a
              href="/jobs.html"
              className="inline-block rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-700"
            >
              Browse Jobs
            </a>
          </Card>
          <Card bg="bg-indigo-100">
            <h2 className="text-2xl font-bold">For Employers</h2>
            <p className="mb-4 mt-2">
              List your job to find the perfect developer for the role
            </p>
            <a
              href="/add-job.html"
              className="inline-block rounded-lg bg-indigo-500 px-4 py-2 text-white hover:bg-indigo-600"
            >
              Add Job
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
}
