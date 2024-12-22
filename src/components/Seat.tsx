import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";
import { cn } from "@/lib/utils.ts";
import React from "react";

interface SeatProps extends React.HTMLAttributes<HTMLElement> {}

export const Seat = React.forwardRef<HTMLDivElement, SeatProps>(
  (props, ref) => {
    /*     const isInCart = false;
     */ return (
      <Popover>
        <PopoverTrigger>
          <div
            className={cn(
              "transition-color size-8 rounded-full bg-zinc-100 hover:bg-zinc-200",
              props.className,
            )}
            ref={ref}
          >
            <span className="text-xs font-medium text-zinc-400">[n]</span>
          </div>
        </PopoverTrigger>
        <PopoverContent>
          <pre>{JSON.stringify({ seatData: null }, null, 2)}</pre>

          <footer className="flex flex-col">
            {/*         {isInCart ? (
              <Button disabled variant="destructive" size="sm">
                Remove from cart
              </Button>
            ) : (
              <Button disabled variant="default" size="sm">
                Add to cart
              </Button>
            )} */}
          </footer>
        </PopoverContent>
      </Popover>
    );
  },
);
