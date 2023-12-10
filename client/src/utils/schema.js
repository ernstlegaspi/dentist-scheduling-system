import { z } from 'zod'

export const birthdaySchema = z.object({
	days: z.string(),
	months: z.string(),
	years: z.string()
})
.strict()

export const loginSchema = z.object({
	email: z.string().email(),
	password: z.string()
})
.strict()

export const registerSchema = z.object({
	birthday: z.string(),
	email: z.string().email(),
	name: z.string(),
	password: z.string(),
	phoneNumber: z.string(),
	sex: z.string()
})
.strict()
