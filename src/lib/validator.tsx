import z from "zod"

const CardValidation = z.object(
    {
        from_network: z.string().min(1, "Required"),
        from_token: z.string().min(1, "Required"),
        from_amount: z.string().min(1, "Required"),
        from_balance: z.string().min(1, "Required"),
        from_total: z.string().min(1, "Required"),
        to_network: z.string().min(1, "Required"),
        to_token: z.string().min(1, "Required"),
        to_amount: z.string().min(1, "Required"),
        to_balance: z.string().min(1, "Required"),
        to_total: z.string().min(1, "Required"),
    }
)

export type CardFormData = z.infer<typeof CardValidation>;

export default CardValidation;