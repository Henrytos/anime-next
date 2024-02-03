import { Button } from "@/_components/ui/button";
import { TableCell, TableRow } from "@/_components/ui/table";
import { useQuerys } from "@/_contexts/context-querys";
import { Search } from "@/_lib/action-historic";
import { formaterDate, formaterTime, formaterTitle } from "@/_lib/formater";
import { SearchIcon, Trash } from "lucide-react";
import Link from "next/link";

interface TableRowQuerysProps {
  search: Search;
}
export function TableRowQuerys({ search }: TableRowQuerysProps) {
  const { deleteOneQuery } = useQuerys();
  const handleClickDelete = () => deleteOneQuery(search?.id ?? "");
  return (
    <TableRow key={search.id}>
      <TableCell className=" text-muted-foreground font-light">
        {formaterDate.format(search.createdAt)}
      </TableCell>
      <TableCell className="p-0 hidden sm:block sm:pt-[27px] text-muted-foreground">
        {formaterTime.format(search.createdAt)}
      </TableCell>
      <TableCell className="w-full font-medium">
        {formaterTitle(search.query, 30)}
      </TableCell>
      <TableCell className="text-right  ">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="border rounded "
          asChild
        >
          <Link href={`/query?q=${search.query}`}>
            <SearchIcon className="inline w-4 h-4" />
          </Link>
        </Button>
      </TableCell>
      <TableCell className="text-right ">
        <Button
          size={"icon"}
          variant={"ghost"}
          className="border rounded "
          onClick={handleClickDelete}
        >
          <Trash className="inline w-4 h-4" />
        </Button>
      </TableCell>
    </TableRow>
  );
}
