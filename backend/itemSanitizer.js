import sanitizeHtml from 'sanitize-html';
import {z} from 'zod';

export const itemSanitizer = z.object({
    item: z.string().min(1).transform((val) => sanitizeHtml(val.trim())),
    description: z.string().min(1).transform((val) => sanitizeHtml(val.trim())).optional(),
    startPrice: z.coerce.number().min(0).optional(),
    reservePrice: z.coerce.number().min(1).optional()    
}).strip();