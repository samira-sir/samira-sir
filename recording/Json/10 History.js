const videosList = [
    { video: 'https://drive.google.com/file/d/1BVsKzUVroDfaVXQa4jqL5bg_tJYsmXlZ/preview', title: '2024-08-03 1' },
    { video: 'https://drive.google.com/file/d/1isj0pW7dlMYFveq5QnoNL9Wgf4p2yWKk/preview', title: '2024-08-03 2' },
    { video: 'https://drive.google.com/file/d/1n4GHFYg9PwY45vQ4NIpURCIAyreD61IE/preview', title: '2024-08-03 3' },
    { video: 'https://drive.google.com/file/d/1EH5zSHZIICoZXcef3dzPa4afpZF1gK-d/preview', title: '2024-08-09 1' },
{ video: 'https://drive.google.com/file/d/1JrBN61q-Sne94YWP2OMWzJhvqoNLnluI/preview', title: '2024-08-09 2' },
{ video: 'https://drive.google.com/file/d/1eA_G87BN4k4a2DIr2cVQ7nBppWcYl-u7/preview', title: '2024-08-09 3' },
{ video: 'https://drive.google.com/file/d/1TVrcCz32o_nFB4ibDvvOSsEtxo3Rulp5/preview', title: '2024 08 16 1' },
{ video: 'https://drive.google.com/file/d/17-3zBBHNpRU8g3mHrCgcfOcZfC8k2Wy7/preview', title: '2024 08 16 2' },
{ video: 'https://drive.google.com/file/d/1rHCO3_eKmXfd5k4kVGeaVpMRlCFSWs6w/preview', title: '2024 08 16 3' },
    { video: 'https://drive.google.com/file/d/1XZZShkDwuiXDAbGj967N13GKgFXhDzAM/preview', title: '2024 08 23 1' },
    { video: 'https://drive.google.com/file/d/1WEQAkdAlSb5ilppvJQBbJQTWhjlT4a8a/preview', title: 'Grade 10 History 2024-09-06 Part 1' },
{ video: 'https://drive.google.com/file/d/1WmBKBCgSAT_9sN3Ob2ssWqOC-YrOPt5G/preview', title: 'Grade 10 History 2024-09-06 Part 2' },
{ video: 'https://drive.google.com/file/d/1YOT2p9vgCrokiu-h9lnzhJtPlWUBOgc5/preview', title: 'Grade 10 History 2024-09-06 Part 3' },
{ video: 'https://drive.google.com/file/d/1sjQ4xYFvRsB0NJCPSdrmag9j6C7KNSOh/preview', title: 'Grade 10 History 2024-09-13 Part 1' },
{ video: 'https://drive.google.com/file/d/1oCqKSvi3o8X8Q4dcpw9iBUYyAuQjmak4/preview', title: 'Grade 10 History 2024-09-13 Part 2' },
{ video: 'https://drive.google.com/file/d/1SrkhPjTmap8gwN5ATjjGq3WFi1oeSSA-/preview', title: 'Grade 10 History 2024-09-13 Part 3' },
{ video: 'https://drive.google.com/file/d/1cRjXyfC6MIjYe6strl7YC41DHMWuQ1gU/preview', title: 'Grade 10 History 2024-09-20 Part 1' },
{ video: 'https://drive.google.com/file/d/1To9Dhj2eLrKrlFZiAyzHX2cBKhq71aq1/preview', title: 'Grade 10 History 2024-09-20 Part 2' },
{ video: 'https://drive.google.com/file/d/1jYOpqcdpmCxDoFcKw75T1WnkfE0daTqO/preview', title: 'Grade 10 History 2024-09-20 Part 3' },
{ video: 'https://drive.google.com/file/d/1ACr67Ro3U1jXePSgWshPmMaqkXYCOWOD/preview', title: 'Grade 10 History 2024-09-27 Part 1' },
{ video: 'https://drive.google.com/file/d/1fX9bFmbfgKeKEbYoGqsBBG5daY9QdsRs/preview', title: 'Grade 10 History 2024-09-27 Part 2' },
{ video: 'https://drive.google.com/file/d/1sYdDSBsxUOS2cpW-N6gPfrhyfSZfb9nS/preview', title: 'Grade 10 History 2024-09-27 Part 3' },
{ video: 'https://drive.google.com/file/d/1SBTbxA9dWTTAinA_TdWnjdLdJaf5np__/preview', title: 'Grade 10 History 2024-10-04 Part 1' },
{ video: 'https://drive.google.com/file/d/1HTB-85AGRVbQhGk2qq0NvlTtNQgLEhyQ/preview', title: 'Grade 10 History 2024-10-04 Part 2' },
{ video: 'https://drive.google.com/file/d/141yE6EDbrxW7oDa2QgAvbQX3yBfAhbhO/preview', title: 'Grade 10 History 2024-10-04 Part 3' },
{ video: 'https://drive.google.com/file/d/1lz3KiJY7xMmulTtGDL2Cbq867h5fOZZF/preview', title: 'Grade 10 History 2024-10-08 paper Part 1' },
{ video: 'https://drive.google.com/file/d/1eE3D3S4hLS2DIyX5LVuM5s7ZBR5qXB4T/preview', title: 'Grade 10 History 2024-10-08 paper Part 2' },
{ video: 'https://drive.google.com/file/d/19OYKYmw10aQ3iEmSlLlhhhHn7OZeIaB9/preview', title: 'Grade 10 History 2024-10-11 Part 1' },
{ video: 'https://drive.google.com/file/d/1rDlHTR5Z137dgNHQJshHc3cI7zvbKMr1/preview', title: 'Grade 10 History 2024-10-11 Part 2' },
{ video: 'https://drive.google.com/file/d/1Pbd8--zCPi-cRcPwx8dcuG0hMZry_u-E/preview', title: 'Grade 10 History 2024-10-11 Part 3' },



















    
];
