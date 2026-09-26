import * as React from "react";
import MonthSlider from "@/components/dashboard/MonthSlider";
import { Badge } from "@/components/ui/badge";
import { isCurrentMonth } from "@/lib/date";

function Dashboard() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MonthSlider onChange={setCurrentMonth} />
          {isCurrentMonth(currentMonth) && (
            <Badge className="bg-green-50 text-green-500 dark:bg-green-950 dark:text-green-300">
              This is Month
            </Badge>
          )}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
