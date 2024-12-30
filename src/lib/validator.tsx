import z from "zod"

const CardValidation = z.object({
    case: z.enum(["swap", "buy", "sell"]).default("swap").optional(),
    from_network: z.string().min(1, "Required"),
    from_token: z.string().min(1, "Required"),
    from_amount: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), "Must be a number")
        .transform((val) => parseFloat(val))
        .refine((val) => val >= 1 && val <= 250, "range"),
    from_balance: z.string().min(1, "Required"),
    from_total: z.string().min(1, "Required"),
    to_network: z.string().min(1, "Required"),
    to_token: z.string().min(1, "Required"),
    to_amount: z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), "Must be a number")
        .transform((val) => parseFloat(val))
        .refine((val) => val >= 1 && val <= 250, "range"),
    to_balance: z.string().min(1, "Required"),
    to_total: z.string().min(1, "Required"),
});

export type CardFormData = z.infer<typeof CardValidation>;

export default CardValidation;
