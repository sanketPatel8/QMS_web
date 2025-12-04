// "use client";

// import QMSLoader from "@/components/ui/Loader";
// import { useToast } from "@/Hooks/useToast";

// const Page = () => {
//   const { showToast } = useToast();

//   return (
//     <div className="flex items-center justify-center">
//       <QMSLoader type="screen" />
//     </div>
//   );
// };

// export default Page;

"use client";

import { useRouter } from "next/navigation";
import { XCircle } from "lucide-react"; // optional icon

const UnauthorizedPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <XCircle className="text-[#0244FE] w-16 h-16 mx-auto mb-4" />
        <h1 className="text-3xl font-bold mb-2 text-gray-800">Unauthorized</h1>
        <p className="text-gray-600 mb-6">
          You do not have permission to access this page.
        </p>
        <button
          onClick={() => router.push("/")}
          className="px-6 py-2 bg-[#0244FE] text-white rounded hover:bg-[#0244FE] transition"
        >
          Go to Home
        </button>
      </div>
    </div>
  );
};

export default UnauthorizedPage;
