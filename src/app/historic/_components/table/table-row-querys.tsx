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
      <TableCell className="font-medium">
        {formaterDate.format(search.createdAt)}
      </TableCell>
      <TableCell>{formaterTime.format(search.createdAt)}</TableCell>
      <TableCell>{formaterTitle(search.query, 30)}</TableCell>
      <TableCell className="text-right w-20">
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
      <TableCell className="text-right w-20">
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
