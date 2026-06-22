# resume
Resume

## GitHub Action: DOCX to PDF email

This repo includes a workflow at `.github/workflows/docx-to-pdf-email.yml` that runs on every push:

1. Detects changed `.docx` files in the pushed commit.
2. Converts them to PDF using LibreOffice.
3. Emails the generated PDF file(s).

Configured SMTP relay:

- Server: `smtp-relay.brevo.com`
- Port: `587`
- Login: `af9602001@smtp-brevo.com`
- Recipient: `adityadua1992@gmail.com`

Set these repository secrets before using it:

- `BREVO_SMTP_PASSWORD`
- `RESUME_EMAIL_FROM` (must be a verified sender in Brevo)
