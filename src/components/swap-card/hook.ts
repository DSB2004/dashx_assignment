import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import CardValidation, { CardFormData } from '@/lib/validator';


export default function useHook() {
    const [currentSection, setSection] = useState<"swap" | "buy" | "sell">("swap");
    const { register, handleSubmit, setValue,getValues, formState: { errors }, setError } = useForm<CardFormData>({
        resolver: zodResolver(CardValidation),
    });


    const handleInterChange = () => {
        const data = getValues();
        const result = CardValidation.safeParse(data);
        if (!result.success) {
            result.error.errors.forEach((err) => {
                // @ts-ignore
                setError(err.path[0], { type: 'manual', message: err.message });
            });
            return;
        }
        const temp = { ...data };
        setValue('from_amount', data.to_amount);
        setValue('from_network', data.to_network);
        setValue('from_balance', data.to_balance);
        setValue('from_token', data.to_token);
        setValue('from_total', data.to_total);
        setValue('to_amount', temp.from_amount);
        setValue('to_network', temp.from_network);
        setValue('to_balance', temp.from_balance);
        setValue('to_token', temp.from_token);
        setValue('to_total', temp.from_total);
    };

    const onSubmit = (data: CardFormData) => {

        if (data.case === 'swap') {
            handleInterChange();
        } else {

            console.log(currentSection, data);
        }
    }


    return {
        handleSubmit,
        onSubmit,
        register,
        currentSection,
        getValues,
        setSection,
        setValue,
        errors
    };
};

