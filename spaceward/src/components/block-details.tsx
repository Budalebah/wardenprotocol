// import {
//   Card,
//   CardContent,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { formatDateTime } from "@/lib/datetime";
// import { Button } from "./ui/button";
// import { Link } from "react-router-dom";
// import TxDetails from "./tx-details";
// import CardRow from "./card-row";

function BlockDetails({ block }: { block: any }) {
  return "TODO: needs work after upgrade to cosmos v0.50."

  // return (
  //   <Card>
  //     <CardHeader>
  //       <CardTitle>Block info</CardTitle>
  //     </CardHeader>
  //     <CardContent className="space-y-2">
  //       <CardRow label="Hash">{block.block_id.hash}</CardRow>
  //       <CardRow label="Height">{block.block.header.height}</CardRow>
  //       <CardRow label="Timestamp">{formatDateTime(block.block.header.time)}</CardRow>
  //       <CardRow label="Transactions">{block.block.data.txs.length} txs</CardRow>
  //
  //       <div className="flex flex-row gap-4 pt-8">
  //         <Link to={`/explorer/block_by_height/${-1 + parseInt(block.block.header.height, 10)}`}>
  //           <Button variant="secondary">
  //             Previous block
  //           </Button>
  //         </Link>
  //         <Link to={`/explorer/block_by_height/${1 + parseInt(block.block.header.height, 10)}`}>
  //           <Button variant="secondary">
  //             Next block
  //           </Button>
  //         </Link>
  //       </div>
  //
  //       <div>
  //         {
  //           block.block.data.txs.map((tx, i) => (
  //             <TxDetails key={tx.hash} index={i} tx={tx} />
  //           ))
  //         }
  //       </div>
  //     </CardContent>
  //     <CardFooter className="flex justify-between">
  //     </CardFooter>
  //   </Card>
  // );
}

export default BlockDetails;
