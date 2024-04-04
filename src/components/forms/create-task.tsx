import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  ScrollArea,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  ScrollAreaViewport,
} from "@radix-ui/react-scroll-area";
import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

type Customer = {
  _id: string;
  name: string;
};

const priorities = [
  { id: "low", name: "Low" },
  { id: "medium", name: "Medium" },
  { id: "high", name: "High" },
];

const CreateTask = () => {
  const token = useSelector((state: any) => state.token);
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [open, setOpen] = useState(false);
  const getCustomers = async () => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/customers/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (result.ok) {
        const data = await result.json();
        setCustomers(data);
      }
      console.log(customers);
    } catch (error) {
      console.log(error);
    }
  };

  const form = useForm({
    defaultValues: {
      title: "",
      description: "",
      customer: "",
      priority: "",
    },
  });

  const user = useSelector((state: any) => state.user);

  const onSubmit = async (data: any) => {
    try {
      const result = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/api/v1/tasks/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ...data, author: user._id }),
        },
      );
      setOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  const PlaceHolder = () => {
    return <div>Select Priority</div>;
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Create New Task</Button>
      </DialogTrigger>
      <DialogContent onFocus={getCustomers}>
        <DialogHeader>Create New Task</DialogHeader>
        <Form {...form}>
          <form
            className="flex flex-col space-y-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      placeholder="Enter task description here..."
                      {...field}
                      className="max-h-[300px] min-h-[100px]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="customer"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <Popover modal={true}>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          role="combobox"
                          className={cn(
                            "w-[200px] justify-between",
                            !field.value && "text-muted-foreground",
                          )}
                        >
                          {field.value
                            ? customers.find(
                                (customer) => customer._id === field.value,
                              )?.name
                            : "Select customer"}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-[200px] p-0">
                      <Command>
                        <CommandInput placeholder="Search customer..." />
                        <CommandEmpty>No customer found.</CommandEmpty>
                        <ScrollArea className="rounded overflow-hidden">
                          <ScrollAreaViewport className="w-full max-h-[225px] rounded">
                            <CommandGroup>
                              {customers.map((customer) => (
                                <CommandItem
                                  value={customer.name}
                                  key={customer._id}
                                  onSelect={() => {
                                    form.setValue("customer", customer._id);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      customer.name === field.value
                                        ? "opacity-100"
                                        : "opacity-0",
                                    )}
                                  />
                                  {customer.name}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </ScrollAreaViewport>
                          <ScrollAreaScrollbar
                            orientation="vertical"
                            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
                          >
                            <ScrollAreaThumb className="flex-1 bg-border rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
                          </ScrollAreaScrollbar>
                        </ScrollArea>
                      </Command>
                    </PopoverContent>
                  </Popover>
                </FormItem>
              )}
            />
            <FormField
              name="priority"
              control={form.control}
              render={({ field }) => (
                <FormItem className="flex flex-col relative">
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      {field.value
                        ? priorities.find(
                            (priority) => priority.id === field.value,
                          )?.name
                        : "Select priority"}
                    </SelectTrigger>
                    <SelectContent>
                      {priorities.map((priority) => (
                        <SelectItem
                          key={priority.id}
                          value={priority.id}
                          onSelect={() => {
                            form.setValue("priority", priority.id);
                            console.log(priority.id);
                          }}
                        >
                          {priority.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <div className="flex justify-end">
              <Button type="submit">Create</Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateTask;
