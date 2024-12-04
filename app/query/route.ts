import { db } from '@vercel/postgres';

export async function GET() {
  const client = await db.connect();

  try {
    await client.sql`BEGIN`;

    const result = await client.sql`
      SELECT invoices.amount, customers.name
      FROM invoices
      JOIN customers ON invoices.customer_id = customers.id
      WHERE invoices.amount = 666;
    `;

    await client.sql`COMMIT`;

    return Response.json(result.rows);
  } catch (error) {
    await client.sql`ROLLBACK`;

    return Response.json({ error }, { status: 500 });
  }
}
