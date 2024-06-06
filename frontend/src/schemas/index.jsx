import * as Yup from "yup"

export const signUpSchema = Yup.object({
    username:Yup.string().min(2).max(25).required(" Please Enter your name"),
    password:Yup.string().min(7).max(12).required("password range should be between 7 to 12"),
    confirmPassword:Yup.string().min(7).max(12).required().oneOf([Yup.ref("password"),null],"Password must match"),
    email:Yup.string().email().required("Please enter your email")
})

export const addressSchema = Yup.object({
  streetAddress: Yup.string()
    .required("Street Address is required")
    .max(100, "Limit exceeded, maximum 100 characters"),
  city: Yup.string()
    .required("City is required")
    .max(10, "Limit exceeded, maximum 10 characters"),
  state: Yup.string()
    .required("State/Province is required")
    .max(10, "Limit exceeded, maximum 10 characters"),
  zipCode: Yup.string()
    .required("ZIP/Postal Code is required")
    .max(6, "Limit exceeded, maximum 6 characters"),
  country: Yup.string()
    .required("Country is required")
    .max(7, "Limit exceeded, maximum 7 characters"),
});

// export const signUpScheam = Yup.object({
//     username:Yup.string().min(2).max(20).required("Please enter the username"),
//     password:Yup.string().min(7).max(12).required("Enter  the password")
//     confirm_password:Yup.string().min(2).max(12).required().oneof([Yup.ref("password"),null])

// })