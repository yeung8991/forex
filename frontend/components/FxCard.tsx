"use client";

import React from "react";

import { Card } from "@/components/Card";
import { SparkAreaChart } from "@/components/SparkChart";

export function FxCard({ ticker, chartdata, spot, trend }) {
  return (
    <Card className="mx-auto flex max-w-lg items-center justify-between px-4 py-3.5">
      <div className="flex items-center space-x-2.5">
        <p className="font-medium text-gray-700">{ticker}</p>
      </div>
      <SparkAreaChart
        data={chartdata}
        categories={["Performance"]}
        index={"month"}
        colors={trend > 0 ? ["emerald"] : ["pink"]}
        className="h-8 w-20 sm:h-10   sm:w-36"
      />
      <div className="flex items-center space-x-2.5">
        <span className="font-medium text-gray-700 ">{spot}</span>
        <span className="rounded-sm bg-emerald-500 px-2 py-1 text-sm font-medium text-white">
          {trend}%
        </span>
      </div>
    </Card>
  );
}
