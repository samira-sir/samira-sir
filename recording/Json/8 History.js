const videosList = [
     { video: 'https://drive.google.com/file/d/1K4t32IfMXd_2m2QlnVpDtzL3-_KvVIrF/preview', title: '2024 07 25' },
    { video: 'https://drive.google.com/file/d/1OKmkIuNPsCqF08MXs5UWOWAdTCq_0WP3/preview', title: '2024 08 01 03' },
    { video: 'https://drive.google.com/file/d/1GXuR9inu6e678P7XkBM2EghdSrIvhWw-/preview', title: '2024 08 01 02' },
    { video: 'https://drive.google.com/file/d/1gcsCWEntcOXSN6UYLW-TvqYcecerIjAV/preview', title: '2024 08 01 01' },
{ video: 'https://drive.google.com/file/d/12TrNnDmv5-y8egCeYvUF7TWQ3pXljB_k/preview', title: '2024 08 08 01' },
    { video: 'https://drive.google.com/file/d/1UFOF89RxWOUQZ6kH4z0_vjXb1EwAQ284/preview', title: '2024 08 08 02' },
    { video: 'https://drive.google.com/file/d/1R-sWbwsXS7xnyf_okvtibzmFx2nbJ5sI/preview', title: '2024 08 08 03' },
{ video: 'https://drive.google.com/file/d/1XGfsJAvF9cZLxWEPBkiTIO2sktugR1xU/preview', title: '2024 08 15 01' },
{ video: 'https://drive.google.com/file/d/1tyi3U_AhJZCYntwNdG_9MVSTqECMrJDn/preview', title: '2024 08 15 02' },
    { video: 'https://drive.google.com/file/d/17HuFl3IpHIBRx5T2yunqUJhmuTVgcpii/preview', title: '2024 08 15 03' },
    { video: 'https://drive.google.com/file/d/1cJW0rDSJ2g5dAV6ELtTuSTbM2_vClm2x/preview', title: '2024 08 15 04' },
{ video: 'https://drive.google.com/file/d/178gIY5avl6aCKXyUkTUEQTnGq-oo9cNl/preview', title: '2024 08 22 01' },
{ video: 'https://drive.google.com/file/d/1LpEc1yfwlMT9Gr9p__LA_8CghSuupO-i/preview', title: '2024 08 22 02' },
    { video: 'https://drive.google.com/file/d/1Bv9raer4j3J2Dyj99GogbQqFIC3qjT0O/preview', title: '2024 08 22 03' },
    { video: 'https://drive.google.com/file/d/1BqD7fOKGUZPtDt6IUPAsRV3WvaNlTaQ_/preview', title: '2024 08 22 04' },
{ video: 'https://drive.google.com/file/d/178gIY5avl6aCKXyUkTUEQTnGq-oo9cNl/preview', title: '2024 08 29 01' },
{ video: 'https://drive.google.com/file/d/1LpEc1yfwlMT9Gr9p__LA_8CghSuupO-i/preview', title: '2024 08 29 02' },
    { video: 'https://drive.google.com/file/d/1Bv9raer4j3J2Dyj99GogbQqFIC3qjT0O/preview', title: '2024 08 29 03' },
    { video: 'https://drive.google.com/file/d/1BqD7fOKGUZPtDt6IUPAsRV3WvaNlTaQ_/preview', title: '2024 08 29 04' },
  { video: 'https://drive.google.com/file/d/1K3V4stynS_M3Vpv0Ms0egIQONkvSawst/preview', title: 'Grade 8 History 2024-09-12 Part 1' },
{ video: 'https://drive.google.com/file/d/1GxIK6dgbcpUU9KVFQITM2MQME5vEjdJj/preview', title: 'Grade 8 History 2024-09-12 Part 2' },
{ video: 'https://drive.google.com/file/d/11XBhVcoUcxbiQrO6ePczluviBo25hHjO/preview', title: 'Grade 8 History 2024-09-12 Part 3' },
{ video: 'https://drive.google.com/file/d/10fK5EHVbpAUXrRf0CUfW8TBUPI0Lcs-k/preview', title: 'Grade 8 History 2024-09-19 Part 1' },
{ video: 'https://drive.google.com/file/d/1faz82YyiKA-ROqGdWf0oCF0EabukDZQr/preview', title: 'Grade 8 History 2024-09-19 Part 2' },
{ video: 'https://drive.google.com/file/d/1K8Hdseuv-58tIxlzNLl1OilvSJrflDUt/preview', title: 'Grade 8 History 2024-09-19 Part 3' },
{ video: 'https://drive.google.com/file/d/1fPGzykHrLpctuFeYQ-TCymHJXcouD0va/preview', title: 'Grade 8 History 2024-09-26 Part 1' },
{ video: 'https://drive.google.com/file/d/1HgAQ72FEnvzagv_RhaK1_6FE3bOJ6Pxw/preview', title: 'Grade 8 History 2024-09-26 Part 2' },
{ video: 'https://drive.google.com/file/d/1E-Y3m5nJ6CNx4O37iHMjSTavVOjx8Se1/preview', title: 'Grade 8 History 2024-09-26 Part 3' },
{ video: 'https://drive.google.com/file/d/1nUB7kDE_ZCkfWxtprEixRw0hopsD0gei/preview', title: 'Grade 8 History 2024-10-03 Part 1' },
{ video: 'https://drive.google.com/file/d/1HUySIfDmpJ5CCBoY9gz0D22wRSl352jf/preview', title: 'Grade 8 History 2024-10-03 Part 2' },
{ video: 'https://drive.google.com/file/d/1dn_YiQLl6SmOllOxm6XfpEZTEZ5EDU8O/preview', title: 'Grade 8 History 2024-10-03 Part 3' },
{ video: 'https://drive.google.com/file/d/1lBVSF6imwq4Pk20YIfT4Bz3sSmMzfNfw/preview', title: 'Grade 8 History 2024-10-10 Part 1' },
{ video: 'https://drive.google.com/file/d/1XbaI5bXGYVLMdLaO6XDJHWIujJxCbIyh/preview', title: 'Grade 8 History 2024-10-10 Part 2' },
{ video: 'https://drive.google.com/file/d/1rK5w5rkBh49dKAPh8or98DwRX2B0ZVyx/preview', title: 'Grade 8 History 2024-10-10 Part 3' },























];
