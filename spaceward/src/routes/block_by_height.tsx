import BlockDetails from "@/components/block-details";
import useCosmosBaseTendermintV1Beta1 from "@/hooks/useCosmosBaseTendermintV1Beta1";
import { Params, useLoaderData } from "react-router-dom";

function BlockByHeightPage() {
  const { height } = useLoaderData() as Awaited<ReturnType<typeof loader>>;
  const { ServiceGetBlockByHeight } = useCosmosBaseTendermintV1Beta1();
  const q = ServiceGetBlockByHeight(height, { refetchInterval: Infinity });

  if (!q.data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Block #{height}</h2>
        </div>
      </div>
      <BlockDetails block={q.data} />
    </div>
  );
}

export function loader({ params }: { params: Params<string> }) {
  if (!params.height) {
    throw new Error("No height provided");
  }

  return { height: params.height };
}

export default BlockByHeightPage;
