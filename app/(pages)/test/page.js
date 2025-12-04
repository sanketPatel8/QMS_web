"use client";

import QMSLoader from "@/components/ui/Loader";
import { useToast } from "@/Hooks/useToast";

const Page = () => {
  const { showToast } = useToast();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <QMSLoader type="screen" />
    </div>
  );
};

export default Page;
