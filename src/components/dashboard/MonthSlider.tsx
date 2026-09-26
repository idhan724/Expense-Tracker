import * as React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { changeMonth, formatMonthLabel, isCurrentMonth } from "@/lib/date";

interface MonthSliderProps {
  onChange?: (date: Date) => void;
}

function MonthSlider({ onChange }: MonthSliderProps) {
  const [current, setCurrent] = React.useState(new Date());

  const handleChangeMonth = (offset: number) => {
    const newDate = changeMonth({ date: current, offset });
    setCurrent(newDate);
    onChange?.(newDate);
  };

  return (
    <div className="bg-secondary flex items-center justify-center gap-2 rounded-lg py-2">
      <Button variant="ghost" onClick={() => handleChangeMonth(-1)}>
        <ChevronLeft />
      </Button>
      <span className="min-w-[30px] text-center font-medium">
        {formatMonthLabel(current)}
      </span>
      <Button
        variant="ghost"
        onClick={() => handleChangeMonth(1)}
        disabled={isCurrentMonth(current)}
      >
        <ChevronRight />
      </Button>
    </div>
  );
}

export default MonthSlider;
