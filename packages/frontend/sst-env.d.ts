/* This file is auto-generated by SST. Do not edit. */
/* tslint:disable */
/* eslint-disable */
/* deno-fmt-ignore-file */
import "sst"
export {}
declare module "sst" {
  export interface Resource {
    "ApiFn": {
      "name": string
      "type": "sst.aws.Function"
      "url": string
    }
    "Database": {
      "name": string
      "type": "sst.aws.Dynamo"
    }
    "Frontend": {
      "type": "sst.aws.TanstackStart"
      "url": string
    }
    "Router": {
      "type": "sst.aws.Router"
      "url": string
    }
    "Storage": {
      "name": string
      "type": "sst.aws.Bucket"
    }
  }
}