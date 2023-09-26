import { SDK } from "./sdks/ts/src/";
import { V2FraudCheckByIdGetResponse } from "./sdks/ts/src/sdk/models/operations";

const sdk = new SDK({
  security: {
    bearerAuth: "testing",
  },
});

sdk.fraud
  .v2FraudCheckByIdGet({
    id: "12cc0270-7bed-11e9-a188-1763956dd7f6",
    merchantId: "991234567890",
    minorVersion: "1",
  })
  .then((res: V2FraudCheckByIdGetResponse) => {
    if (res.statusCode == 200) {
      // handle response
    }
  });
