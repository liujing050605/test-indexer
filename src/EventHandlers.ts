import { indexer, USDC } from "envio";

indexer.onEvent(
  { contract: "USDC", event: "Transfer" },
  async ({ event, context }) => {
  context.Transfer.set({
    id: event.transactionHash + "-" + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  });
}
);

