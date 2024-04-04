import { FC, useState, useEffect, useRef, forwardRef } from "react";
import { Input } from "./input";
import { Card } from "./card";
import { useController, useForm, useFormContext } from "react-hook-form";
import { ChevronRight } from "lucide-react";

interface ItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  label: string;
}

const Item: FC<ItemProps> = ({ value, label, ...props }) => {
  return (
    <div className="px-3 py-1 hover:bg-muted rounded-md" {...props}>
      <span>{label}</span>
    </div>
  );
};

type Option = {
  value: string;
  label: string;
};

interface SearchSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  data: Option[];
  placeholder?: string;
  selectedOption?: Option;
}

const SearchSelect: FC<SearchSelectProps> = forwardRef(
  ({ data, placeholder, selectedOption, ...props }, test) => {
    const ref = useRef<HTMLDivElement>(null);
    const [isOpen, setIsOpen] = useState(false);
    const [selected, setSelected] = useState(selectedOption);
    const [currentPage, setCurrentPage] = useState(0);

    const { register, watch, setValue } = useFormContext();

    const filteredData =
      selected &&
      (watch("search") === "" || selected?.label === watch("search"))
        ? data.sort().slice(0, 5)
        : data
            .filter((item) =>
              item.label
                .toLowerCase()
                .includes(watch("search")?.toLowerCase() || ""),
            )
            .sort((a, b) => (a.label > b.label ? 1 : -1))
            .slice(currentPage * 5, currentPage * 5 + 5);

    return (
      <div
        className="relative"
        onBlur={(event) => {
          ref.current &&
            !ref.current.contains(event.target) &&
            setIsOpen(false);
        }}
        ref={ref}
      >
        <Input
          {...register("search")}
          placeholder={placeholder}
          value={!isOpen ? selected?.label : watch("search")}
          onFocus={() => {
            setValue("search", selected?.label);
            setIsOpen(true);
          }}
          {...props}
        />
        {isOpen && (
          <Card className="absolute z-10 top-11 p-2 w-full">
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <Item
                  key={item.value}
                  value={item.value}
                  label={item.label}
                  onClick={() => {
                    setSelected(item);
                    setValue("search", item.label);
                    setIsOpen(false);
                  }}
                />
              ))
            ) : (
              <div className="text-center">No results found</div>
            )}
            {filteredData.length > 5 && (
              <div className="flex justify-center">
                <button>
                  <ChevronRight
                    className="h-4 w-4"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  />
                </button>
              </div>
            )}
          </Card>
        )}
      </div>
    );
  },
);
export default SearchSelect;
