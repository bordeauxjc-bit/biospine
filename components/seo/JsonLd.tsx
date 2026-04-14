/**
 * Renders a JSON-LD <script> tag for structured data. Server component-safe.
 * Schema objects are built in components/seo/schemas.ts.
 */
type Props = {
  data: Record<string, unknown> | Record<string, unknown>[];
  id?: string;
};

export function JsonLd({ data, id }: Props) {
  return (
    <script
      type="application/ld+json"
      id={id}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
