# resume
Resume

## GitHub Action: DOCX to PDF artifact + email

This repo includes a workflow at `.github/workflows/docx-to-pdf-email.yml` that runs on every push:

1. Detects changed `.docx` files in the pushed commit.
2. Converts them to PDF using LibreOffice.
3. Uploads generated PDF file(s) as a GitHub Actions artifact.
4. Sends the generated PDF file(s) over Brevo SMTP relay.

Set these repository secrets:

- `BREVO_SMTP_PASSWORD`
- `RESUME_EMAIL_FROM` (must be a verified sender in Brevo)
