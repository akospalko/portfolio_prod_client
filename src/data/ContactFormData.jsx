// Component to return contact form data state initializer
import { useTranslation } from 'react-i18next'

const ContactFormData = () => {
  // HOOK
  const { t } = useTranslation()

  // DATA
  const initializeContactFormData = () => {
    const nameMinLength = 2
    const nameMaxLength = 100
    const emailMaxLength = 100
    const subjectMaxLength = 100
    const messageMinLength = 10
    const messageMaxLength = 1500

    return {
      name: {
        fieldType: 'input',
        type: 'text',
        name: 'name',
        value: '',
        placeholder: t('contact-form-name-placeholder'),
        validation: {
          required: true,
          minLength: nameMinLength,
          maxLength: nameMaxLength,
        },
        touched: false,
        valid: false,
      },
      email: {
        fieldType: 'input',
        type: 'email',
        name: 'email',
        value: '',
        placeholder: t('contact-form-email-placeholder'),
        required: true,
        validation: {
          required: true,
          maxLength: emailMaxLength,
          isEmail: true,
        },
        touched: false,
        valid: false,
      },
      subject: {
        fieldType: 'input',
        type: 'text',
        name: 'subject',
        value: '',
        placeholder: t('contact-form-subject-placeholder'),
        validation: {
          required: true,
          maxLength: subjectMaxLength,
        },
        touched: false,
        valid: false,
      },
      message: {
        fieldType: 'textarea',
        type: 'text',
        name: 'message',
        value: '',
        placeholder: t('contact-form-message-placeholder'),
        validation: {
          required: true,
          minLength: messageMinLength,
          maxLength: messageMaxLength,
        },
        wordCount: 0,
        touched: false,
        valid: false,
      },
    }
  }
  
  return initializeContactFormData
}

export default ContactFormData