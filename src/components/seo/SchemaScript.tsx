import { client } from "@/sanity/lib/client";

const PAGE_SCHEMA_QUERY = `
  *[_type == "page" && slug.current == $slug][0].customSchema
`;

interface SchemaScriptProps {
    id?: string;
    schema?: string;
    slug?: string;
}

export async function SchemaScript({ id, schema, slug }: SchemaScriptProps) {
    let schemaData = schema;

    if (slug && !schemaData) {
        try {
            schemaData = await client.fetch(PAGE_SCHEMA_QUERY, { slug });
        } catch (error) {
            console.error("Error fetching schema:", error);
        }
    }

    if (!schemaData) return null;

    return (
        <script
            id={id || "schema-json-ld"}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: schemaData }}
        />
    );
}
