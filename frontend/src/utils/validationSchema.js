import * as yup from 'yup'
export function validationSchema(){
    return yup.object({
        username: yup.string().max(14,"Cannot be more than 14").required("Username required"),
        email: yup.string().email("Invalid Email Id").trim().required("Email required").max(20,"Cannot be more than 20"),
        password:yup.string().trim().required("Password required").min(8,"Password must be greater than 8 charcters"),
        confirmPassword:yup.string().required("Confirm password required").trim().oneOf([yup.ref('password')],"Password must match")

    })
}