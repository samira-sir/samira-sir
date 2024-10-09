const videosList = [
    { video: 'https://drive.google.com/file/d/16X04qs6Ui6pVvo07NZkYv9bL-r8azNzw/preview', title: '2024 07 22' },
    { video: 'https://drive.google.com/file/d/1vCp-KlDXyrzOVN9tQGjowF8Y5XLXFnbz/preview', title: '2024 07 22' },
    { video: 'https://drive.google.com/file/d/1FEbTDpBQcHIcbJPVAftEbWwapA1jGW2v/preview', title: '2024 07 22' },
    { video: 'https://drive.google.com/file/d/1Is6d4TpNZKOGCuPqGJCjlnzNHe9g0uDv/preview', title: '2024 07 29 1' },
    { video: 'https://drive.google.com/file/d/10Xa6aP3C7tBIgTCvwCbYuM6IzVA_YTTx/preview', title: '2024 07 29 2' },
    { video: 'https://drive.google.com/file/d/1aHETSZLiLTaPBrKN6O0Cii_g-VBWjslR/preview', title: '2024 07 29 3' },
    { video: 'https://drive.google.com/file/d/1FVvLd94mRw624h-2J6UgyGKzeS37D0wD/preview', title: '2024 07 29 4' },
    { video: 'https://drive.google.com/file/d/1VaE2PnASpMjIPvlpj3A5yvYlFy5i5EQv/preview', title: '2024 08 12 01' },
    { video: 'https://drive.google.com/file/d/11ZQ6MlsashKHg0s-kZceIs_xAWztBkQA/preview', title: '2024 08 12 02' },
    { video: 'https://drive.google.com/file/d/1mFAgVYWbGBFgjjWx1oW5XLHjZe34q2Qn/preview', title: '2024 08 12 03' },
    { video: 'https://drive.google.com/file/d/1QjW5RPd2eU8CgNXIlUCV_YDkkjv4C39I/preview', title: '2024 08 12 04' },
{ video: 'https://drive.google.com/file/d/1lcUAcYO3-5vAwJ0KHsoC9NIfQsMOT_yp/preview', title: '2024 08 19 01' },
    { video: 'https://drive.google.com/file/d/1H_kapIEPxKaW6NN5Nz-xSrFXlcJUe9P-/preview', title: '2024 08 19 02' },
    { video: 'https://drive.google.com/file/d/1MUO26gLfrOZyDwgrOVM7jAVJzTjkJ3nH/preview', title: '2024 08 19 03' },
{ video: 'https://drive.google.com/file/d/1jR77xE7ArobCkcL07HFsEA_u2CBv0dlD/preview', title: '2024 08 26 01' },
    { video: 'https://drive.google.com/file/d/1Tp9mXm32Ej4ztzKAO9yD0ty7me_4Scqf/preview', title: '2024 08 26 02' },
    { video: 'https://drive.google.com/file/d/1a_rrdtJAgBhpyKiS8qXMYZ17PA0PiRzm/preview', title: '2024 08 26 03' },
{ video: 'https://drive.google.com/file/d/1N5xPkMOaFQRrp_QytpN0TC8GuqLOCHG-/preview', title: '2024 09 02 01' },
    { video: 'https://drive.google.com/file/d/1YlpN89RsDiWUowM9JkaWIeo8OzL4BnPZ/preview', title: '2024 09 02 02' },
    { video: 'https://drive.google.com/file/d/1lpluevislu5BWzRJSetTom4R4p52rpWL/preview', title: '2024 09 02 03' },
    { video: 'https://drive.google.com/file/d/1_EYLYA71BlO2ee7xZ_x0c8NTLxu1nNZb/preview', title: 'Grade 10 Geo 2024-09-09 Part 1' },
{ video: 'https://drive.google.com/file/d/1WPKKOvMfHnZeivM7wyRLn2qIrzl5P72S/preview', title: 'Grade 10 Geo 2024-09-09 Part 2' },
{ video: 'https://drive.google.com/file/d/1zjvsX_Q6Oe0ugfF23_99WzsiF3VfCjO0/preview', title: 'Grade 10 Geo 2024-09-09 Part 3' },
{ video: 'https://drive.google.com/file/d/1ZXgfSuRagbqCqGh-m9hiZDNW-goo-wdL/preview', title: 'Grade 10 Geo 2024-09-16 Part 1' },
{ video: 'https://drive.google.com/file/d/1mBpCR7-FSxllLfAyBR0n40JpsDvG1SxW/preview', title: 'Grade 10 Geo 2024-09-16 Part 2' },
{ video: 'https://drive.google.com/file/d/1IlPkEuUjLjnmBiqLXwzN8-88VK5ti0lR/preview', title: 'Grade 10 Geo 2024-09-16 Part 3' },
{ video: 'https://drive.google.com/file/d/1yE6nv7DuyHWHqX4c7niHeOBeYjyBXoPE/preview', title: 'Grade 10 Geo 2024-09-23 Part 1' },
{ video: 'https://drive.google.com/file/d/1MKxbvnShBKqMVuzFxZEGSwKJNC_z5H3z/preview', title: 'Grade 10 Geo 2024-09-23 Part 2' },
{ video: 'https://drive.google.com/file/d/1hjPY3fxeuf_sGt6ecoREo7ysVGJaY_Hi/preview', title: 'Grade 10 Geo 2024-09-23 Part 3' },
{ video: 'https://drive.google.com/file/d/1JVBdeIJYY7GadXLyYanzaOiJftss9iY0/preview', title: 'Grade 10 Geo 2024-10-01 Part 1' },
{ video: 'https://drive.google.com/file/d/1sxHa7dzKtd5MpFVaa5ddyfSO1T6O0Vyq/preview', title: 'Grade 10 Geo 2024-10-01 Part 2' },
{ video: 'https://drive.google.com/file/d/1vGiVuIwIeDWfF9cO-05B6CQkslgbdnNM/preview', title: 'Grade 10 Geo 2024-10-01 Part 3' },
{ video: 'https://drive.google.com/file/d/1uQRM5VDEsymZlfHwoVicR5Q94brtlTRq/preview', title: 'Grade 10 Geo 2024-10-01 Part 4' },
{ video: 'https://drive.google.com/file/d/1RxrhiVzMis1WAavCGJT5sHsNc9gXh6oi/preview', title: 'Grade 10 Geo 2024-10-07 Part 1' },
{ video: 'https://drive.google.com/file/d/1yVXv77VhrlHyStmNy7_w3ZdFEX_5iqXv/preview', title: 'Grade 10 Geo 2024-10-07 Part 2' },
{ video: 'https://drive.google.com/file/d/1IXbvVMVRtGUcoNR-Bys87cQoyb4VqOKn/preview', title: 'Grade 10 Geo 2024-10-07 Part 3' },




















    
];
