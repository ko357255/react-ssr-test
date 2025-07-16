const NotFound = () => {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-gray-200 p-4">
      <div className="main-content w-full max-w-2xl">
        <div className="mb-6 overflow-hidden rounded-lg bg-white p-8 shadow-xl backdrop-blur-sm">
          <h1 className="mb-4 text-2xl font-bold">Not Found.</h1>
          <h1 className="mb-4 text-2xl font-bold">このページは存在しません</h1>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
