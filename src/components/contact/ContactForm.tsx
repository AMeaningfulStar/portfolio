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
    // Step 8 이후 실제 이메일 전송 또는 외부 폼 연동 가능
    console.log('contact form submit', form)
  }

  return (
    <section className="contact-form">
      <h3 className="h3 form-title">Contact Form</h3>

      <form className="form" data-form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Full name"
            required
            value={form.fullname}
            onChange={onChange('fullname')}
          />

          <input
            type="email"
            name="email"
            className="form-input"
            placeholder="Email address"
            required
            value={form.email}
            onChange={onChange('email')}
          />
        </div>

        <textarea
          name="message"
          className="form-input"
          placeholder="Your Message"
          required
          value={form.message}
          onChange={onChange('message')}
        />

        <button className="form-btn" type="submit" disabled={!isValid}>
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  )
}
