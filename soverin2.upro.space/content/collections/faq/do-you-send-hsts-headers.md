---
id: 7bf6d78e-bb26-49df-9f82-0f9748407b9a
blueprint: faq
title: 'Do you send HSTS headers?'
author: fbe3713b-ee52-445b-91d7-de37bd0e8d85
category_faq:
  - encryption-and-security
updated_by: fbe3713b-ee52-445b-91d7-de37bd0e8d85
updated_at: 1725525012
---
Yes. HTTP Strict Transport Security (HSTS) means we send headers to your browser telling it to always communicate securely with Soverin. If your connection is hijacked and some other site pretends to be Soverin this will fail because your browser will force https. We use this for all our websites including webmail.