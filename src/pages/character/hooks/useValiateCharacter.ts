import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';

export const useValiateCharacter = () => {
  const initialValues = z.object({
    name: z.string().nonempty({ message: 'El nombre es requerido' }),
    status: z.string().nonempty({ message: 'El nombre es requerido' }),
    species: z.string().nonempty({ message: 'La especie es requerido' }),
    type: z.string().nonempty({ message: 'El tipo es requerido' }),
    gender: z.string().nonempty({ message: 'El genero es requerido' }),
    image: z.url({ message: 'La imagen no es valida' }),
  });
  type FormData = z.infer<typeof initialValues>;
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(initialValues),
  });
  return { register, handleSubmit, errors, watch, reset, initialValues };
};
