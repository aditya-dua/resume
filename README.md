# resume
Resume

## GitHub Action: DOCX to PDF email

This repo includes a workflow at `.github/workflows/docx-to-pdf-email.yml` that runs on every push:

1. Detects changed `.docx` files in the pushed commit.
2. Converts them to PDF using LibreOffice.
3. Emails the generated PDF file(s).

Set these repository secrets before using it:

- `SMTP_SERVER` (example: `smtp.gmail.com`)
- `SMTP_PORT` (example: `465`)
- `SMTP_USERNAME`
- `SMTP_PASSWORD` (for Gmail, use an app password)
- `RESUME_EMAIL_FROM`
- `RESUME_EMAIL_TO`
