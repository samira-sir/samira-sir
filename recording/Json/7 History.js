const videosList = [
    { video: 'https://drive.google.com/file/d/1gKhNsXhGTyqI6FpKedZdt2DyCoSL1mVD/preview', title: '2024 07 25' },
    { video: 'https://drive.google.com/file/d/1hGOiwhOL6t_GorZR9FmKh0Q7wwoxyWkY/preview', title: '2024 07 25' },
    { video: 'https://drive.google.com/file/d/1oJil8AAdlc_-ybpVmoBol9HQfpRjS-Bg/preview', title: '2024 07 25' },
    { video: 'https://drive.google.com/file/d/1Esma7liPoSLb4PWQnekqvgQ0d1Y_fjC7/preview', title: '2024 07 30 part 1' },
    { video: 'https://drive.google.com/file/d/1lFGMT-WFwSJp3ARlm7qwirZU6o8j94O8/preview', title: '2024 07 30 part 2' },
    { video: 'https://drive.google.com/file/d/1Q6XclvW08x1CV-l2uqNz-_KSJVgC0VJK/preview', title: '2024 07 30 part 3' },
    { video: 'https://drive.google.com/file/d/11hGRZNy-FbXd7HcMMcn6Dp-GC3A0tK3H/preview', title: '2024 08 06 part 1' },
    { video: 'https://drive.google.com/file/d/1Oa1Vph4pJWQZRGwnTL75o2K_ntfT6n29/preview', title: '2024 08 06 part 2' },
{ video: 'https://drive.google.com/file/d/1YNPCua76rrA4nJf7mBE3w8wXVo7YbwHu/preview', title: '2024 08 06 part 3' },
{ video: 'https://drive.google.com/file/d/1Z2OtReJik29UsgBYnn9pfaX7kMJVVYJe/preview', title: '2024 08 13 part 1' },
{ video: 'https://drive.google.com/file/d/1EI7wjn9cWkGhaHYScGiPXpbiFjK_8qTm/preview', title: '2024 08 13 part 2' },
{ video: 'https://drive.google.com/file/d/1UzhUxNzi6w5RrKjJJUsgkn52QOI1tOjI/preview', title: '2024 08 13 part 3' },
{ video: 'https://drive.google.com/file/d/1SDyPSJf55Ecej9G8NgnfzySYxxJ5zD7d/preview', title: '2024 08 23 part 1' },
{ video: 'https://drive.google.com/file/d/1AhoPvSMrCqD49xk_uGmyJAqQ2-iu3UxM/preview', title: '2024 08 23 part 2' },
{ video: 'https://drive.google.com/file/d/1MvpU5oDCpFkxbuqBKz4FQl4uc0qSLG6E/preview', title: '2024 08 23 part 3' },
{ video: 'https://drive.google.com/file/d/1O3TLJJ-pR5jaluzKX-c_MV-Ka4Hv7xo-/preview', title: '2024 08 23 part 4' },
{ video: 'https://drive.google.com/file/d/1MfY1yEnPXWb2LvZSSOja6pNRzFGpbQe-/preview', title: '2024 08 27 part 1' },
{ video: 'https://drive.google.com/file/d/10UYcNPOviLBHPZrDkv5AiBlTNt6JC862/preview', title: '2024 08 27 part 2' },
{ video: 'https://drive.google.com/file/d/1UhlEr0AdNte5L87bRpXiBsx1jNMhj6OX/preview', title: '2024 08 27 part 3' },	
{ video: 'https://drive.google.com/file/d/1Jq8LxCVE7ytP0pnU6lKH0GTZY7KXDSSq/preview', title: '2024 09 03 part 1' },
{ video: 'https://drive.google.com/file/d/1Bxs-XklV9pfzDf5ej2B8kDG2mgAUiSoR/preview', title: '2024 09 03 part 2' },
{ video: 'https://drive.google.com/file/d/104rc5Fjm61U_P9mBOYZfFXRsu1eipCq2/preview', title: '2024 09 03 part 3' },	
    { video: 'https://drive.google.com/file/d/1mzl73Mr9ICNHO_yCtWxgn7IAed50uup6/preview', title: 'Grade 7 History 2024-09-10 Part 1' },
{ video: 'https://drive.google.com/file/d/1IP5kwuNKT9uBM_TJ_AZ5U8FCJVCnrt_p/preview', title: 'Grade 7 History 2024-09-10 Part 2' },
{ video: 'https://drive.google.com/file/d/15ww119ZxQtYRZ5zNH9qMUcHlnZwDOSrG/preview', title: 'Grade 7 History 2024-09-10 Part 3' },
{ video: 'https://drive.google.com/file/d/1Q7GnivPOmn5d3eEAfRBYwcY9jLJXKOYM/preview', title: 'Grade 7 History 2024-09-24 Part 1' },
{ video: 'https://drive.google.com/file/d/15Cru-1hAqJVWvnJ-WE1ESXaAvujtRQyC/preview', title: 'Grade 7 History 2024-09-24 Part 2' },
{ video: 'https://drive.google.com/file/d/1NbtBHZgMER7r9598t6AhA3nBB_5ckddn/preview', title: 'Grade 7 History 2024-09-24 Part 3' },
{ video: 'https://drive.google.com/file/d/19Xha0uAFlNbcno4BZLooL9MPA3ufPATS/preview', title: 'Grade 7 History 2024-09-29 Part 1' },
{ video: 'https://drive.google.com/file/d/1wdo4Ny9S0jDeWbz9nyEhNQigAxrzyPC5/preview', title: 'Grade 7 History 2024-09-29 Part 2' },
{ video: 'https://drive.google.com/file/d/1Hfovj3-Wbk4AqfDUhnElMtapOm8MAsE6/preview', title: 'Grade 7 History 2024-09-29 Part 3' },

 












];
