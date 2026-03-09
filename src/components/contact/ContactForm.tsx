import { contactFormMeta } from '@/data/contact'
import { useMemo, useState } from 'react'

export default function ContactForm() {
  const [form, setForm] = useState({
    fullname: '',
    email: '',
    message: '',
  })

  const isValid = useMemo(() => {
    return form.fullname.trim().length > 0 && form.email.trim().length > 0 && form.message.trim().length > 0
  }, [form])

  const onChange =
    (field: 'fullname' | 'email' | 'message') => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({
        ...prev,
        [field]: e.target.value,
      }))
    }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log('contact form submit', form)
  }

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">{contactFormMeta.title}</h3>

      <form className="form" data-form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <input
            type={contactFormMeta.fields.fullname.type}
            name={contactFormMeta.fields.fullname.name}
            className="form-input"
            placeholder={contactFormMeta.fields.fullname.placeholder}
            required
            value={form.fullname}
            onChange={onChange('fullname')}
          />

          <input
            type={contactFormMeta.fields.email.type}
            name={contactFormMeta.fields.email.name}
            className="form-input"
            placeholder={contactFormMeta.fields.email.placeholder}
            required
            value={form.email}
            onChange={onChange('email')}
          />
        </div>

        <textarea
          name={contactFormMeta.fields.message.name}
          className="form-input"
          placeholder={contactFormMeta.fields.message.placeholder}
          required
          value={form.message}
          onChange={onChange('message')}
        />

        <button className="form-btn" type="submit" disabled={!isValid}>
          <ion-icon name="paper-plane"></ion-icon>
          <span>{contactFormMeta.submitText}</span>
        </button>
      </form>
    </section>
  )
}
