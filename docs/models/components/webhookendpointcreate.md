# WebhookEndpointCreate

Schema to create a webhook endpoint.

## Example Usage

```typescript
import { WebhookEndpointCreate } from "@polar-sh/sdk/models/components/webhookendpointcreate.js";

let value: WebhookEndpointCreate = {
  url: "https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0",
  format: "slack",
  events: [
    "refund.updated",
  ],
  organizationId: "1dbfc517-0bbf-4301-9ba8-555ca42b9737",
};
```

## Fields

| Field                                                                                                                   | Type                                                                                                                    | Required                                                                                                                | Description                                                                                                             | Example                                                                                                                 |
| ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `url`                                                                                                                   | *string*                                                                                                                | :heavy_check_mark:                                                                                                      | The URL where the webhook events will be sent.                                                                          | https://webhook.site/cb791d80-f26e-4f8c-be88-6e56054192b0                                                               |
| ~~`secret`~~                                                                                                            | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | : warning: ** DEPRECATED **: This will be removed in a future release, please migrate away from it as soon as possible. | polar_whs_ovyN6cPrTv56AApvzCaJno08SSmGJmgbWilb33N2JuK                                                                   |
| `format`                                                                                                                | [components.WebhookFormat](../../models/components/webhookformat.md)                                                    | :heavy_check_mark:                                                                                                      | N/A                                                                                                                     |                                                                                                                         |
| `events`                                                                                                                | [components.WebhookEventType](../../models/components/webhookeventtype.md)[]                                            | :heavy_check_mark:                                                                                                      | The events that will trigger the webhook.                                                                               |                                                                                                                         |
| `organizationId`                                                                                                        | *string*                                                                                                                | :heavy_minus_sign:                                                                                                      | The organization ID associated with the webhook endpoint. **Required unless you use an organization token.**            | 1dbfc517-0bbf-4301-9ba8-555ca42b9737                                                                                    |