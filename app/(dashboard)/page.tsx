"use client";

import { DataCharts } from "@/components/data-charts";
import { DataGrid } from "@/components/data-grid";
import { Button } from "@/components/ui/button";
import { useNewAccount } from "@/features/accounts/hooks/use-new-accounts";


export default function Home() {
  const { onOpen } = useNewAccount()

  return (
    <div>
      <div className="mx-auto -mt-6 w-full max-w-screen-2xl pb-10">
        <DataGrid />

        <DataCharts />
      </div>
    </div>
  );
}
