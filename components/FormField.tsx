import React from 'react'
import { FormLabel, FormItem, FormControl, FormMessage } from '@/components/ui/form'; // Adjust the import path as necessary
import { Input } from '@/components/ui/input'; // Adjust the import path as necessary
import { Controller, FieldValues, Path, Control } from 'react-hook-form';

interface FormFieldProps<T extends FieldValues> {
  control: Control<T>; // Replace with the correct type for your control
  name: Path<T>;
  label: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'file'; // Default to "text"
}

const FormField = <T extends FieldValues>({control, name, label, placeholder, type = "text"}: FormFieldProps<T>) => (
    <Controller control={control} name={name} render={({ field }) => (
                <FormItem>
                  <FormLabel className="label">{label}</FormLabel>
                  <FormControl>
                    <Input className="input" placeholder={placeholder} type={type} {...field} />
                  </FormControl>
                  
                  <FormMessage />
                </FormItem>
              )}
    />
);

export default FormField
