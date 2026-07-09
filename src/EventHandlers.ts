import { USDC } from "generated";

USDC.Transfer.handler(async ({ event, context }) => {
  context.Transfer.set({
    id: event.transactionHash + "-" + event.logIndex.toString(),
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  });
});

