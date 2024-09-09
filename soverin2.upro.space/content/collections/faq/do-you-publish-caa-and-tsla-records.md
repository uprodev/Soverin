---
id: ec55e42c-c68b-4912-8814-e8c27a7afc5f
blueprint: faq
title: 'Do you publish CAA and TSLA records?'
author: fbe3713b-ee52-445b-91d7-de37bd0e8d85
category_faq:
  - encryption-and-security
updated_by: fbe3713b-ee52-445b-91d7-de37bd0e8d85
updated_at: 1725524983
---
Yes. We use DNS-based Authentication of Named Entities (TLSA) and DNS Certification Authority Authorization to tell mail servers and browsers about our certificates. This allows browsers and mail servers to verify they are talking to Soverin by verifying the fingerprints of our certificates and the provider of our certificates.