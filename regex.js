//* ========================================
//*                     REGEX
//* ========================================

//!  bar ber bir bor bur            başı sonu aynı ortası farklı
//!  /b[aeiou]r/g

//! bar ber bir bor bur           e ve o hariç hepsini bul
//! /b[^eo]r/g

//? abcdefghijklmnopqrstuvwxyz           iki harf aralığını bul. e ve o arasını mesela
//? /[e-o]/g

//? 0123456789
//? /[3-6]/g
