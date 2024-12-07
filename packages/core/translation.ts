import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { Entity } from "electrodb";
import { Resource } from "sst";
import { type } from "arktype";
const client = new DynamoDBClient();

const table = Resource.Database.name;

export const Translation = new Entity(
    {
        model: {
            entity: "translation",
            version: "1",
            service: "localization",
        },
        attributes: {
            language: {
                type: "string",
            },
            namespace: {
                type: "string",
            },
            version: {
                type: "string",
            },
            key: {
                type: "string",
            },
            translation: {
                type: "string",
            },
            projectId: {
                type: "string",
            }
        },
        indexes: {
            byLanguage: {
                pk: {
                    field: "pk",
                    composite: ["projectId", "version", "language", "namespace"],
                },
                sk: {
                    field: "sk",
                    composite: ["key"],
                },
            },
        },
    },
    { client, table },
);

export const TranslationDefinition = type({
    language: "string",
    key: "string",
    translation: "string",
    namespace: "string",
    version: "string",
    projectId: "string"
});

export type TranslationType = typeof TranslationDefinition.infer;