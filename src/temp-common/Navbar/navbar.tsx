"use client";
import Link from "next/link";
import { Check, ChevronsUpDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { easeInOut, motion } from "motion/react";
const frameworks = [
  {
    value: "/about",
    label: "About",
  },
  {
    value: "/education",
    label: "Education",
  },
  {
    value: "/project",
    label: "Project",
  },
  {
    value: "/resume",
    label: "Resume",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const router = useRouter();

  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <>
      <motion.div
        className={`w-full h-11 flex items-center md:pr-9 md:pl-9 justify-between pr-4 pl-4`}
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: easeInOut }}
      >
        <div className={`flex gap-5 items-center w-full h-full`}>
          <div className={`flex items-center gap-2`}>
            <div className={`w-6 h-6 bg-[#80d8da] rounded-full`}></div>
            <Link href={`/`} className={`font-bold text-xl hidden md:block`}>
              Andrean Gwen
            </Link>
          </div>
          <p className="text-xs text-black/50 font-semibold">
            <span className="block md:inline">Computer Science</span>{" "}
            <span className="block md:inline">Student</span>
          </p>
        </div>
        {/* Desktop */}
        <div
          className={`md:flex items-center divide-x divide-gray-300 text-sm text-gray-600 hidden`}
        >
          <Link
            href={`/about`}
            className={`px-3 hover:text-black hover:underline underline-offset-4`}
          >
            About
          </Link>
          <Link
            href={`/education`}
            className={`px-3 hover:text-black hover:underline underline-offset-4`}
          >
            Education
          </Link>
          <Link
            href={`/project`}
            className={`px-3 hover:text-black hover:underline underline-offset-4`}
          >
            Project
          </Link>
          <Link
            href={`/resume`}
            className={`px-3 hover:text-black hover:underline underline-offset-4`}
          >
            Resume
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-35 h-8 px-2 text-xs justify-between"
              >
                {value
                  ? frameworks.find((f) => f.value === value)?.label
                  : "Home"}
                <ChevronsUpDown className="h-3 w-3 opacity-50" />
              </Button>
            </PopoverTrigger>

            <PopoverContent className="w-35 p-0">
              <Command>
                <CommandList>
                  <CommandGroup>
                    {frameworks.map((framework) => (
                      <CommandItem
                        key={framework.value}
                        value={framework.value}
                        className="text-xs"
                        onSelect={(currentValue) => {
                          setValue(currentValue);
                          setOpen(false);
                          router.push(framework.value);
                        }}
                      >
                        {framework.label}
                        <Check
                          className={cn(
                            "ml-auto h-3 w-3",
                            value === framework.value
                              ? "opacity-100"
                              : "opacity-0",
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
