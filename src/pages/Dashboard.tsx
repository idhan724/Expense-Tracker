import * as React from "react";
import MonthSlider from "@/components/dashboard/MonthSlider";
import { Badge } from "@/components/ui/badge";
import { isCurrentMonth } from "@/lib/date";
import { Button } from "@/components/ui/button";
import { Download, Plus } from "lucide-react";

function Dashboard() {
  const [currentMonth, setCurrentMonth] = React.useState(new Date());
  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MonthSlider onChange={setCurrentMonth} />
          {isCurrentMonth(currentMonth) && (
            <Badge className="text-income-deep bg-income-light p-3 text-sm">
              This Month
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button variant="secondary">
            <Download />
            Export CSV
          </Button>
          <Button>
            <Plus />
            Add Transaction
          </Button>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
