"use client";

import { Registration } from "@/lib/zod";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Registration>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell({ row }) {
      return (
        <span>
          {row.original.first_name} {row.original.last_name}
        </span>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "country",
    header: "Country",
  },
  {
    accessorKey: "country_of_ministry",
    header: "Country of ministry",
  },
  {
    accessorKey: "state_of_ministry",
    header: "State of ministry",
  },
  {
    accessorKey: "phone_number",
    header: "Phone Number",
  },
  {
    accessorKey: "gender",
    header: "Gender",
    cell({ row }) {
      const value: string = row.getValue("gender");

      return (
        <span>{value === "F" ? "Female" : value === "M" ? "Male" : " - "}</span>
      );
    },
  },
  {
    accessorKey: "attending_via",
    header: "Attending Via",
    cell({ row }) {
      const value: string = row.getValue("attending_via");

      return (
        <span className='text-center capitalize'>{!value ? " - " : value}</span>
      );
    },
  },
  {
    accessorKey: "minister_status",
    header: "Minister",
    cell({ row }) {
      const value: boolean = row.getValue("minister_status");

      if (value === false)
        return (
          <div className='h-6 px-2 py-1 bg-[#fbeae9] rounded-xl flex-col justify-center items-center gap-2 inline-flex'>
            <div className='justify-center items-center inline-flex'>
              <div className='px-1 justify-center items-center flex'>
                <span className='text-center text-[#d3251f] text-xs font-medium'>
                  No
                </span>
              </div>
            </div>
          </div>
        );
      else if (value == true)
        return (
          <div className='h-6 px-2 py-1 bg-[#e7f6ec] rounded-xl flex-col justify-center items-center gap-2 inline-flex'>
            <div className='justify-center items-center inline-flex'>
              <div className='px-1 justify-center items-center flex'>
                <span className='text-center text-[#036b26] text-xs font-medium'>
                  Yes
                </span>
              </div>
            </div>
          </div>
        );
      else return <span>-</span>;
    },
  },
  {
    accessorKey: "role_in_ministry",
    header: "Role",
  },
  {
    accessorKey: "name_of_ministry",
    header: "Ministry",
  },
];
