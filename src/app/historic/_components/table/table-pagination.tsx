import { Button } from "@/_components/ui/button";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/_components/ui/pagination";
import { TableCaption } from "@/_components/ui/table";
import clsx from "clsx";
import Link from "next/link";

interface TablePaginationProps {
  pageCurrent: number;
  quantityPages: number;
}
export function TablePagination({
  pageCurrent,
  quantityPages,
}: TablePaginationProps) {
  const nextPage =
    quantityPages > pageCurrent + 1 ? +pageCurrent + 1 : pageCurrent;
  const previousPage = pageCurrent >= 1 ? pageCurrent - 1 : pageCurrent;
  return (
    <TableCaption>
      <Pagination>
        <PaginationContent className="space-x-4">
          <PaginationItem>
            <PaginationPrevious href={`historic?pagination=${previousPage}`} />
          </PaginationItem>

          {Array.from({ length: quantityPages }).map((_, i) => (
            <PaginationItem key={i}>
              <Button
                size={"icon"}
                variant={"secondary"}
                className={clsx({ "bg-zinc-600": i == pageCurrent })}
                asChild
              >
                <Link href={`historic?pagination=${i}`}>{i}</Link>
              </Button>
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext href={`historic?pagination=${nextPage}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </TableCaption>
  );
}
