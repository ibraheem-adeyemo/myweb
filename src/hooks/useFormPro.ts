import { ContactFormData } from "@/components/contact/ContactInfo.types"
import { useState } from "react"


export const useFormPro = () => {
    const initialContactFormData = {
        name:'',
        phone: '',
        email: '',
        message: ''
    }

    const [contactFormData, setContactFormData] = useState<ContactFormData>(initialContactFormData);

    const updateContactFormData = (field:string, value:string | string []) => {
        console.log(field, value)
        setContactFormData(prev => (
            {
                ...prev,
                [field] : value,
            }
        ))
    }

    return {
        contactFormData,
        initialContactFormData,
        updateContactFormData
    }
}