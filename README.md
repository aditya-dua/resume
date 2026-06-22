# resume
Resume

## GitHub Action: DOCX to PDF artifact

This repo includes a workflow at `.github/workflows/docx-to-pdf-email.yml` that runs on every push:

1. Detects changed `.docx` files in the pushed commit.
2. Converts them to PDF using LibreOffice.
3. Uploads generated PDF file(s) as a GitHub Actions artifact.

No email setup or repository secrets are required.
