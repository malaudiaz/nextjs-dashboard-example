'use server';

import { z } from 'zod';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

import postgres from 'postgres';

const sql = postgres(`postgres://${process.env.PGSQL_USER}:${process.env.PGSQL_PASSWORD}@${process.env.PGSQL_HOST}:${process.env.PGSQL_PORT}/${process.env.PGSQL_DATABASE}`);

const CustomerSchema = z.object({
    id: z.string(),
    name: z.string().trim().min(1, { message: "Required" }),
    email: z.string().email("correo incorrecto"),
    image_url: z.string({
        invalid_type_error: 'Please enter customer image url.',
    }),
});

const CreateCustomerFormSchema = CustomerSchema.omit({ id: true });

export type CustomerState = {
    errors?: {
        id?: string[];
        name?: string[];
        email?: string[];
        image_url?: string[];
    };
    message?: string | null;
};

export async function createCustomer(formData: FormData) {
    const validatedFields = CreateCustomerFormSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        image_url: formData.get('image_url'),
      });
    
      // If form validation fails, return errors early. Otherwise, continue.
      if (!validatedFields.success) {
        return {
          errors: validatedFields.error.flatten().fieldErrors,
          message: 'Missing Fields. Failed to Create Invoice.',
        };
      }
    
      // Prepare data for insertion into the database
      const { name, email, image_url } = validatedFields.data;
    
    
        //  Insert data into the database
        try {
            await sql`INSERT INTO customers (name, email, image_url) VALUES (${name}, ${email}, ${image_url})`;
        } catch (error) {
            // If a database error occurs, return a more specific error.
            return {
                message: 'Database Error: Failed to Create Customer.',
            };
        }
    
        revalidatePath('/dashboard/customers');
        redirect('/dashboard/customers');
    
}


