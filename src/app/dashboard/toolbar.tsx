import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Checkbox } from "@/components/ui/checkbox";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { PlusCircleIcon } from "lucide-react";

import { MixerHorizontalIcon } from "@radix-ui/react-icons";
import { Separator } from "@radix-ui/react-dropdown-menu";

const statuses = [
  { id: "in-progress", name: "In Progress" },
  { id: "todo", name: "Todo" },
  { id: "backlog", name: "Backlog" },
  { id: "done", name: "Done" },
  { id: "cancelled", name: "Cancelled" },
];

const priorities = [
  { id: "low", name: "Low" },
  { id: "medium", name: "Medium" },
  { id: "high", name: "High" },
  { id: "critical", name: "Critical" },
];

const Toolbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter tasks..."
          className="h-8 w-[150px] lg:w-[250px]"
        />
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-8 border-dashed">
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Status
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {statuses.map((status) => (
                    <CommandItem
                      className="relative"
                      onSelect={() => console.log(status)}
                      key={status.id}
                    >
                      <Checkbox id={status.id} />
                      <label
                        htmlFor={status.id}
                        className="absolute inset-0"
                      ></label>
                      <span className="ml-2">{status.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="h-8 border-dashed">
              <PlusCircleIcon className="mr-2 h-4 w-4" />
              Priority
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup>
                  {priorities.map((priority) => (
                    <CommandItem
                      className="relative"
                      onSelect={() => console.log(priority)}
                      key={priority.id}
                    >
                      <Checkbox id={priority.id} />
                      <label
                        htmlFor={priority.id}
                        className="absolute inset-0"
                      ></label>
                      <span className="ml-2">{priority.name}</span>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className="h-8">
            <MixerHorizontalIcon className="mr-2 h-4 w-4" />
            View
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[200px] p-0">
          <div className="px-3 py-2">
            <span>Toogle Column</span>
          </div>
          <Separator />
          <ToggleGroup
            type="multiple"
            defaultValue={["title", "priority"]}
            className="w-100 flex flex-col px-3 py-2"
          >
            <ToggleGroupItem className="w-full" value="title">
              Title
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full" value="priority">
              Priority
            </ToggleGroupItem>
            <ToggleGroupItem className="w-full" value="status">
              Status
            </ToggleGroupItem>
          </ToggleGroup>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Toolbar;
