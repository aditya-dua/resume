# resume
Resume

## GitHub Action: DOCX to PDF email

This repo includes a workflow at `.github/workflows/docx-to-pdf-email.yml` that runs on every push:

1. Detects changed `.docx` files in the pushed commit.
2. Converts them to PDF using LibreOffice.
3. Emails the generated PDF file(s).

Set these repository secrets before using it (Brevo API):

- `BREVO_API_KEY`
- `RESUME_EMAIL_FROM` (must be a verified sender in Brevo)
- `RESUME_EMAIL_TO`
