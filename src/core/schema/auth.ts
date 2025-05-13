import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập Email').email('Email không hợp lệ'),
  password: z
    .string()
    .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
    .regex(/[A-Z]/, 'Mật khẩu phải có ít nhất 1 chữ cái viết hoa')
    .regex(/[a-z]/, 'Mật khẩu phải có ít nhất 1 chữ cái thường')
    .regex(/[0-9]/, 'Mật khẩu phải có ít nhất 1 số')
})

export const registerSchema = z
  .object({
    email: z.string().min(1, 'Vui lòng nhập Email').email('Email không hợp lệ'),
    name: z.string().min(6, 'Tên hiển thị phải có ít nhất 6 ký tự'),
    password: z
      .string()
      .min(8, 'Mật khẩu phải có ít nhất 8 ký tự')
      .regex(/[A-Z]/, 'Mật khẩu phải có ít nhất 1 chữ cái viết hoa')
      .regex(/[a-z]/, 'Mật khẩu phải có ít nhất 1 chữ cái thường')
      .regex(/[0-9]/, 'Mật khẩu phải có ít nhất 1 chữ số'),
    confirmPassword: z.string().min(1, 'Vui lòng nhập lại mật khẩu')
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Mật khẩu nhập lại không khớp'
  })

export type registerSchema = z.infer<typeof registerSchema>

export const fortgotPassSchema = z.object({
  email: z.string().min(1, 'Vui lòng nhập Email').email('Email không hợp lệ')
})
