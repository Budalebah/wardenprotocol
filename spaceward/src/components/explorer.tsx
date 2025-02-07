import { useQueries } from "@tanstack/react-query";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { formatDateTime } from "@/lib/datetime";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useCosmosBaseTendermintV1Beta1 from "@/hooks/useCosmosBaseTendermintV1Beta1";
import { useClient } from "@/hooks/useClient";

export default function Explorer() {
  const { ServiceGetLatestBlock } = useCosmosBaseTendermintV1Beta1();
  const latestBlock = ServiceGetLatestBlock({});

  const data = latestBlock.data;
  const latestHeight = parseInt(data?.block?.header?.height || "0", 10);

  const client = useClient();
  const blocks = useQueries({
    queries: latestHeight ? Array.from({ length: 10 }, (_, i) => ({
      queryKey: ["block", latestHeight - i],
      queryFn: () => client.CosmosBaseTendermintV1Beta1.query.serviceGetBlockByHeight((latestHeight - i).toString()),
      refetchInterval: Infinity,
    })) : [],
  });

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Block</TableHead>
          <TableHead>Created at</TableHead>
          <TableHead>Proposer</TableHead>
          <TableHead className="text-right">Transactions count</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {
          blocks.filter(q => !!q.data).map((q) => (
            <Block key={q.data?.data.block_id?.hash} data={q.data!} />
          ))
        }
      </TableBody>
    </Table>
  );
}

function Block({ data }: { data: any }) {
  return (
    <TableRow className={data.block.data.txs.length === 0 ? "opacity-50 hover:opacity-100" : ""}>
      <TableCell className="font-medium">
        <div className="flex flex-col gap-1">
          <span>Block #{data.block.header.height}</span>
          <span className="font-mono text-xs">{data.block_id.hash.slice(0, 20)}...</span>
        </div>
      </TableCell>
      <TableCell>
        {formatDateTime(data.block.header.time)}
      </TableCell>
      <TableCell>
        <span className="font-mono">{data.block.header.proposer_address}</span>
      </TableCell>
      <TableCell className="text-right">{data.block.data.txs.length} txs</TableCell>
      <TableCell className="text-right">
        <Button variant="outline">
          <Link to={`/explorer/block_by_height/${data.block.header.height}`}>Details</Link>
        </Button>
      </TableCell>
    </TableRow>
  );
}
