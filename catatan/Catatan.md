# Pengantar React UI Component
***Di modul sebelumnya, Anda telah belajar tentang konsep dasar yang ada di React. Anda sudah tahu bahwa React menganut konsep composition, declarative code, unidirectional data flow, dan React hanyalah JavaScript. Anda juga sudah mengenal secara singkat bahwa React element dan component adalah dua hal yang sering digunakan dalam membangun UI.***

Modul ini akan membahas lebih dalam tentang element dan component di React dengan poin-poin seperti berikut.

- Membuat React element dan component pertama.
- Mengenal component properties.
- Komposisi component.

Membuat aplikasi menggunakan React berdasarkan studi kasus “Aplikasi Buku Kontak”.
Bersiaplah! Materi di modul ini akan terasa lebih panjang. Siapkan jari jemari Anda untuk mulai menuliskan kode ya! Jika sudah tidak sabar, Anda bisa menekan tombol selanjutnya.

# React Element
Seluruh antarmuka pengguna (UI) aplikasi React dibangun menggunakan React element. Sama seperti DOM element, React element dapat berupa paragraf, heading, atau gambar. React element merepresentasikan apa yang Anda lihat di layar [3].

![Alt text](image-2.png)

Walaupun serupa dengan DOM element, React element dan DOM element browser tidaklah identik. React element hanyalah objek JavaScript polos, ringan, dan sangat mudah untuk dibuat. Cara paling sederhana dalam membuat React element adalah menggunakan fungsi berikut.

```React.createElement(/* type */, /* property */, /* content */);```


Fungsi createElement menerima 3 parameter, seperti: 

type yang merupakan tipe elemen, 
property merupakan properti dari elemen, dan
content merupakan konten dari elemen.
Fungsi createElement mengembalikan React element sesuai dengan tipe yang ditetapkan pada parameter. Contoh, bila Anda ingin membuat elemen paragraf “Hello React”, gunakanlah fungsi createElement seperti ini.

```const element = React.createElement('p', null, 'Hello, React!');```

Jika Anda telaah nilai kembaliannya (element), React element hanyalah objek JavaScript biasa.

```
{
  type: 'p',
  props: {
    children: 'Hello, React!',
  },
}
```


Nilai dari parameter type mendeskripsikan tipe dari React elemen yang akan dikembalikan. React menggunakan referensi HTML tags untuk menentukan tipe elemen. Jadi, nilai p berarti paragraf, h1 berarti heading tingkat 1, img berati gambar, dan seterusnya.

Lalu, bagaimana bila kita ingin menetapkan properti pada elemen? Pertanyaan bagus! Untuk melakukannya, Anda bisa memanfaatkan parameter kedua (property) dengan memberikan nilai berupa objek yang mendeskripsikan properti elemen yang ingin ditetapkan beserta nilainya. Contoh, bila Anda ingin menetapkan nilai pada properti className atau id, lakukanlah dengan cara seperti di bawah ini.


```
const element = React.createElement(
  'p',
  {
    id: 'myParagraph',
    className: 'red-paragraph'
  },
  'Hello, React!'
);
```


**Catatan:** React menggunakan Element Properties dalam menetapkan properti pada React element. Itulah mengapa dalam menetapkan class, kita menggunakan className dibandingkan dengan class.

Penting untuk Anda ingat bahwa Element Properties dengan HTML Attribute itu berbeda meskipun beberapa nilai properti merepresentasikan nilai dari HTML atribut. React selalu menggunakan Element Properties sebagai referensi.


Nested React Element
Nilai children pada React element dapat diisi dengan tipe data apa pun, termasuk React element lain. Hal ini sangat wajar dan sering digunakan untuk membangun elemen secara nested.

Jika Anda sudah terbiasa membuat web, tentu Anda sering membuat struktur HTML nested seperti mengelompokkan beberapa element di dalam div.

```<div class="container">
  <h1>React</h1>
  <p>The <strong>best tool</strong> for building UI</p>
</div>
```

Ketika menggunakan React, praktik tersebut lazim dan dapat dibuat dengan cara menetapkan nilai parameter child secara nested. Jika child memiliki lebih dari satu nilai, Anda bisa mengelompokkan nilainya di dalam array.

```
import React from 'react';

const heading = React.createElement('h1', null, 'React');
const strong = React.createElement('strong', null, 'best tool');
const paragraph = React.createElement('p', null, ['The ', strong, ' for building UI']);
const divContainer = React.createElement('div', { className: 'container' }, [heading, paragraph]);

// abaikan kode di bawah ini
export default divContainer;
```

# Latihan Membuat React Element

```
import React from 'react';
import {createRoot} from 'react-dom/client';

const heading = React.createElement('h1', {id: 'test', className: 'myData'}, 'Biodata perusahaan');
const list1 = React.createElement('li', null, 'Nama');
const list2 = React.createElement('li', null, 'Description');
const list3 = React.createElement('li', null, 'Address');
const unOrderList = React.createElement('ul', null, [list1, list2, list3]);
const container = React.createElement('div', null, [heading, unOrderList]);


const root = createRoot(document.getElementById('root'));
root.render(container);
```

### JSX
#### Ekstensi .jsx pada berkas JavaScript
Ketika kita menulis kode JSX pada berkas JavaScript, kami sarankan gunakanlah ekstensi .jsx alih-alih .js. Tujuannya agar Anda dapat lebih mudah dalam membedakan berkas yang ditulis dengan kode JavaScript standar dan berkas yang memanfaatkan sintaks JSX.

Meskipun sintaks JSX dapat ditulis dalam berkas berekstensi .js, tetapi penggunaan ekstensi .jsx memiliki beberapa keuntungan, antara lain:

Beberapa IDE atau teks editor akan membantu memvalidasi sintaks JSX.
Alat transpilasi kode seperti Babel akan bekerja lebih optimal dalam menerjemahkan sintaks JSX ketika Anda menggunakan ekstensi .jsx dalam penamaan berkas JavaScript.
Ingat! Ekstensi .jsx hanya digunakan ketika pada berkas tersebut terdapat sintaks JSX. Tetap gunakan ekstensi .js jika hanya menulis sintaks JavaScript standar.

Simak bahan bacaan lebih lanjut terkait JSX pada: https://legacy.reactjs.org/docs/introducing-jsx.html

```
import React from 'react'
import {createRoot} from 'react-dom/client'
import dicodingLogo from './dicoding-logo.png'

const element = (
  <div>
    <h1>Nama Perusahaan</h1>
    <ul>
        <li>Nama perusahaan: Dicoding</li>
        <li>Bidang: Education</li>
        <li>Tagline: Decode ideas</li>
    </ul>

    <img src={dicodingLogo}  alt="logo dicoding"/>
  </div>
);

const root = createRoot(document.getElementById('root'));
root.render(element)
```

# React Component
Sejauh ini, kita telah mengetahui bagaimana .createElement() dan JSX dapat membantu kita dalam membuat React element yang ditampilkan pada Browser dengan bantuan React DOM. Selain React element, fitur utama lainnya yang sangat membantu kita dalam membangun UI adalah React Component. Fitur ini adalah kunci jika Anda ingin membangun UI yang reusable dan terisolasi.

Mudahnya, React component merupakan fungsi JavaScript yang mengembalikan React element. Alasan mengapa kita membuat React component sama dengan kapan kita harus membuat sebuah fungsi. Namun, alih-alih mengembalikan data, React component mengembalikan UI dalam bentuk React element.

**Terdapat 2 alasan mengapa Anda perlu membuat component.**

1. Pembuatan UI (React element) membutuhkan logika yang tidak sederhana, serta Anda ingin proses pembuatan UI tersebut terisolasi. Dengan begitu, kode dalam membuat UI tersebut tidak mengganggu kode lainnya.

2. Anda ingin membuat UI yang bersifat reusable. Artinya, hanya dengan satu kode UI namun dapat digunakan sebanyak apa pun dengan banyak varian data.

“Components let you split the UI into independent, reusable pieces, and think about each piece in isolation.”
- React Team [5]

Konsep component sangat ciamik karena kita dapat memecah (break down) UI ke bagian-bagian kecil. Bagian-bagian kecil dari UI tersebut memiliki tanggung jawab yang jelas dan properti yang sudah terdefinisikan. Hal ini sangat penting ketika membangun aplikasi yang besar karena kita dapat bekerja fokus pada bagian terkecil dari aplikasi tanpa mengganggu keseluruhan kode yang ada.

![Alt Text](image-3.gif)

Cara paling sederhana dalam membuat React component adalah menulis fungsi yang mengembalikan React element (dapat menggunakan JSX atau createElement).

function SayHello() {
  // Sebelum mengembalikan React element, Anda bisa menuliskan banyak kode JavaScript di sini.
  // Biasanya kode yang dituliskan seputar persiapan data untuk ditampilkan pada React element.
 
  return <p>Hello, World!</p>
}
Catatan: Konvensi dalam penamaan React component selalu diawali dengan huruf kapital. Hal ini bertujuan agar dapat membedakan antara built-in HTML element dan component yang Anda (atau pihak lain) buat sendiri. Selengkapnya bisa Anda baca di sini.

React component dapat digunakan dengan cara yang berbeda dari fungsi biasa, yakni menggunakan sintaksis JSX seperti ini.

<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
Layaknya sebuah fungsi, ia dapat digunakan sebanyak yang Anda mau.

<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
<SayHello /> // akan menampilkan ui <p>Hello, World!</p>
<SayHello /> // akan menampilkan ui <p>Hello, World!</p>

PERINGATAN
Perlu kalian ingat! Meskipun React component adalah fungsi JavaScript, tetapi ia harus diperlakukan (digunakan) layaknya sebuah component. Sebuah fungsi yang mengembalikan React element belum bisa dikatakan component bila Anda memanggilnya seperti ini.

SayHello(); // wrong practice!!