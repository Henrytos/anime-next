"use client";
import { Container } from "@/_components/constainer";
import { Content } from "@/_components/details/content";
import { SubTitle } from "@/_components/sub-title";
import { Button } from "@/_components/ui/button";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "@/_components/ui/table";
import { useQuerys } from "@/_contexts/context-querys";
import { Trash } from "lucide-react";

import { TablePagination } from "./_components/table/table-pagination";
import { TableRowQuerys } from "./_components/table/table-row-querys";

interface PageHistoriQuerysProps {
  params: {};
  searchParams: {
    pagination: number;
  };
}

export default function PageHistoriQuerys(props: PageHistoriQuerysProps) {
  const { name, querys, deleteAllQuery } = useQuerys();
  const pageActual = props.searchParams.pagination;
  const quantity = 8;

  const quantityPages = Math.ceil(querys.length / quantity);

  const listQuerys = querys.slice(
    pageActual * quantity,
    pageActual * quantity + quantity
  );

  const handleClickDeleteAll = () => {
    deleteAllQuery(querys[0]?.userId);
  };

  return (
    <Container>
      <Content>
        <div className="flex justify-between items-end ">
          {name ? (
            <SubTitle>Historic de {name}</SubTitle>
          ) : (
            <SubTitle>Please Sing in to Gogle</SubTitle>
          )}
          {name && (
            <Button variant={"destructive"} onClick={handleClickDeleteAll}>
              <Trash size={20} />
              <span>Delete all</span>
            </Button>
          )}
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-24">Date</TableHead>
              <TableHead>Time</TableHead>
              <TableHead>Query</TableHead>
              <TableHead className="text-right">Search</TableHead>
              <TableHead className="text-right">Delete</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {listQuerys.map((search) => (
              <TableRowQuerys search={search} key={search.id} />
            ))}
          </TableBody>

          <TablePagination
            pageCurrent={pageActual}
            quantityPages={quantityPages}
          />
        </Table>
      </Content>
    </Container>
  );
}
