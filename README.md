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

## GitHub Pages resume site

An animated resume website is available in `docs/` and can be published with GitHub Pages.

1. Open **Settings → Pages** in the repository.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch **main** and folder **/docs**.
4. Save and wait for Pages to publish.
