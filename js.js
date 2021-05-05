//! 1 dãy Finbonaci

function finbonaci(num){
    if(num<=1) return 1;
    return finbonaci(num-1)+finbonaci(num-2);
}
console.log(finbonaci(5));

//! 2.Giai thừa của n
function giaiThua1(n){
    if(n==1) return 1;
    return n* giaiThua1(n-1);
}
console.log(giaiThua1(5));

//! 3.Tính S(n) = 1 + 2 + 3 + ... + n - 1 + n
function sn3(n){
    if(n==1) return 1;
    return n+sn3(n-1);
}
console.log(sn3(5));

//! 4.Tính S(n) = 1^2 + 2^2 + 3^2 + ... + (n-1)^2 + n^2
function snPow2(n){
    if(n==1) return 1;
    return Math.pow(n,2)+snPow2(n-1)
}
console.log(snPow2(5));

//! 5.Tính S(n) = 1 + 1/2 + 1/3 + ... + 1/n
function phanSo(n){
    if(n<=1) return 1;
    return 1/n+ phanSo(n-1);
}
console.log(phanSo(3));

//! 6.Tính S(n) = 1/2 + 1/4 + ... + 1/2n
function phanSo1(n){
    if(n<=1) return 1/(2*n);
    return 1/(2*n) + phanSo1(n-1);
}
console.log(phanSo1(5));

//! 7.Tính S(n) = 1/3 + 1/5 + ... + 1/(2n+1)
function phanSo2(n){
    if(n==1) return 1/(2*n+1);
    return 1/(2*n+1) + phanSo2(n-1);
}
console.log(phanSo2(5));

//! 8.Tính S(n) = 1/(1*2) + 1/(2*3) + 1/((n-1)*n)
function phanSo3(n){
    if(n==1) return 1/((n-1)*n);
    return 1/((n-1)*n) + phanSo3(n-1);
}
console.log(phanSo3(5));

//! 9.Tính S(n) = 1/2 + 2/3 + 3/4 + ... + n/(n+1)
function phanSo4(n){
    if(n==0) return 0;
    return n/(n+1) + phanSo4(n-1)
}
console.log(phanSo4(3));

//! 10.Tính S(n) = 1/2 + 3/4 + 5/6 + ... + (2n+1)/(2n+2)
function phanSo5(n){
    if(n<0) return 0;
    return ((2*n+1)/(2*n+2)) + phanSo5(n-1);
}
console.log(phanSo5(1));

//! 11.Tính T(n) = 1*2*3*.....*n
function giaiThua(n){
    if(n==1) return 1;
    return n* giaiThua(n-1);
}
console.log(giaiThua(4));

//! 12.Tính T(x,n) = x^n
function T(x,n){
    return Math.pow(x,n);
}
console.log(T(2,3));

//! 13.Tính S(n) = 1 + 1.2 + 1.2.3 + .... + 1.2.3....n
function tongGiaiThua(n){
    if(n==1) return 1;
    return giaiThua(n)+tongGiaiThua(n-1);
}
console.log(tongGiaiThua(4));

//! 14.Tính S(x,n) = x + x^2 + x^3 + ... + x^n
function tongLuyThua(x,n){
    if(n==1) return x;
    return T(x,n)+tongLuyThua(x,n-1)
}
console.log(tongLuyThua(2,5));

//! 15.Tính S(x,n) = x^2 + x^4 +.... + x^2n
function tongLuyThua1(x,n){
    if(n<=0) return 0;
    return T(x,2*n)+tongLuyThua1(x,n-1)
}
console.log(tongLuyThua1(2,5));

//! 16.Tính S(x,n) = x + x^3 + x^5 +....+ x^(2n+1)
function tongLuyThua2(x,n){
    if(n<=0) return 0;
    return T(x,2*n+1)+tongLuyThua2(x,n-1)
}
console.log(tongLuyThua2(2,5));

//! 17.Tính S(n) = 1 + 1/(1+2) + 1/(1+2+3) + ... + 1/(1+2+3+...+n)
function tongPhanso01(n){
    if(n<=0) return 0;
    return 1/sn3(n)+tongPhanso01(n-1)
}
console.log(tongPhanso01(5));

//! 18.Tính S(x,n) = x + (x^2)/2! + (x^3)/3! + ... + (x^n)/n!
function tongPhanSoLuyThua(x,n){
    if(n<=0) return 0;
    return T(x,n)/n + tongPhanSoLuyThua(x,n-1)
}
console.log(tongPhanSoLuyThua(2,5));

//! 19.Tính S(x,n) = 1 + (x^2)/2! + (x^4)/4! + ... + (x^2n)/(2n)!
function tongPhanSoLuyThua2(x,n){
    if(n<=0) return 0;
    return T(x,2*n)/n + tongPhanSoLuyThua2(x,n-1)
}
console.log(tongPhanSoLuyThua2(2,5));

//! 20.Hãy đếm số lượng chữ số của số nguyên dương n
function demChuSo(n){
    if(n==0) return 0;
    if(n<10) return 1;
    return 1+ demChuSo(n/10);
}
console.log(demChuSo(23990))

//! 21.Hãy tính tổng các chữ số của số nguyên dương n
function tongCacChuSoN(n){
    if(n<10) return n;
    return n%10+tongCacChuSoN(Math.floor(n/10))
}
console.log(tongCacChuSoN(91111));

//! 22.Hãy tính tích các chữ số của số nguyên dương n
function tichCacChuSoN(n){
    if(n<10) return n;
    return n%10*tichCacChuSoN(Math.floor(n/10))
}
console.log(tichCacChuSoN(923));

//! 23.Hãy đếm số lượng chữ số lẻ của số nguyên dương n
function cacSoLeCuaN(n){
    if(n<=0) return 0;
    else{
        if(n%2!=0) return 1+cacSoLeCuaN(Math.floor(n/10))
        else return cacSoLeCuaN(Math.floor(n/10));
    }
}
console.log(cacSoLeCuaN(92356677));
console.log(cacSoLeCuaN(357));

//! 24.Hãy tính tổng các chữ số chẵn của số nguyên dương n
function tongSoChanCuaN(n){
    if(n<=0) return 0;
    else{
        if(n%2==0) return n%10 + tongSoChanCuaN(Math.floor(n/10))
        else return tongSoChanCuaN(Math.floor(n/10));
    }
}
console.log(tongSoChanCuaN(92356677));

//! 25.Hãy tính tích các chữ số lẻ của số nguyên dương n
function tichCacSoLeCuaN(n){
    if(n<=0) return 1;
    else{
        if(n%2!=0) return (n%10) *tichCacSoLeCuaN(Math.floor(n/10))
        else return tichCacSoLeCuaN(Math.floor(n/10));
    }
}
console.log(tichCacSoLeCuaN(523663));

//! 26.Cho số nguyên dương n . Hãy tìm chữ số đầu tiên của n
function chuSoDauCuaN(n){
    if(n<=9) return n;
    else  return chuSoDauCuaN(Math.floor(n/10))
}
console.log(chuSoDauCuaN(987));

//! 27.Hãy tìm chữ số đảo ngược của số nguyên dương n
function timSoDaoNguoc(n){
    if(n<=9) return n;
    else {
        return n%10*T(10,demChuSo(n)-1) + timSoDaoNguoc(Math.floor(n/10))
    }
}
console.log(timSoDaoNguoc(12345))

//! 28.Tìm chữ số lớn nhất của số nguyên dương n
function timChuSoLonNhat(n){
    if(n<10 ) return n;
    if(n%10 > timChuSoLonNhat(Math.floor(n/10))){
        return n%10;
    }else{
        return timChuSoLonNhat(Math.floor(n/10));
    }
}
console.log(timChuSoLonNhat(1234));

//! 29.Tìm chữ số nhỏ nhất của số nguyên dương n
function timChuSoNhoNhat(n){
    if(n<10 ) return n;
    if(n%10 < timChuSoNhoNhat(Math.floor(n/10))){
        return n%10;
    }else{
        return timChuSoNhoNhat(Math.floor(n/10));
    }
}
console.log(timChuSoNhoNhat(1234));

//! 30.Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không?
function kiemTraSoLe(n){
    if(cacSoLeCuaN(n)==demChuSo(n)) return true;
    else return false;
}
console.log(kiemTraSoLe(123456789));
console.log(kiemTraSoLe(3579));

//! 31.Hãy kiểm tra số nguyên dương n có toàn chữ số chẵn hay không?
function kiemTraSoChan(n){
    if(cacSoLeCuaN(n)==0) return true;
    else return false;
}
console.log(kiemTraSoChan(2468));
console.log(kiemTraSoChan(3579));