declare type callbackPayloadFunction = (
  result: boolean,
  error: string | null
) => void;

export declare type callbackPayload = callbackPayloadFunction | null;
