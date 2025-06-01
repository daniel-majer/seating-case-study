import { Link } from "react-router";

export const Error = () => {
  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div>
          <div className="flex flex-col items-center">
            <h1 className="text-3xl font-bold text-blue-600 lg:text-6xl">
              404
            </h1>

            <h6 className="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl">
              <span className="text-red-500">Oops!</span>
              <span className="dark:text-white">Page Not Found</span>
            </h6>

            <p className="mb-4 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>

            <Link
              to="/"
              className="rounded-md bg-blue-600 px-5 py-2 text-blue-100 hover:bg-blue-700"
            >
              Go home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
